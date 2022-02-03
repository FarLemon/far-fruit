import * as React from "react"

import { Link } from "gatsby"

import Seo from "../components/seo.js"
import Wrapper from "../components/wrapper/index.js"


const NotFoundPage = () => (
  <div className='content'>
    <Seo title='404'/>
    <Wrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '5rem',
        fontSize: '1.25rem',
        color: '#868686'
      }}>
        <h1>Oh No!</h1>
        <p>It seems you've reached an unrecognized page.<br/><br/>
        Return to <Link to='/' style={{textDecoration: 'none', color: '#5fb473'}}>Homepage</Link>.</p>
      </div>
    </Wrapper>
  </div>
)

export default NotFoundPage
