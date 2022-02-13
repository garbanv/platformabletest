import React, { useContext, useState } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import UserContext from "../../../context/UserContext"
import Loader from "../../../components/Loader"
import LoginSignErrorMessage from "../../../components/LoginSignErrorMessage"
import axios from "axios"

function StrapiUser({ data }) {
  const [user, setUser] = useContext(UserContext)
if(data) {

}
  const [register, setRegister] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [errorMsg, setErrorMsg] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleSignUp = () => {
    setLoading(true) // Request API.
    if (
      register.username === "" ||
      register.name === "" ||
      register.lastname === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      setLoading(false) // Request API.
      setErrorMsg(true)
      return null
    }

    setLoading(true)
  
  }
  return (
    <Layout>
      <SEO title="Profile"></SEO>
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
          <div className="col-start-3 col-span-2 bg-gray-100 rounded-xl  px-10 py-10">
            <h3 className="font-black text-lg">Edit Profile</h3>

            <div className="mb-4">
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
                onChange={e =>
                  setRegister({ ...register, username: e.target.value })
                }
                value={user.username}
              />
            </div>

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
                value={user.name}
              />
            </div>
            <div className="mb-4">
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
                onChange={e =>
                  setRegister({ ...register, lastname: e.target.value })
                }
                value={user.lastname}
              />
            </div>
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
                  setRegister({ ...register, email: e.target.value })
                }
                value={user.email}
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
            <div className="flex items-center justify-between">
              <button
                className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSignUp}
              >
                {loading ? <Loader text="Saving" /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StrapiUser

export const strapiIdQuery = graphql`
  query strapiUser($strapiId: Int) {
    strapiUser(strapiId: { eq: $strapiId }) {
      email
      id
      lastname
      name
      username
      strapiId
    }
  }
`
