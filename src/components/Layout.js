import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <>
    <Helmet></Helmet>
    <header></header>
    <main>{children}</main>
  </>
)
