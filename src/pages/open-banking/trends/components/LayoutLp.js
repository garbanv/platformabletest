import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import HeaderLp from "./HeaderLp"
import FooterLp from "./FooterLp"

import "../styles/index.css"

const LayoutLp = ({ children }) => {


  return (
    <>
      <HeaderLp siteTitle="Platformable" />
      <div className="w-auto overflow-x-hidden my-0 mx-0">
        <main className="my-25 mx-auto">{children}</main>
        <FooterLp siteTitle="Platformable" />
      </div>
    </>
  )
}



export default LayoutLp
