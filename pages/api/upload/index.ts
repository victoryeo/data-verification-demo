import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import * as Minio from 'minio';
import { daemonClient } from 'nx/src/daemon/client/client';

let minioClient = new Minio.Client({
  endPoint: `${process.env.MINIO_ENDPOINT}`,
  //port: 443,
  //useSSL: true,
  accessKey: `${process.env.MINIO_ACCESS_KEY}`,
  secretKey: `${process.env.MINIO_SECRET_KEY}`,
})
//console.log('minioClient', minioClient)

async function uploadImageToBlobStorage(
  blobName: string,
  localFilePath: Uint8Array
) {
  console.log('uploadImageToBlobStorage', blobName, localFilePath.length);

  const bucketName = 'data';
  //console.log('from function', localFilePath.length);

  try {
    // Using putObject API upload your file to the bucket
    const response = await minioClient.putObject(bucketName, blobName, Buffer.from(localFilePath), localFilePath.length)
    console.log('File uploaded successfully.', response)
    return response;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw Error('Error uploading file:' + error);
  }
}
async function getBlobUrl(blobName: string) {
  // url
  const sasUrl = `${process.env.MINIO_ENDPOINT}`+'/data/' + blobName;

  return sasUrl;
}

async function getHash(uploaded_doc_url: string, blobName: string) {

  const promise = new Promise((resolve, reject) => {

    let bufs: any;
    //let bufs = Buffer.alloc(0);
    let fileHash: any;
  
    minioClient.getObject('data', blobName).then(function(dataStream) {
    dataStream.on('data', function (chunk:any) {
      console.log('Got a chunk of data: ' + chunk.length)
      bufs += chunk;
    })
    dataStream.on('end', function () {
      console.log('End.')
      const hash = crypto.createHash('sha256');
      // console.log('bufs', bufs)

      const resp = JSON.stringify(bufs);
      //console.log('resp', resp)
      hash.update(resp);
      fileHash = hash.digest('hex');
      console.log('file hash1', fileHash)
      resolve (fileHash);
    })
    dataStream.on('error', function (err) {
      console.log('Error....')
      console.error(err)
      reject(err)
    })
    console.log('file hash2', fileHash)

  }).catch((e) => {console.log('error', e)})

  })
  return promise;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  console.log(
    'request logs',
    body.blobName,
    body.data.data.length,
    body.is_verify,
    body.old_file_hash
  );
  try {
    const response = await uploadImageToBlobStorage(
      body.blobName,
      body.data.data
    );
    // console.log(response)
    // also  get the
    const uploaded_doc_url = await getBlobUrl(body.blobName);
    console.log("url: ", uploaded_doc_url);
    const fileHash = await getHash(uploaded_doc_url, body.blobName);
    console.log('file hash', fileHash);

    const fileHash_again = await getHash(uploaded_doc_url, body.blobName);
    console.log('file hash again', fileHash_again);

    // file hash
    res
      .status(200)
      .json({ response: response, url: uploaded_doc_url, file_hash: fileHash });

    // res.status(200).json({ response: response });
  } catch (e) {
    console.log('catch error', e);
    res.status(400).json(e);
  }
};
// Call the function to upload the image
