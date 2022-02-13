import React, { useContext } from "react"
import { navigate } from "gatsby"
import Layout from "../../../components/layout"
import UserContext from "../../../context/UserContext"
import HeroLp from "./components/HeroLp"

import TeamHours from "./components/TeamHours"

import ProductsCardsLp from "./components/ProductsCardsLp"
import CallToActionLp from "./components/CallToActionLp"

import PositionedSection from "./components/PositionedSection"
import MeasuringBenefitsLP from "./components/MeasuringBenefitsLP"

import "./styles/index.css"
import Breadcrumbs from "../../../components/breadcrumbs"

const IndexPage = ({ location }) => {
  const [user, setUser] = useContext(UserContext)

  const handleIsLoggedIn = () => {
    user.isLoggedIn ? navigate("/app/dashboard") : navigate("/login")
  }
  return (
    <Layout>
      <Breadcrumbs location={location} />
      <HeroLp />
      <ProductsCardsLp />
      <PositionedSection handleIsLoggedIn={handleIsLoggedIn} />
      <MeasuringBenefitsLP />
      {/* <SubscriptionPlans /> */}
     {/*  <TeamHours /> */}
      {/* <TestimonialsLp /> */}
      <CallToActionLp
        sectionClassName="flex sm:flex-row flex-col my-16 mx-auto py-0 sm:px-10 px-2 justify-center items-center"
        flexDisplay={"flexDisplay"}
        doNotDisplay={"doNotDisplay"}
        paragraphOne="Embrace open ecosystems for sustainability."
        paragraphTwo="Create positive impact and generate revenue."
        label="Subscribe now"
        btnClassName="uppercase bg-primary font-bold text-white my-5 ml-5 py-2 px-10 rounded-full hover:bg-secondary hover:text-primary cursor-pointer"
        handleIsLoggedIn={handleIsLoggedIn}
      />
    </Layout>
  )
}

export default IndexPage
