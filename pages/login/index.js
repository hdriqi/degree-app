import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { withRedux } from '../../lib/redux'
import { saveAuthData } from '../../stores/auth/actions'
import { authApi } from '../../api'

import Meta from '../../components/meta'
import Login from '../../components/login'

const LoginPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
	
	useEffect(() => {
		const checkAuthData = async () => {
      if(authApi.session().isUserSignedIn()) {
        const authData = authApi.session().loadUserData()
        dispatch(saveAuthData(authData))
        router.replace('/')
      }
			else if(authApi.session().isSignInPending()) {
        const authData = await authApi.session().handlePendingSignIn()
        dispatch(saveAuthData(authData))
			}
		}
		checkAuthData()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Login | Degree</title>
      </Head>
      <Meta />

      <Login />
    </div>
  )
}

LoginPage.getInitialProps = ({ res }) => {
  
}

export default withRedux(LoginPage)
