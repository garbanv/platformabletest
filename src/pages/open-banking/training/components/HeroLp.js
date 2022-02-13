import React from "react"
import GridDisplayLp from "./GridDisplayLp"
import backImg from "../assets/heroImg.png"

const HeroLp = props => {
  return (
    <GridDisplayLp
      title="Help your bank to enter 
    the"
      span="platform economy"
      paragraph="Rebuild and reorient your team to take advantage 
    of the open banking evolution"
      label={"Sign up now"}
      backImg={backImg}
    ></GridDisplayLp>
  )
}

export default HeroLp
