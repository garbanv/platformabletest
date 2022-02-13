import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import HeaderLp from "./HeaderLp"
import FooterLp from "./FooterLp"

import "../styles/index.css"

const LayoutLp = ({ children }) => {


  return (
    <>
      <HeaderLp siteTitle="" />
      <div className="w-screen overflow-x-hidden my-0 mx-auto font-noto-sans">
        <main className="my-25 mx-auto">{children}</main>
        <FooterLp siteTitle="" />
      </div>
    </>
  )
}

LayoutLp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLp
