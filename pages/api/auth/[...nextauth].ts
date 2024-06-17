import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import axios from 'axios';

console.log('NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET);
console.log('HASURA_ADMIN_SECRET', process.env.HASURA_ADMIN_SECRET);
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    'please provide process.env.NEXTAUTH_SECRET environment variable'
  );
}
const graphqlQuery = {
  query: '{ User {email id password}}',
  variables: null,
  operationName: null,
};
const endpoint = `${process.env.HASURA_INTEGRATION_HOST}/v1/graphql`;

const headers = {
  'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
  'x-auth-token': `${process.env.NEXT_PUBLIC_API_KEY}`,
  'content-type': 'application/json',
};

const response = axios({
  url: endpoint,
  method: 'post',
  headers: headers,
  data: graphqlQuery,
});


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const userObject =  ((await response).data.data.User[0]);
        if (
          credentials?.email !== userObject.email ||
          credentials?.password !== userObject.password
        ) {
          throw new Error('Invalid email or password');
        }
        return {
          email: userObject.email,
          name: 'Admin',
          id: '1',
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
});
