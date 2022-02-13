import React from "react"
import {Link, navigate} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import PaymentSuccessImg from "../images/subscriptionSuccess.png"

const PaymentSuccess = () => {

  const handleSuccess = () => {
    navigate("/login")
  }

  return (
    <Layout>
      <SEO title="Subscription Success"/>
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
          <div className="col-start-3 col-span-2  rounded-xl  px-10 py-10">
            <h3 className="text-3xl text-center font-black">
              Thank you for your subscription
            </h3>
            <h4 className="text-xl text-center font-black my-5">
              We are confirming your order
            </h4>
            <h5 className="text-xl text-center ">
              Please login and enjoy
            </h5>
            <img src={PaymentSuccessImg} className="my-10" />

            <div className="flex items-center justify-center">
              <button
                className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSuccess}
              >
                Go to login page
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PaymentSuccess
