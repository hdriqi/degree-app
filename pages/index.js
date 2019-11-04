import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import Meta from '../components/meta'
import Nav from '../components/nav'
import OrgList from '../components/orgList'

import { saveAuthData } from '../stores/auth/actions'
import { authApi } from '../api'

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!authApi.session().isUserSignedIn()) {
      router.replace('/login')
    }
    const authData = authApi.session().loadUserData()

    const fetchOrgList = async () => {
      const orgList = await authApi.session().getFile('orgList.json')
      console.log(orgList)
    }

    dispatch(saveAuthData(authData))
    setLoading(false)

    fetchOrgList()
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Meta />

      {
        loading ? (
          <div>
            Loading...
          </div>
        ) : (
          <React.Fragment>
            <Nav />

            <OrgList />
          </React.Fragment>
        )
      }

      <style jsx global>{`
        body {
          background-color: #1F2323;
        }
      `}</style>
    </div>
  )
}

export default withRedux(Home)
