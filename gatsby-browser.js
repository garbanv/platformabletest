import React from "react"
import './src/styles/global.css';
import './src/pages/open-banking/trends/styles/index.css'


import { UserContextProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)

export const onInitialClientRender = () => {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/61e0499ef7cf527e84d1fbaf/1fpa1v5ag';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  }


