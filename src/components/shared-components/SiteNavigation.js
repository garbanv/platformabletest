import React from "react"
import { Link } from "gatsby"

const SiteNavigation = props => {
  return (
    <nav className="flex-initial font-bold md:w-2/6">
      <ul className="flex justify-evenly items-center flex-wrap px-5">
        <Link to="/" className="py-1 px-3">
          Home
        </Link>
        <Link to="/blog" className="py-1 px-3">
          Blog
        </Link>
        <Link to="/about" className="py-1 px-3">
          About
        </Link>
        <Link to="/trends-reports" className="py-1 px-3">
          Trends Reports
        </Link>
        <Link to="/open-banking" className="py-1 px-3">
          Open Banking
        </Link>
        <Link to="/digital-government">Digital Government</Link>
        <Link to="/newsletter" className="py-1 px-3">
          Newsletter
        </Link>
        <Link to="/projects" className="py-1 px-3">
          Projects
        </Link>
        <Link to="/articles" className="py-1 px-3">
          Articles
        </Link>
        <Link to="/public-health" className="py-1 px-3">
          Public Health
        </Link>
      </ul>
    </nav>
  )
}

export default SiteNavigation
