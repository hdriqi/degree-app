import React from 'react'
import Link from 'next/link'

import { useSelector } from 'react-redux'

import { authApi } from '../api'

import Button from './button'

const logout = () => {
  authApi.session().signUserOut('/login')
}

const Nav = () => {
  const authData = useSelector(state => state.auth.authData)

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          { authData.email }
        </li>
        <li>
          <Button onClick={() => logout()} text='Log Out' />
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  )
}

export default Nav
