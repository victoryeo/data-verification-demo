import {
  BlobServiceClient,
  ContainerClient,
  BlockBlobClient,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
} from '@azure/storage-blob';
import { NextApiRequest, NextApiResponse } from 'next';

async function getBlobUrl(blobName: string) {
  console.log('AZ_SEC', process.env.NEXT_PUBLIC_AZ_SECRET)
  const connectionString =
    "DefaultEndpointsProtocol=https;AccountName=" + process.env.AZ_NAME + ";AccountKey=" + process.env.NEXT_PUBLIC_AZ_SECRET + ";EndpointSuffix=core.windows.net";
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  console.log('request logs', body.blobName);

  try {
    const sasUrl = await getBlobUrl(body.blobName);

    // Send the SAS URL as a JSON response
    res.status(200).json({ downloadUrl: sasUrl });
  } catch (error) {
    console.error('Error getting download URL:', error);
    res.status(400).json({ error: 'Error getting download URL' });
  }
};
