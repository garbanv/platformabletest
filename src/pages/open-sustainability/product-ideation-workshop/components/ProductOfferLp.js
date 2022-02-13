import React from "react"
import createApiImg from "../../../../assets/os/OS-create-API-products.png"
import consumeApiImg from "../../../../assets/os/OS-consume-API-products.png"
import regulatoryFoundationsImg from "../assets/regulatory_foundations.svg"
import apiProductImg from "../assets/api_product.svg"
import premiumApiImg from "../assets/premium_api.svg"
import selOpenBankImg from "../assets/selling.svg"
import measureSuccessImg from "../assets/measuring_success.svg"

const ProductOfferLp = props => {
  return (
    <section className="bg-card py-3 px-8 ">
      
      <div className="my-0  container mx-auto os-course-structure">
      <h2 className="my-8 font-black">Course Structure</h2>
        <div className="mb-5 md:flex  items-center">
          <img src={createApiImg} alt="bank platform" className="mr-5" />
          <div>
            <h3 className="font-black">Create API products</h3>
            <p className="font-black">As a bank, fintech or greentech with data and web services, we can help you identify API product opportunities</p>
            <p>
            Use design thinking techniques to brainstorm potential use cases, pricing models, and apply scoring methodologies to prioritise high impact - high value opportunities
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center ">
          <img
            src={consumeApiImg}
            alt="digital architecture"
            className="mr-5"
          />
          <div>
            <h3 className="font-black">Consume API products</h3>
            <p className="font-black">As a fintech, greentech or other business, we can help you discover what APIs are available that could help you build customer-focused digital products and services that meet sustainability goals</p>
            <p>
            Build partnerships with API providers, define the customer journey, enhance your existing products with sustainability features by making use of APIs, or build whole new products for your customers that  allow everyone to play a part in reducing negative climate impacts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOfferLp
