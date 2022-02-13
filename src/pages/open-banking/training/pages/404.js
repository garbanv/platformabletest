import React from "react"
import { Link } from "gatsby"
import notFoundImg from "../assets/404.png"
import LayoutLp from "../components/LayoutLp"
import SEOLp from "../components/SEOLp"

const NotFoundPage = () => (
  <LayoutLp>
    <SEOLp title="404: Not found" />
    <div className="404-container flex flex-col sm:flex-row">
      <img src={notFoundImg} alt="daisy crying" className="flex-1" />
      <div className="text-center align-center flex-1">
        <div>
          <h2 className="text-5xl pt-28 pb-8">Oopsy Daisy...</h2>
          <p className="pb-8">Cheer up, buttercup!</p>
          <p className="pb-8">It's just a 404 Error</p>
        </div>
        <div className="my-8">
          {process.env.NODE_ENV === "development" ? (
            <>
              <p>
                Try creating a page in <code>src/pages/</code>.
              </p>
            </>
          ) : null}
          <Link to="/">Go back HOME</Link>.
        </div>
      </div>
    </div>
  </LayoutLp>
)

export default NotFoundPage
