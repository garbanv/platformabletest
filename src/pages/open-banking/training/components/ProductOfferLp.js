import React from "react"
import bankPlatformImg from "../assets/bank_platform.svg"
import digitalArchitectureImg from "../assets/digital_architecture.svg"
import regulatoryFoundationsImg from "../assets/regulatory_foundations.svg"
import apiProductImg from "../assets/api_product.svg"
import premiumApiImg from "../assets/premium_api.svg"
import selOpenBankImg from "../assets/selling.svg"
import measureSuccessImg from "../assets/measuring_success.svg"

const ProductOfferLp = props => {
  return (
    <section className="bg-card py-3 px-8 ">
      
      <div className="my-0  container mx-auto">
      <h2 className="my-8 font-black">Course Structure</h2>
        <div className="mb-5 md:flex  items-center">
          <img src={bankPlatformImg} alt="bank platform" className="mr-5" />
          <div>
            <h3>The bank platform</h3>
            <p>
              A solid overview of open banking regulations, why banks are moving
              to platform business models, and which banks have done this
              successfully to generate new revenue streams.
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img
            src={digitalArchitectureImg}
            alt="digital architecture"
            className="mr-5"
          />
          <div>
            <h3>Digital architecture</h3>
            <p>
              Designed for non-technical audiences and CTOs who have been more
              immersed in business than coding, this course outlines key IT
              infrastructure that will be needed, security best practices, and
              give a library of patterns so that new technology can be embedded
              without rebuilding legacy bank technology.
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img
            src={regulatoryFoundationsImg}
            alt="regulatory foundations"
            className="mr-5"
          />
          <div>
            <h3>Regulatory foundations</h3>
            <p>
              Understand what APIs banks must make available and what that means
              for how to monetize, understand best practice standards and how
              that helps banks gain value faster at lower cost, and how to look
              beyond compliance to strategize digital success.
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img src={apiProductImg} alt="api product" className="mr-5" />
          <div>
            <h3>API product ideation</h3>
            <p>
              Use design thinking techniques to brainstorm potential use cases
              and apply scoring methodologies to prioritise high value
              opportunities
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img src={premiumApiImg} alt="premium image" className="mr-5" />
          <div>
            <h3>Premium APIs and partnerships</h3>
            <p>
              Review potential business models that can be applied to bank APIs
              and learn strategic skills and access tools that will help you
              decide on safe bets when adopting a revenue-generating API
              strategy.
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img
            src={selOpenBankImg}
            alt="selling open banking"
            className="mr-5"
          />
          <div>
            <h3>Selling the open banking opportunity internally</h3>
            <p>
              Learn from bank leaders that have successfully won over lines of
              business and have now built new whole-of-business API support and
              track to VP of Platforms for your bank.
            </p>
          </div>
        </div>
        <div className="mb-5 md:flex  items-center">
          <img src={measureSuccessImg} alt="measure success" className="mr-5" />
          <div>
            <h3>Measuring success and building on wins</h3>
            <p>
              Understand performance and technical metrics that will help you
              understand whether your bank APIs are high standard, embed
              governance, risk and compliance metrics, and establish revenue
              targets and metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOfferLp
