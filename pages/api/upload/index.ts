import {
  BlobServiceClient,
  ContainerClient,
  BlockBlobClient,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
} from '@azure/storage-blob';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import * as Minio from 'minio';

let minioClient = new Minio.Client({
  endPoint: `${process.env.MINIO_ENDPOINT}`,
  port: 9000,
  useSSL: true,
  accessKey: `${process.env.MINIO_ACCESS_KEY}`,
  secretKey: `${process.env.MINIO_SECRET_KEY}`,
})
console.log('minioClient', minioClient)

async function uploadImageToBlobStorage(
  blobName: string,
  localFilePath: Uint8Array
) {
  console.log('uploadImageToBlobStorage', blobName, localFilePath.length);

  const bucketName = 'data';
  console.log('from function', localFilePath.length);

  try {
    // Using putObject API upload your file to the bucket
    minioClient.putObject(bucketName, blobName, Buffer.from(localFilePath), localFilePath.length, function (err, response) {
    if (err)
      return console.log(err)
      console.log('File uploaded successfully.', response)
      return response;
    })
  } catch (error) {
    console.error('Error uploading file:', error);
    throw Error('Error uploading file:' + error);
  }
}
async function getBlobUrl(blobName: string) {
  const connectionString =
    "DefaultEndpointsProtocol=https;AccountName=kawasakisettlemint;AccountKey=" + process.env.NEXT_PUBLIC_AZ_SECRET + ";EndpointSuffix=core.windows.net";
  const containerName = 'containerkhi';

  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const sasQueryParams = generateBlobSASQueryParameters(
    {
      containerName,
      blobName,
      permissions: BlobSASPermissions.parse('r'),
      startsOn: new Date(),
      expiresOn: new Date(new Date().valueOf() + 3600 * 1000),
    },
    //@ts-ignore
    blockBlobClient.credential
  );

  const sasUrl = `${blockBlobClient.url}?${sasQueryParams.toString()}`;

  return sasUrl;
}

async function getHash(uploaded_doc_url: string) {
  const response = await axios.get(uploaded_doc_url, {
    responseType: 'arraybuffer',
  });
  const fileData = response.data;
  console.log(fileData);

  const hash = crypto.createHash('sha256');
  hash.update(fileData);

  const fileHash = hash.digest('hex');
  return fileHash;
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
  const response = await uploadImageToBlobStorage(
    body.blobName,
    body.data.data
  );
  // console.log(response)
  // also  get the
  const uploaded_doc_url = await getBlobUrl(body.blobName);
  console.log(uploaded_doc_url);
  const fileHash = await getHash(uploaded_doc_url);
  try {
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
