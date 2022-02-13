import React, {useContext} from "react"
import { Router } from "@reach/router"

// import UserContext from '../context/UserContext'


import Dashboard from '../components/clientDashboard'
import Profile from './app/profile/{strapiUser.strapiId}'
import PrivateRoute from '../components/PrivateRoute'

import Login from "./login"
import Default from "./index"
import Seo from "../components/seo"

const App = () => {
  // const [user,setUser]=useContext(UserContext);

  return (
    <>
    <Seo title="App"/>
      <Router basepath="/app">
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/profile/:strapiId" component={Profile} />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </>
  )
}

export default App