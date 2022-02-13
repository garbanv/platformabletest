import React from "react"
// import { Link } from "gatsby"
import data from "../data/product-stream/data.json"
import GridDisplay from "../components/shared-components/GridDisplay"
/*specific-components*/
// import ProductStreamsCards from "../components/product-streams/ProductStreamsCards"
import SectorSubCards from "../components/product-streams/sectorSubCards"
// import AnalystImg from "../images/Analyst-as-a-service.png"
// import BlogAsServiceImg from "../images/Blogs and articles.png"
// import OpenEcosystemImg from "../images/Open ecosystem mapping.png"
// import PlatformMindsetImg from "../images/Platform mindset training for banks.png"
// import QuarterlyImg from "../images/Quarterly Trends report.png"
// import StateOfMarketImg from "../images/State of the Market reports.png"
import Layout from "../components/layout"
/*assets*/
// import sectionHeroImg from "../assets/product-streams/home_hero.svg"
import openBankImg from "../assets/product-streams/open_banking-open_finance.svg"
// import openGovImg from "../assets/product-streams/open_government.svg"
// import openHealthImg from "../assets/product-streams/open_health.svg"
// import openSustainImg from "../assets/product-streams/open_sustainability.svg"

export default function openBanking() {
  return (
    <Layout>
      <div id="openBanking">
        <GridDisplay
        
          gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
          gridContentClass="md:w-2/5"
          title={`Open Banking / 
            Open Finance`}
          titleClass="my-5 text-orange"
          paragraphOne="Enabling interoperable financial services that improve financial inclusion and build everyone’s wealth."
          doNotDisplayLink="hidden"
          doNotDisplayAnchor="hidden"
          imgContentClass=""
          imgClass="object-cointain w-96 h-94"
          backImgSrc={openBankImg}
          alt="Hero"
        ></GridDisplay>
        <SectorSubCards
          data={data["OpenBanking"]}
          className="my-0 md:mx-8 mx-2 py-0 px-8 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
        />
      </div>
    </Layout>
  )
}
