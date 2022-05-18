import axios from 'axios';
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) => NextAuth( req, res,  {
  providers: [
    Providers.Credentials({
        name: 'Custom provider',
        credentials: {
            name:{type: 'text', name:"name", placeholder:'name'},
            password: {type: 'password', name:"password", placeholder:'password'}
        },
        async authorize(credentials){ 
            // const user = { name: 'admin' }

            // console.log(credentials )
            const response = await axios.post('http://localhost:5000/api/auth/login/', credentials);   
            const result = response?.data.result;
            const token = response?.data.token;
            const data = { result: result, token: `Bearer ${token}` }
            // credentials.token = token;
            if(response){

                // console.log('success to connect')
                // console.log(data)
                // console.log(response.data)
                // console.log({ result: response?.data.result, token: response?.data.token })
                // await localStorage.setItem('profile', JSON.stringify({ result: response?.data.result, token: response?.data.token }));
                // console.log(response.data)
                return response.data
            } else {
                console.log('failed to connect')
                return null
            }
            
        }
    }),
    // Providers.Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
  ],  
  // pages: {
  //   signIn: '/signin',
  //  },
    // jwt:{
    //   secret: process.env.JWT_SECRET
    // },
    session: {
        jwt: true
    },
    callbacks: {
      // async signIn(user, account, profile) {
      //   return true
      // },
      // async redirect(url, baseUrl) {
      //   return baseUrl
      // },
      // async session(session, user) {
      //   return session
      // },
      // async session(session, token) {
      //   // Add property to session, like an access_token from a provider.
      //   // session.accessToken = token.accessToken
      //   // return session
      //   console.log('here2');
      //   console.log(token);
      //   console.log(session);
      //   if (!session?.user || !token?.account) {
      //     return session
      //   }
    
      //   session.user.id = token.account.id
      //   session.accessToken = token.account.accessToken
        
      //   console.log('access token')
      //   console.log(session.accessToken)
      //   return session
      // },
      // async jwt(token, user, account, profile, isNewUser) {
      //   // // Add access_token to the token right after signin
      //   // if (account?.accessToken) {
      //   //   token.accessToken = account.accessToken
      //   // }
      //   // return token
      //   console.log('here');
      //   console.log(token);
      //   console.log(user);
      //   const isSignIn = (user) ? true : false
      //   // Add auth_time to token on signin in
      //   if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
      //   return Promise.resolve(token)
      // }

      // async jwt(token, user) {

      //   console.log('jwt message')
      //   console.log(user)
      //   console.log('jwt message user token')
      //   console.log(user.token)
      //   console.log('jwt message token')
      //   console.log(token)
      //   if (user) {
      //     token = { accessToken: user.token }
      //   }
    
      //   return token
      // },
    
      // async session(session, token) {
      //   session.accessToken = token.accessToken
      //   return session
      // }

    },
  // SQL or MongoDB database (or leave empty)
//   database: process.env.DATABASE_URL
})