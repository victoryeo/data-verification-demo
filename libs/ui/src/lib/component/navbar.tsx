import React from 'react';
import Image from 'next/image';
import logo from 'public/kawasaki-logo.svg';
import Router from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
import { signOut } from 'next-auth/react';
import { useLanguageContext } from '../../lib/providers/LanguageProvider';
import { useSession } from 'next-auth/react';

export const Navbar = () => {
  // Login user
  const { language, changeLanguage, lang } = useLanguageContext();
  const { data: session } = useSession();
  console.log('user:', session);
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-left">
          <div className="logo">
            <a href="/">
            </a>
          </div>
          <div className="title">
            {Router.pathname === '/' || Router.pathname === '/reports' ? (
              <h2
                className={`${
                  Router.pathname === '/reports'
                    ? 'title-underline'
                    : 'title-white'
                }`}
                onClick={() => Router.push('/reports')}
              >
                {lang.navbar.title1[language]}
              </h2>
            ) : (
              <h2
                className={`${
                  Router.pathname === '/data-match-reports'
                    ? 'title-underline'
                    : 'title-white'
                }`}
                onClick={() => Router.push('/data-match-reports')}
              >
                {lang.navbar.title2[language]}
              </h2>
            )}
          </div>
        </div>
        <div className="btn-group mid-bottons">
          {/* {Router.asPath == '/' ? (
            <button className="btn active-btn" onClick={() => Router.push('/')}>
              {lang.navbar.upload_inspection[language]}
            </button>
          ) : (
            <button className="btn" onClick={() => Router.push('/')}>
              {lang.navbar.verify_inspection[language]}
            </button>
          )} */}
          {/* {Router.asPath == '/verify' ? ( */}
          <button
            className={`btn ${Router.pathname == '/' ? 'active-btn' : ''}`}
            onClick={() => Router.push('/')}
          >
            {lang.navbar.upload_inspection[language]}
          </button>
          {/* ) : ( */}
          <button
            className={`btn ${
              Router.pathname == '/verify' ? 'active-btn' : ''
            }`}
            onClick={() => Router.push('/verify')}
          >
            {lang.navbar.verify_inspection[language]}
          </button>
          {/* )} */}
        </div>
        <div className="nav-right">
          <div className="btn-group lang-info ">
            <button
              className={`btn ${language === 'en' ? 'active-lang' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              {lang.navbar.language.lang1[language]}
            </button>
            <button
              className={`btn ${language === 'jp' ? 'active-lang' : ''}`}
              onClick={() => changeLanguage('jp')}
            >
              {lang.navbar.language.lang2[language]}
            </button>
          </div>
          <div className="email-info">
            <span>{session?.user?.email}</span>
            <p>{session?.user?.name}</p>
          </div>

          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src="user-dropdown.png" alt="user" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="list" id="mail" href="#">
                <span>{session?.user?.email}</span>
                <p>{session?.user?.name}</p>
              </Dropdown.Item>
              <ul className="otherlinks">
                <li className="upload">
                  <a href="">{lang.navbar.upload_inspection[language]}</a>
                </li>
                <li>
                  <a href="">{lang.navbar.verify_inspection[language]}</a>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
          <div className="logout">
            <button
              onClick={() => {
                signOut();
                Router.push('/login');
              }}
            >
              <img src="/logout.svg" alt="logout" />
              <p>{lang.navbar.logout[language]}</p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
