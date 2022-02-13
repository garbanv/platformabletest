import React from "react"
import GridDisplayLp from "./GridDisplayLp"
import backImg from "../assets/heroImg.png"

const HeroLp = props => {
  return (
    <GridDisplayLp
      title="Product Ideation Workshop"
      /* span="platform economy" */
      paragraph="Understand the potential of platform-based approaches for sustainability"
      label={"Sign up now"}
      backImg={backImg}
    ></GridDisplayLp>
  )
}

export default HeroLp
