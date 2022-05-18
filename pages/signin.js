
import { getCsrfToken, session, getSession, providers, useSession, signIn } from 'next-auth/client'
import { GoogleLogin } from 'react-google-login';
import { useRouter } from 'next/router';
import Link from 'next/link';



export default function SignIn({ providers, csrfToken }) {

  const router = useRouter();
  const [session, loading] = useSession()
  const googleSuccess = async (res) =>{
		console.log(res) 
		const result = res?.profileObj;
		const token = res?.tokenId;

		try{
			// const { data: { result, token } } = res
			const data = { result: result, token: token }
			console.log(`result`)
			console.log(data)

			// if(result.googleId === process.env.ADMIN_GOOGLE_ID){

			//   localStorage.setItem('profile', JSON.stringify(data));

			//   // setUser(data.token);

			//   // setUser(JSON.parse(localStorage.getItem('profile')))
		  // }

			// console.log(test)
		}catch(err){
			console.log(err)
		}
	}

	const googleFailure = () =>{
		console.log('google login failed')
	}

  
  return (
    <div className="signin-form-page">
      <div className="signin-form-container">
        <h2>Login</h2>
        <form method='post' action='/api/auth/callback/credentials'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <label>
            Username
            <input name='name' type='text'/>
          </label>
          <label>
            Password
            <input name='password' type='password'/>
          </label>
          <button className="submit-btn" type='submit'>Sign in</button>
        </form>
        <hr></hr>
        {
          Object.values(providers).map( (provider, idx) => {
            if(provider.name === "Credentials"){
              return ;
            }
            return (
              <div key={idx} >
                <button className="google-btn" onClick={ () => signIn(provider.id) }>
                  Sign in with {provider.name}
                </button>
              </div>
            )
          })
        }
         {/* <Link href="/register">
          <a className="signup">Signup</a>
        </Link> */}
        <Link href="/">
          <a className="goto-home">Go back to home page</a>
        </Link>
       
      </div>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const {req, res} = context;
  const session = await getSession({req})

  if(session && res && session.accessToken){
    res.writeHead(302,{
      Location: "/"
    })

    res.end()
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers: await providers(context)
    }
  }
}