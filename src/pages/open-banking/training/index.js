import React,{useState} from "react"

import Layout from "../../../components/layout"
import SEOLp from "./components/SEOLp"
import HeroLp from "./components/HeroLp"
import VideoBackgroundLp from "./components/VideoBackgroundLp"
import TestimonialsLp from "./components/TestimonialsLp"
import ProductBenefitsLp from "./components/ProductBenefitsLp"
import ProductOfferLp from "./components/ProductOfferLp"
import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"
import FormLp from './components/FormLp';
import Breadcrumbs from '../../../components/breadcrumbs'

const IndexPage = ({location}) => {
  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/obAnalystSubscriptions`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailerlite),
    })
  const res = response.statusText

  if(res){
  setFormSuccess(!formSuccess)
  }
  
}
  
  return (
  <Layout>
    <Breadcrumbs location={location}/>
    <SEOLp title="Platform Mindset Training" />
    <HeroLp />
    <VideoBackgroundLp />
    <ProductBenefitsLp />
    <ProductsCardsLp />
{/*     <FormLp/> */}
    <ProductOfferLp />
    {/* <TestimonialsLp /> */}
    <section>
        <div className="container mx-auto mt-10">
              <div>
                <p className="text-center text-xl">Embrace the advantages of open banking.</p>
                <p className="text-center">Bring your data to life with our training.</p>
              <h2 className="text-2xl font-black text-center mt-5">Sign up now for pricing and calendar availability</h2>
          <div className="m-4 flex justify-center">
          <input type="text" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-8 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thank you for your subscription</p>}
        </div>
      </section>
  </Layout>
)}

export default IndexPage
