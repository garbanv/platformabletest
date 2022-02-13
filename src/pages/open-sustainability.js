import React from 'react'
import {Link} from 'gatsby'
import data from "../data/product-stream/data.json"
import GridDisplay from "../components/shared-components/GridDisplay"
/*specific-components*/
import ProductStreamsCards from "./../components/product-streams/ProductStreamsCards"
import AnalystImg from '../images/Analyst-as-a-service.png'
import BlogAsServiceImg from '../images/Blogs and articles.png'
import OpenEcosystemImg from '../images/Open ecosystem mapping.png'
import PlatformMindsetImg from '../images/Platform mindset training for banks.png'
import QuarterlyImg from '../images/Quarterly Trends report.png'
import StateOfMarketImg from '../images/State of the Market reports.png'
import Layout from '../components/layout'
/*assets*/
import sectionHeroImg from "../assets/product-streams/home_hero.svg"
import openBankImg from "../assets/product-streams/open_banking-open_finance.svg"
import openGovImg from "../assets/product-streams/open_government.svg"
import openHealthImg from "../assets/product-streams/open_health.svg"
import openSustainImg from "../assets/product-streams/open_sustainability.svg"


export default function openSustainability() {
    return (
        <Layout>
      <div id="openSustainability">
  <GridDisplay
    gridDisplayClass="flex flex-col sm:flex-row flex-wrap my-6 mx-auto py-6 px-5 justify-center items-center "
    gridContentClass="md:w-2/5"
    title="Open Sustainability"
    titleClass="my-5 text-lightGreen"
    paragraphOne="Monitoring the move to a circular economy and tracking renewable energy opportunities."
    doNotDisplayLink="hidden"
    doNotDisplayAnchor="hidden"
    imgContentClass=""
    imgClass="object-cointain w-96 h-94"
    backImgSrc={openSustainImg}
    alt="Hero"
  ></GridDisplay>
  <ProductStreamsCards
    data={data["OpenSustainability"]}
    className="my-0 md:mx-8 mx-2 py-0 px-12 flex flex-wrap flex-col sm:flex-row justify-evenly items-center"
  />
</div>
    
        </Layout>
    )
}







