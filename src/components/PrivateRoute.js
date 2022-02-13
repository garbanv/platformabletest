
import React,{useContext,useState,useEffect} from "react"
import { navigate } from "gatsby"
import UserContext from '../context/UserContext'


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isBrowser = typeof window !== "undefined"
  let localUserData;

  if(isBrowser){
    localUserData=JSON.parse(window.localStorage.getItem('user'))
  } 

  const [user,setUser]=useContext(UserContext);




  if (!user.isLoggedIn  && location.pathname !== `/login` && !localUserData.isLoggedIn) {
    navigate("/login")
    return null
  }

   return (
    <Component {...rest} />
  )
}

export default PrivateRoute