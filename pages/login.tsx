import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import logo from '../public/kawasaki-logo.png';
import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguageContext } from 'libs/ui/src/lib/providers/LanguageProvider';
import { Modal } from 'react-bootstrap';
const Page = () => {
  const { language, changeLanguage, lang } = useLanguageContext();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const callbackUrl = (router.query?.callbackUrl as string) ?? '/';
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const _target = e.target as any;
    const email = _target.email.value;
    const password = _target.password.value;
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      setError(result.error);
    } else {
      setLoading(false);
      router.push(callbackUrl);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <nav>
          <div className="nav-left">
          </div>
          <div className="nav-right">
            <div className="btn-group lang-info">
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
          </div>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="login-wrap">
            <div className="form">
              <div className="loginform">
                <h2>{lang.pages.login.heading[language]}</h2>

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter Email "
                    name="email"
                  />
                  <label htmlFor="floatingInput">
                    {lang.pages.login.email_title[language]}
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                  />
                  <label htmlFor="floatingPassword">
                    {lang.pages.login.password_title[language]}
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-btn">
                    {lang.pages.login.button[language]}
                  </button>
                </div>
                <div className="error-box">{!!error && <p>{error}</p>}</div>
              </div>
            </div>
            <div className="banner">
              <img id="hand" width="600" src="phandall.png" alt="hand" />
            </div>
          </div>
        </form>

        <div className="footer">
          <div className="footer-txt">
            <label htmlFor="">{lang.pages.login.company_label[language]}</label>
            <span className="footer-logo">
              <img
                src="SettleMint_logo_cmyk_hor_neg.png"
                alt="settlemint logo"
              />
            </span>
          </div>
        </div>
      </div>
      <Modal show={loading} className="popup-area popup-area-loader">
        {/* <img src="/spinner-unscreen.gif" alt="" /> */}
        <div className="loader"></div>
      </Modal>
    </>
  );
};
export default Page;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  // console.log('from server', session);
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  return {
    props: { session },
  };
};
