import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const hasuraHandler = (req: NextApiRequest, res: NextApiResponse) => (
  httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: process.env.HASURA_INTEGRATION_HOST,
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
    pathRewrite: [{
      patternStr: "^/api/hasura-integration",
      replaceStr: "/v1/graphql"
    }],
    headers: {
      'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
      'x-auth-token': `${process.env.NEXT_PUBLIC_API_KEY}`
    },
    changeOrigin: true,
    xfwd: true,
  })
);

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
};

export default hasuraHandler;