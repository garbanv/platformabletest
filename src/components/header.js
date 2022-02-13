import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import Logo from "../images/logo.png"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const [user, setUser] = useContext(UserContext || false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem("user", JSON.stringify(user))
    }
  }, [user])

  function openNav() {
    return document
      ? (document.getElementById("mySidenav").style.width = "100%")
      : null
  }

  function closeNav() {
    return document
      ? (document.getElementById("mySidenav").style.width = "0")
      : null
  }

  const handleLogOut = () => {
    setUser({
      isLoggedIn: false,
    })

    navigate("/")
  }

  return (
    <header>
      {/* MOBILE NAV */}
      <div className="lg:hidden  block container mx-auto mobile-nav">
        <div className="flex justify-between px-5 md:px-3 py-2">
          <div>
            <Link to="/">
              <StaticImage
                src="../images/logo.png"
                alt="platformable"
                placeholder="blurred"
                layout="fixed"
                width={225}
              />
            </Link>{" "}
          </div>
          <div onClick={openNav}>
            <span
              className="block h-8 w-auto"
              style={{ fontSize: 30 + "px", cursor: "pointer" }}
            >
              &#9776;
            </span>
          </div>
        </div>

        <div id="mySidenav" className="sidenav block lg:hidden">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sectors">Sectors</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/contact">Contact</Link>
          {user.isLoggedIn ? (
            ""
          ) : (
            <Link to="/login" state={{ previousPost: false }}>
              Login
            </Link>
          )}
          {user.isLoggedIn ? <Link to="/app/dashboard">Dashboard</Link> : ""}
          {user.isLoggedIn ? (
            <span onClick={handleLogOut} className="cursor-pointer">
              Logout
            </span>
          ) : (
            ""
          )}
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="bg-white hidden lg:block container mx-auto xl:px-3">
        <div className="">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start ">
              <div className="hidden sm:block flex justify-between  sm:py-2">
                <div>
                  <Link to="/">
                    <StaticImage
                      src="../images/logo.png"
                      alt="platformable"
                      placeholder="blurred"
                      layout="fixed"
                      width={225}
                    />
                  </Link>
                </div>
                <div>
                  <span
                    className="block lg:hidden h-8 w-auto"
                    style={{ fontSize: 30 + "px", cursor: "pointer" }}
                  >
                    &#9776;
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="top-nav px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="top-nav  hover:bg-sunglow  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    About
                  </Link>
                  {/* <Link
                    to="/products"
                    className=" top-nav text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Products
                  </Link> */}
                  <Link
                    to="/sectors"
                    className=" top-nav  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Sectors
                  </Link>
                  <Link
                    to="/blog"
                    className="top-nav  hover:bg-sunglow  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/labs"
                    className="top-nav  hover:bg-sunglow  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Labs
                  </Link>
                  <Link
                    to="/contact"
                    className="top-nav  hover:bg-sunglow  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Contact
                  </Link>
                  {user && user.isLoggedIn ? (
                    <Link
                      to="/app/dashboard"
                      className="top-nav  hover:bg-sunglow  px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="active-top-nav"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    ""
                  )}
                  {user.isLoggedIn ? (
                    ""
                  ) : (
                    <Link
                      to="/login"
                      className=" top-nav text-white   px-3 py-2 rounded-md text-sm font-medium bg-russian-violet-dark"
                      activeClassName="active-top-nav"
                      state={{ previousPost: false }}
                    >
                      Login
                    </Link>
                  )}
                  {user && user.isLoggedIn ? (
                    <span
                      className=" top-nav text-white   px-3 py-2 rounded-md text-sm font-medium bg-russian-violet-dark cursor-pointer"
                      activeClassName="active-top-nav"
                      onClick={handleLogOut}
                    >
                      Logout
                    </span>
                  ) : (
                    ""
                  )}
                  <Link
                    to="/sign-up"
                    className="top-nav bg-gray-200  px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="active-top-nav"
                  >
                    Sign Up
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
