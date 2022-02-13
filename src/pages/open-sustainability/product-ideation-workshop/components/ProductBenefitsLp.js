import React from "react"
import GridDisplayLp from "./GridDisplayLp"
import backImg from "../assets/build_your_knowledge.svg"

const ProductBenefitsLp = props => {
  return (
    <GridDisplayLp
      id="product-benefits"
      gridDisplayOrder={"gridDisplayOrder"}
      title="Build knowledge step by step 
    and at your own pace"
      paragraph="You will need to understand skills and techniques about
    platform business models, digital architecture and 
    how to win over other business units."
      doNotDisplay={"doNotDisplay"}
      backImg={backImg}
    ></GridDisplayLp>
  )
}

export default ProductBenefitsLp
