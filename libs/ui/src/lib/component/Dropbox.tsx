import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFileContext } from '../providers/fileProvider';
import { useLanguageContext } from '../providers/LanguageProvider';
import { Router, useRouter } from 'next/router';

// import * as CryptoJS from 'crypto';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import { useContractContext } from 'libs/blockchain/ethers/index'
// import { useInsertFilesMutation } from 'database';
// import { useEffect } from 'react';
// import Router from 'next/router';

// interface props {
//   isDragAccept: boolean
//   isDragReject: boolean
//   isFocused: boolean
// }
export function Dropbox({ onDrop }: any) {
  const { language, changeLanguage, lang } = useLanguageContext();

  const router = useRouter();
  console.log(router);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/zip': ['.zip'],
    },
    onDrop,
    noClick: true,
    noKeyboard: true,
    multiple: router?.pathname === '/verify' ? false : true,
  });

  // const { contractInstance } = useContractContext()
  const { file, setFiles } = useFileContext();

  // const [insertFiles] = useInsertFilesMutation()

  // function sha256(input: string): string {
  //   const hash = CryptoJS.createHash('sha256');
  //   hash.update(input);
  //   return hash.digest('hex')
  // }

  // ****** close list

  const removeDigitalOrderCid = (index: number) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  console.log('af', acceptedFiles);
  const lists = file?.map((list: any, index: number) => {
    return (
      <>
        <li key={list?.name}>
          {list?.name} - {list.size} bytes
          <div>
            <div className="progress-container">
              <div className="pp"></div>
              <div className="close-cross-btn">
                <button onClick={() => removeDigitalOrderCid(index)}>X</button>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  });

  // useEffect(() => {
  //   if (Router.asPath === '/') {
  //     acceptedFiles.map(async (list) => {
  //       const file = list.arrayBuffer().then((arrayBuffer) => {
  //         const buffer = Buffer.from(arrayBuffer); // Convert to a buffer
  //         return buffer
  //       });
  //       const body = {
  //         data: await file,
  //         blobName: list.name
  //       }
  //       console.log('from dropbox', list.type)
  //       await fetch('/api/upload', {
  //         method: 'POST',
  //         body: JSON.stringify(body)
  //       })
  //       const encryption = sha256(list.name)
  //       console.log('this is the encryption', encryption)

  //       const tx = await contractInstance.saveFile(encryption, { gasPrice: 0 })
  //       console.log('transaction reciept', tx)

  //       await insertFiles({
  //         variables: {
  //           cid: list.name,
  //           counterID: encryption,
  //           tx_hash: tx.hash
  //         }
  //       })
  //     });
  //   }
  //   if (Router.asPath === '/verify') {
  //     acceptedFiles.map(async (list) => {
  //       const encryption = sha256(list.name)
  //       console.log('this is the encryption', encryption)
  //     })
  //   }
  // }, [acceptedFiles[0]])
  useEffect(() => {
    setFiles(acceptedFiles);
  }, [acceptedFiles]);

  // Delete file from list

  return (
    <>
      {' '}
      <section className="dropbox">
        <div
          className="dropbox-outer"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <div className="folder-img">
            <img src="folder.png" alt="" />
          </div>
          <input {...getInputProps()} />

          <button type="button" className="btn addfile-btn" onClick={open}>
            {lang.pages.upload_inspection_report.button[language]}
          </button>
          <p className="drag-drop">
            {lang.pages.upload_inspection_report.description1[language]}
          </p>
          <p className="accept-file">
            {lang.pages.upload_inspection_report.description2[language]}
          </p>
          <p className="accept-file">
            {lang.pages.upload_inspection_report.description3[language]}
          </p>
        </div>
      </section>
      <div className="listing-area">
        <div className="list-header">
          <h2>{lang.pages.upload_inspection_report.uploading[language]} :</h2>
          <span>
            {file?.length}{' '}
            {lang.pages.upload_inspection_report.number_of_files[language]}
          </span>
        </div>
        <ul className="listing-items">{lists}</ul>
      </div>
    </>
  );
}
