import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useContractContext } from 'libs/blockchain/ethers';
import { useInsertFilesMutation, useIsDataPresentLazyQuery } from 'database';
import * as CryptoJS from 'crypto';
import { Navbar, DropBox, useFileContext } from 'ui';
import { Button, Modal } from 'react-bootstrap';
import Router from 'next/router';

import { ethers } from 'ethers';
import { useLanguageContext } from 'libs/ui/src/lib/providers/LanguageProvider';
import { toast } from 'react-hot-toast';
import { getSession } from 'next-auth/react';

export function Page() {
  const { language, changeLanguage, lang } = useLanguageContext();
  const [showModal, setShowModal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { contractInstance, provider, Wallet } = useContractContext();
  const { file } = useFileContext();
  const [insertFilesMutation, { data }] = useInsertFilesMutation({});
  const [IsDataPresentLazyQuery] = useIsDataPresentLazyQuery({
    fetchPolicy: 'network-only',
  });

  function sha256(input: string): string {
    const hash = CryptoJS.createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
  }

  useEffect(() => {
    if (file?.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [file]);

  const handleSubmit = async (file: any) => {
    setLoading(true);
    const gasPrice = 0;
    const senderAddress = Wallet.address;

    let nonce = await provider.getTransactionCount(senderAddress, 'latest');

    if (file.length != 0) {
      file.map(async (list: any) => {
        if (list.size > 1048576) {
          toast.error(
            <span>
              {list.name}, <b>{lang.toasts.upload.exceed_1MB[language]}</b>
            </span>,
            { duration: 2000 }
          );
          setLoading(false);
        } else {
          const dd = await IsDataPresentLazyQuery({
            variables: { cid: list.name },
          });
          if (dd.data?.Files_aggregate.aggregate?.count === 0) {
            const file = list.arrayBuffer().then((arrayBuffer: any) => {
              const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
              return buffer;
            });
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

            // console.log('File upload response', file_upload_body);

            const encryption = sha256(list.name);

            // console.log(encryption);

            const gp = 0;

            const tx = {
              nonce: nonce, // Include the nonce
              to: process.env.NEXT_PUBLIC_SC_ADDRESS,
              gasLimit: ethers.hexlify(ethers.toUtf8Bytes('300000')), // Set an appropriate gas limit
              gasPrice: ethers.parseUnits(`${gp}`, 'gwei'), // Set an appropriate gas price
              data: contractInstance.interface.encodeFunctionData('saveFile', [
                encryption,
              ]),
            };

            // console.log(11111, tx);
            nonce = nonce + 1;
            // const estimatedGas = await provider.estimateGas();

            // const tx = await(await contractInstance.saveFile(encryption,{ gasLimit: estimatedGas * 2 })).wait()
            const response = await Wallet.sendTransaction(tx);
            await response.wait();

            // console.log(response);

            const dbres = await insertFilesMutation({
              variables: {
                cid: list.name,
                counterID: encryption,
                tx_hash: response.hash,
                file_size: list.size.toString(),
                file_hash: file_upload_body?.file_hash,
              },
            });
            setLoading(false);

            if (dbres != undefined) {
              setShowModal(true);
            }
          } else {
            setLoading(false);
            toast.error(
              <span>
                {list.name}{' '}
                <b>{lang.toasts.upload.already_uploaded[language]}</b>
              </span>,
              {
                duration: 3000,
              }
            );
          }
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Navbar />

        <div className="section">
          <h1>{lang.pages.upload_inspection_report.heading[language]}</h1>
          <div className="upload-inspection-wrap">
            <DropBox />
          </div>
        </div>
        {/* fade-info */}
        <div className={`${disable ? 'footer2 fade-info' : 'footer2'}`}>
          <div className="footer-txt">
            <h5>{lang.footer1.title[language]}</h5>
            <p>{lang.footer1.description[language]}</p>
          </div>
          <button
            type="submit"
            disabled={disable}
            onClick={() => handleSubmit(file)}
          >
            {lang.footer1.button[language]}
            <img src="/arrow.svg" alt="arrow" />
          </button>
          <Modal show={loading} className="popup-area popup-area-loader">
            {/* <img src="/spinner-unscreen.gif" alt="" /> */}
            <div className="loader"></div>
          </Modal>
          <Modal show={showModal} className="popup-area">
            <Modal.Header>
              <Button onClick={() => setShowModal(false)}>X</Button>
            </Modal.Header>
            <Modal.Body>
              {/* congrats Pop view report start */}
              <div className="congrats-text">
                {
                  lang.notifications.upload_inspection_report.description[
                    language
                  ]
                }
                <div className="view-btn">
                  <button
                    className="btn view-report"
                    onClick={() => {
                      Router.push('/reports');
                    }}
                  >
                    {
                      lang.notifications.upload_inspection_report.button[
                        language
                      ]
                    }
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

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
