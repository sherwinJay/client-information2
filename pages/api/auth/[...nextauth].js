import axios from 'axios';
import { defaults } from 'js-cookie';
import NextAuth from 'next-auth'
import { Provider } from 'next-auth/client';
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        name:{type: 'text', name:"name", placeholder:'name'},
        password: {type: 'password', name:"password", placeholder:'password'},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const response = await axios.post(`${process.env.SERVER_SITE}/api/auth/login/`, credentials);   
  
        if (response) {

          return response.data
          
        } else {
          // If you return null or false then the credentials will be rejected
          return null
        }
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    // {
    //   id: "google",
    //   name: "Google",
    //   type: "oauth",
    //   version: "2.0",
    //   scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    //   params: { grant_type: "authorization_code" },
    //   accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
    //   requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
    //   async profile(profile, tokens) {
    //     // You can use the tokens, in case you want to fetch more profile information
    //     // For example several OAuth providers do not return email by default.
    //     // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
    //     return {
    //       id: profile.id,
    //       name: profile.name,
    //       email: profile.email,
    //       image: profile.picture
    //     }
    //   },
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // },
  ],
  session: {
    jwt: true,
    maxAge: 1 * 60 * 60,
  },
  callbacks: {

    async signIn(token, account, profile) {
      return true
    },

    async jwt(token, user, profile) {
      if(user){
        if (profile.type === 'credentials') {
          token = { accessToken: user.token, user: user.result }
        }else if(profile.provider === 'google'){
          if(user.id == process.env.ADMIN_GOOGLE_ID){
            token = { accessToken: profile.idToken, user: user, id: user.id  }
          }else{
            return null;
          }
        }else if(profile.provider === 'github'){
          if(user.id == process.env.ADMIN_GITHUB_ID){
            token = { accessToken: profile.idToken, user: user, id: user.id  }
          }else{
            return null;
          }
        }
      }

      return token
    },

    async session(session, token) {
      
      session = token

      return session
    } 
  },
  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/signin', // Error code passed in query string as ?error=
  }
  // database: process.env.DATABASE_URL
}


export default (req, res) => NextAuth(req,res,options)