import React from "react"
import { Link } from "gatsby"
import platformableLogo from "../assets/logo.svg"
import payXLogo from "../assets/PAYX_Logo.svg"

const HeaderLp = props => {
  return (
    <header className="md:flex my-8 mr-0 ml-12 overflow-x-hidden">
      <Link to="/">
        <img
          src={platformableLogo}
          alt="platformable logo written in blue letters and a blue square"
          className="mr-2"
        />
      </Link>
      <div className="mr-2 border-r-2"></div>
      <img src={payXLogo} alt="PayX Logo" className="mr-2" />
    </header>
  )
}

export default HeaderLp
