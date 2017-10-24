import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import logo from '../../static/favicons/android-chrome-192x192.png'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#0175d8',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem',
        color: '#fff',
        textDecoration: 'none'
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
      <img style={{ height: '1rem', background: '#fff', marginRight: '0.5rem'}} src={logo} alt="Gatsby HN PWA" />
      Gatsby HN
      </Link>
      <Link to ="/" style={{
        color: 'white',
        textDecoration: 'none',
        marginLeft: '4rem'
      }}>New</Link>
      <Link to ="/" style={{
        color: 'white',
        textDecoration: 'none',
        marginLeft: '2rem'
      }}>Comments</Link>
      <Link to ="/" style={{
        color: 'white',
        textDecoration: 'none',
        marginLeft: '2rem'
      }}>Show</Link>
      <Link to ="/" style={{
        color: 'white',
        textDecoration: 'none',
        marginLeft: '2rem'
      }}>Ask</Link>
      <Link to ="/" style={{
        color: 'white',
        textDecoration: 'none',
        marginLeft: '2rem'
      }}>Jobs</Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby HN PWA"
      meta={[
        { name: 'description', content: 'Hacker news PWA with Gatsby' },
        { name: 'keywords', content: 'hn, pwa, gatsby' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1rem 1.5rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
