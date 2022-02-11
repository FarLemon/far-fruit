import * as React from "react"
import PropTypes from "prop-types"

import './index.scss';

const Wrapper = ({ children }) => {

  return (
    <div className='wrapper' style={{overflowY: "hidden"}}>

      <main>
        {children}
      </main>

      <footer>
        <p>Designed & Built by Joshua Messer</p>
      </footer>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
