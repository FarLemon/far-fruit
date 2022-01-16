import * as React from "react"

import { Link } from "gatsby"

import Seo from "../components/seo"
import Wrapper from "../components/wrapper"


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
        margin: '5rem 1rem',
        fontSize: '1.25rem'
      }}>
        <h1>Oh No!</h1>
        <p>It seems you've reached an unrecognized page.<br/><br/>
        Return to <Link to='/' className='text-link-dark'>Homepage</Link>.</p>
      </div>
    </Wrapper>
  </div>
)

export default NotFoundPage
