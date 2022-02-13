import React from "react"
import {Link} from 'gatsby'

const ButtonLp = ({ label, className, handleIsLoggedIn }) => (
  <button onClick={handleIsLoggedIn} className={className}>
      {label}
  </button>
)

export default ButtonLp

//{label} is the prop that helps re-use this button. In each component, the label we'll have in "" quotes the next we need to have there.  ex: label="Sign up now"
