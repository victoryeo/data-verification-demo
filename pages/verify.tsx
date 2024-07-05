import React, { ChangeEvent, useEffect, useState } from 'react';
import * as CryptoJS from 'crypto';
import { Navbar, DropBox, useFileContext } from 'ui';
import { Button, Modal } from 'react-bootstrap';
import {
  useGetFileByByTxHashLazyQuery,
  useGetFileByByTxIdLazyQuery,
  useGetFilesByCidLazyQuery,
  useUpdateIsVerifyFailedByIdMutation,
  useUpdateIsVerifyFailedByTxHashMutation,
  useVerifyFileByHashMutation,
  useVerifyFileByIdMutation,
} from 'database';
import { useLanguageContext } from 'libs/ui/src/lib/providers/LanguageProvider';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface Iverify {
  hash: string;
  id: string;
}

const Page = () => {
  const { language, changeLanguage, lang } = useLanguageContext();
  const { file } = useFileContext();
  const [input, setInput] = useState<Iverify>({ hash: '', id: '' });
  const [match, setMatch] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [getFiles] = useGetFilesByCidLazyQuery({ fetchPolicy: 'network-only' });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyFileByHashMutation] = useVerifyFileByHashMutation({});
  const [verifyFileByIdMutation] = useVerifyFileByIdMutation({});
  const [updateIsVerifyFailedByTxHashMutation] =
    useUpdateIsVerifyFailedByTxHashMutation({});
  const [updateIsVerifyFailedByIdMutation] =
    useUpdateIsVerifyFailedByIdMutation({});

  const [getFileByByTxHashLazyQuery] = useGetFileByByTxHashLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [getFileByByTxIdLazyQuery] = useGetFileByByTxIdLazyQuery({
    fetchPolicy: 'network-only',
  });
  // console.log(file)

  useEffect(() => {
    if (file?.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [file]);

  function sha256(input: string): string {
    const hash = CryptoJS.createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
  }
  const handleChange = (name: string, value: string) => {
    if (name === 'id') {
      setInput({ hash: '', id: value });
    } else {
      setInput({ hash: value, id: '' });
    }
  };
  // console.log(input.hash);
  const handleMatch = async (file: any) => {
    setLoading(true);
    console.log("1")
    if (file.length != 0) {
      console.log("2")
      file.map(async (list: any) => {
        console.log("3")
        console.log(input)
        const encryption = sha256(list.name);
        // if (input.id !== '') {
        //   const data = await getFiles({ variables: { _eq: list.name } });
        //   // console.log('ya lo data id', data.data?.Files[0]);
        //   if (input.id === encryption) {
        //     //Upload backup file

        //     const file = list.arrayBuffer().then((arrayBuffer: any) => {
        //       const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
        //       return buffer;
        //     });
        //     const body = {
        //       data: await file,
        //       blobName: list.name,
        //     };
        //     // console.log('from dropbox', list.type);
        //     await fetch('/api/upload', {
        //       method: 'POST',
        //       body: JSON.stringify(body),
        //     });
        //     // Update backup file
        //     // await verifyFileMutation({
        //     //   variables: {
        //     //     backup_file_cid: list.name,
        //     //     cid: data.data?.Files[0].cid,
        //     //   },
        //     // });
        //     setMatch('success');
        //     setShowModal(true);
        //     setLoading(false);
        //   } else {
        //     setMatch('failed');
        //     setShowModal(true);
        //     setLoading(false);
        //   }
        // }
        // if (input.hash !== '') {
        //   // console.log(list.name);
        //   const data = await getFiles({ variables: { _eq: list.name } });
        //   // console.log('ya lo data hash', data.data?.Files[0]);
        //   const hash = await data?.data?.Files[0].tx_hash;
        //   // console.log(hash);
        //   if (input.hash === hash) {
        //     // Upload backup file
        //     const file = list.arrayBuffer().then((arrayBuffer: any) => {
        //       const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
        //       return buffer;
        //     });
        //     const body = {
        //       data: await file,
        //       blobName: list.name,
        //       is_verify: true,
        //     };
        //     // console.log('from dropbox', list.type);
        //     await fetch('/api/upload', {
        //       method: 'POST',
        //       body: JSON.stringify(body),
        //     });
        //     // Update backup file
        //     await verifyFileByHashMutation({
        //       variables: {
        //         backup_file_cid: list.name,
        //         tx_hash: input.hash,
        //       },
        //     });
        //     setMatch('success');
        //     setShowModal(true);
        //     setLoading(false);
        //   } else {
        //     setMatch('failed');
        //     setShowModal(true);
        //     setLoading(false);
        //   }
        // }

        //**** */ New logic ********
        // Get data from tx hash or id
        if (input.hash != '') {
          console.log("4")
          // check for valid hash
          // const isHexadecimal = /^[0-9a-fA-F]+$/.test(input.hash);
          // console.log('here', isHexadecimal);
          if (input.hash.length !== 66) {
            toast.error(`${lang.toasts.invalid_hash[language]}`);
            setLoading(false);
            return;
          }
          // Get data by hash
          const data = await getFileByByTxHashLazyQuery({
            variables: {
              tx_hash: input.hash,
            },
          });

          const file = list.arrayBuffer().then((arrayBuffer: any) => {
            const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
            return buffer;
          });

          // now upload file
          const body = {
            data: await file,
            blobName: list.name,
          };
          // console.log('from dropbox', list.type);
          const file_upload_response = await fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify(body),
          });

          const file_upload_body = await file_upload_response.json();
          console.log('file_upload_body', file_upload_body);
          console.log('data hash', data.data?.Files[0]?.file_hash);
          // Update backup file
          if (file_upload_body?.file_hash === data.data?.Files[0]?.file_hash) {
            await verifyFileByHashMutation({
              variables: {
                backup_file_cid: list.name,
                tx_hash: input.hash,
              },
            });

            // update is_verificationFailed is false
            updateIsVerifyFailedByTxHashMutation({
              variables: {
                is_verificationFailed: false,
                tx_hash: input.hash,
              },
            });
            setMatch('success');
          } else {
            // update is_verificationFailed is true
            updateIsVerifyFailedByTxHashMutation({
              variables: {
                is_verificationFailed: true,
                tx_hash: input.hash,
              },
            });
            setMatch('failed');
          }

          setShowModal(true);
          setLoading(false);
        } else {
          console.log("5")
          // check for valid hash

          if (input.id.length !== 64) {
            console.log('dog');
            toast.error(`${lang.toasts.invalid_id[language]}`);
            setLoading(false);
            return;
          }
          const data = await getFileByByTxIdLazyQuery({
            variables: {
              tx_id: input.id,
            },
          });

          const file = list.arrayBuffer().then((arrayBuffer: any) => {
            const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
            return buffer;
          });

          // now upload file
          const body = {
            data: await file,
            blobName: list.name,
          };
          // console.log('from dropbox', list.type);
          const file_upload_response = await fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify(body),
          });

          const file_upload_body = await file_upload_response.json();

          console.log('file_upload_body', file_upload_body);
          console.log('data hash', data.data?.Files[0]?.file_hash);
          
          if (file_upload_body?.file_hash === data.data?.Files[0]?.file_hash) {
            await verifyFileByIdMutation({
              variables: {
                backup_file_cid: list.name,
                id: input.id,
              },
            });
            // update is_verificationFailed is false
            updateIsVerifyFailedByIdMutation({
              variables: {
                is_verificationFailed: false,
                id: input.id,
              },
            });
            setMatch('success');
          } else {
            // update is_verificationFailed is true
            updateIsVerifyFailedByIdMutation({
              variables: {
                is_verificationFailed: true,
                id: input.id,
              },
            });
            setMatch('failed');
          }
          setShowModal(true);
          setLoading(false);
        }

        // Then get the hash of file file from from hasura

        // call verify api

        /*
              1) First upload the file and return the url 
              2) Convert the url into hash
              3) Then compair this hash with the hash of hasura
              4) If both are match the setMatch(true) otherwise setMatch(false)
            */
      });
    }
  };
  const handleDownload = async (file: any) => {
    if (file.length != 0) {
      file.map(async (list: any) => {
        await fetch('/api/download', {
          method: 'POST',
          body: JSON.stringify({ blobName: list.name }),
        });
      });
    }
  };
  return (
    <div className="container-fluid">
      <Navbar />

      <div className="section">
        <div className="heading-area">
          <h1>
            {lang.pages.verify_inspection_report_uploadData.heading[language]}
          </h1>
          <p>
            {
              lang.pages.verify_inspection_report_uploadData.description[
                language
              ]
            }
          </p>
        </div>
        <div className="wrapper-base">
          <div className="compare row">
            <div className="col-md-6 mb-5">
              {/* compare form start */}
              <div className="compare-form">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={input.hash}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleChange('hash', e.target.value);
                    }}
                  />
                  <label htmlFor="floatingInput">
                    {
                      lang.pages.verify_inspection_report_uploadData.hash_title[
                        language
                      ]
                    }
                  </label>
                </div>
                <div className="or-text">
                  {
                    lang.pages.verify_inspection_report_uploadData.or_text[
                      language
                    ]
                  }
                </div>
                <div className="form-floating mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    value={input.id}
                    placeholder="Transaction ID"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleChange('id', e.target.value);
                    }}
                  />
                  <label htmlFor="floatingPassword">
                    {
                      lang.pages.verify_inspection_report_uploadData.hash_id[
                        language
                      ]
                    }
                  </label>
                </div>
              </div>
              {/* compare form end */}
            </div>
            <div className="col-md-6">
              <DropBox />
            </div>
          </div>
        </div>
      </div>

      <div className={`${disable ? 'footer2 fade-info' : 'footer2'}`}>
        <div className="footer-txt">
          <h5>{lang.footer2.title[language]}</h5>
          <p>{lang.footer2.description[language]}</p>
        </div>
        <Modal show={loading} className="popup-area popup-area-loader">
          {/* <img src="/spinner-unscreen.gif" alt="" /> */}
          <div className="loader"></div>
        </Modal>
        <Modal show={showModal} className="popup-area">
          <Modal.Header>
            <Button onClick={() => setShowModal(false)}>X</Button>
          </Modal.Header>
          <Modal.Body>
            {match === 'success' ? (
              <div className="congrats-text">
                <h1>
                  {
                    lang.notifications.verify_inspection_report_successful_msg
                      .title[language]
                  }
                </h1>
                <p>
                  {
                    lang.notifications.verify_inspection_report_successful_msg
                      .description[language]
                  }
                </p>
                <div className="view-btn">
                  <Link href="/data-match-reports">
                    <button className="btn view-report">
                      {
                        lang.notifications
                          .verify_inspection_report_successful_msg.button[
                          language
                        ]
                      }
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="reject-text">
                <h1>
                  {
                    lang.notifications.verify_inspection_report_failed_msg
                      .title[language]
                  }
                </h1>
                <p>
                  {
                    lang.notifications.verify_inspection_report_failed_msg
                      .description[language]
                  }
                </p>
                <div className="view-group-btn">
                  <Link href="/data-match-reports">
                    <button className="backup-download">
                      {
                        lang.notifications.verify_inspection_report_failed_msg
                          .button1[language]
                      }
                    </button>
                  </Link>
                  <button
                    className="btn view-report"
                    onClick={() => setShowModal(false)}
                  >
                    {
                      lang.notifications.verify_inspection_report_failed_msg
                        .button2[language]
                    }
                  </button>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
        <button
          type="submit"
          disabled={disable}
          onClick={() => {
            handleMatch(file);
          }}
        >
          {lang.footer2.button[language]}
          <img src="/rightArrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Page;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  // console.log('from server', session);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};
