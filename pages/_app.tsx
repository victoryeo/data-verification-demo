import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import localFont from 'next/font/local';
const myFont = localFont({
  src: [
    {
      path: './fonts/gilroy-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/gilroy-light-webfont.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/gilroy-medium-webfont.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/gilroy-black-webfont.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});
import { RouteGuard } from 'libs/utils/src';
import { SessionProvider } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApollo } from '../hooks/use-apollo';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'react-hot-toast';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ContractProvider } from 'libs/blockchain/ethers';
import { FileProvider } from 'libs/ui/src/lib/providers/fileProvider';
import { LanguageProvider } from 'libs/ui/src/lib/providers/LanguageProvider';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { client } = useApollo(pageProps);
  if (!client) {
    return null;
  }
  console.log('AZ_SEC', process.env.NEXT_PUBLIC_AZ_SECRET)

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>

      <div className="app">
        <SessionProvider>
          <ApolloProvider client={client}>
            <ContractProvider>
              <LanguageProvider>
                <FileProvider>
                  <RouteGuard>
                    <main className={myFont.className}>
                      <Toaster position="bottom-right" reverseOrder={false} />
                      <Component {...pageProps} />
                    </main>
                  </RouteGuard>
                </FileProvider>
              </LanguageProvider>
            </ContractProvider>
          </ApolloProvider>
        </SessionProvider>
      </div>
    </>
  );
}
