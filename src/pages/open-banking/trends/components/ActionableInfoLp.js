import React from "react"
import openFinanceImg from "../assets/offer_open_banking_and_open_finance_regulations.svg"
import apiImg from "../assets/offer_API_products.svg"
import pricingImg from "../assets/offer_pricing_and_business_models.svg"
import globalMoveImg from "../assets/offer_the_global_move.svg"

const ActionableInfoLp = () => {
  return (
    <section className="bg-card py-3  container mx-auto rounded-3xl mx-4 relative inset-x-0 -mt-40">
      <h2 className="my-8 mx-auto text-center font-black">
        Actionable information on:
      </h2>

      <div className="my-0 sm:mx-12 mx-auto justify-between flex flex-wrap items-center">
        <div className="mb-5 md:flex items-center w-full text-center md:text-left md:w-9/12 lg:w-2/5 ">
          <img
            src={openFinanceImg}
            alt=""
            className="w-40 h-32 product-offer-photo-2 mr-2 object-contain"
          />
          <div>
            <p className="">Open banking and open finance regulations</p>
          </div>
        </div>

        <div className="mb-5 md:flex items-center lg:w-2/5 w-full text-center md:text-left md:w-9/12">
          <img
            src={apiImg}
            alt=""
            className="w-40 h-32 product-offer-photo-2 mr-2 object-contain"
          />
          <div>
            <p className="">API products and how they are being used</p>
          </div>
        </div>
        <div className="mb-5 md:flex items-center lg:w-2/5 w-full text-center md:text-left md:w-9/12">
          <img
            src={pricingImg}
            alt=""
            className="w-40 h-32 product-offer-photo-2 mr-2 object-contain"
          />
          <div>
            <p className="">Pricing and business models</p>
          </div>
        </div>
        <div className="mb-5 md:flex items-center lg:w-2/5 w-full text-center md:text-left md:w-9/12">
          <img
            src={globalMoveImg}
            alt=""
            className="w-40 h-32 product-offer-photo-2 mr-2 object-contain"
          />
          <div>
            <p className="">
              The global move towards embedded finance and how to prepare for it
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionableInfoLp
