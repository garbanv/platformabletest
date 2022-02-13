import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ButtonLp = ({ label }) => (
  <AnchorLink to="/sign-up">
    <button className="uppercase bg-primary text-white my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer" type="submit">
      {label}
    </button>
  </AnchorLink>
)

export default ButtonLp

//{label} is the prop that helps re-use this button. In each component, the label we'll have in "" quotes the next we need to have there.  ex: label="Sign up now"
