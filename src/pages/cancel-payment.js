import React from "react"
import { navigate} from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"



const CancelPayment = () => {

  const handleSuccess = () => {
    navigate("/login")
  }

  return (
    <Layout>
      <Seo title="Subscription Success"/>
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
          <div className="col-start-3 col-span-2  rounded-xl  px-10 py-10">
            <h3 className="text-2xl text-center font-black">
            The order has been cancelled
            </h3>
            <h4 className="text-xl text-center font-black my-5">
            You have not been charged.
            </h4>
            <h5 className="text-xl text-center">
            You can still login to view free content. Please <a href="mailto:accounts@platformable.com" className="underline">contact us</a> if you would like to know more about our subscription offers
            </h5>
            {/* <img src={CancelPaymentImg} className="my-10" /> */}

            <div className="flex items-center justify-center">
              <button
                className="bg-russian-violet-dark text-white my-5  hover:russian-violet-light font-bold py-2 px-4 rounded"
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

export default CancelPayment
