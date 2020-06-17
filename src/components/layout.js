import React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {

  return (
    <div
      style={{
        marginTop: '1rem',
        marginLeft: `1rem`,
        marginRight: `1rem`,
        boxSizing: 'border-box'
      }}
    >
      <main>{children}</main>
    </div>
  )
}

export default Layout
