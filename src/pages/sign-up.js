import React, { useState } from "react"
import Layout from "../components/layout"
import "../components/layout.css"
import Loader from "../components/Loader"
import { Link, navigate } from "gatsby"
import axios from "axios"
import SEO from "../components/seo"
import LoginSignErrorMessage from "../components/LoginSignErrorMessage"
import Logo from "../images/logo.png"

export default function SignUp() {
  const [register, setRegister] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [errorMsg, setErrorMsg] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleMailerLiteSubscription = async e => {
    const name = register.name
    const email = register.email

    const mailerlite = {
      name,
      email,
    }
    const response = await window.fetch(`/api/mailerliteSubscription`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailerlite),
    })
  }

  const handleSignUp = () => {
    setLoading(true) // Request API.
    if (
      register.username === "" ||
      register.name === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      setLoading(false) // Request API.
      setErrorMsg(true)
      return null
    }
    axios
      .post(
        "https://websiteserver-ds7cf.ondigitalocean.app/auth/local/register",
        { ...register }
      )
      .then(response => {
        handleMailerLiteSubscription()
        navigate("/registration-success")
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error.response)
      })
  }

  return (
    <>
      {/* <Layout> */}
      <SEO title="Register" />
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-4 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
          <div className="col-start-2 col-span-2 bg-gray-100 rounded-xl  px-10 py-10">
            <Link to="/">
              <img src={Logo} className="my-5" />
            </Link>
            <p className="small-text mb-2">
              Register your account to view more of the content we offer, access
              our newsletters and discount offers, and subscribe to paid
              services.
            </p>
            {/* <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="username"
              onChange={e => setRegister({ ...register, username: e.target.value })}
            />
          </div> */}

            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="name"
                type="text"
                placeholder="name"
                onChange={e =>
                  setRegister({ ...register, name: e.target.value })
                }
              />
            </div>
            {/* <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="lastname"
            >
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="lastname"
              type="text"
              placeholder="lastname"
              onChange={e => setRegister({ ...register, lastname: e.target.value })}
            />
          </div> */}
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Email"
                onChange={e =>
                  setRegister({
                    ...register,
                    email: e.target.value,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                placeholder="******************"
                onChange={e =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
              {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
            </div>
            {errorMsg ? (
              <LoginSignErrorMessage message="There is an error, please check all inputs are completed" />
            ) : null}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <button
                className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSignUp}
              >
                {loading ? <Loader text="Sign Up" /> : "Sign Up"}
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker pt-2 sm:pt-0"
                to="/login"
              >
                Already have an account?
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="text-center text-sm my-5">
                www.platformable.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  )
}
