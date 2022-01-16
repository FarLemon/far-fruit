import * as React from "react"
import PropTypes from "prop-types"

import "./index.scss"

const Wrapper = ({ children }) => {

  return (
    <div className='wrapper'>
      <main>{children}</main>
      <footer>
        <p>
          © {new Date().getFullYear()}, Built with{` `}
          <a className='text-link-light' href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
