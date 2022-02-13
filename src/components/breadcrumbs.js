import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

export default function Breadcrumbs({ location }) {
  const [urls, setUrls] = useState([])

  const getLocations = location => {
    const url = location.href
    const getUrls = url.split(/[/]/)
    const pathnames = getUrls.splice(3, getUrls.length - 1)
    setUrls(pathnames)
  }

  useEffect(() => {
    getLocations(location)
  }, [])
  return (
    <section className="container mx-auto py-5 px-5 md:px-0 ">
      <div className="px-0 md:px-3 lg:px-0 xl:px-3">
        <ul className="flex">
          <li className="small-text">
            <Link to={`/sectors`}>Sectors</Link>
          </li>
          {urls &&
            urls.map((url, index) => {
              return (
                <>
                  <li
                    className={`small-text ${
                      index === urls.length - 1 ? "font-black" : null
                    }`}
                  >
                    <Link
                      to={index === urls.length - 1 ? null : `/${url}`}
                    >{`/${url}`}</Link>
                  </li>
                </>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
