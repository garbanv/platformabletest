import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import openBankImg from "../../assets/os/OSOBTrends-icon.png"
import AnanlistAsServiceImg from "../../assets/os/OSAAS-icon.png"
import BlogImg from "../../assets/product-streams/blogs_and_articles.svg"
import OpenEcoIMg from "../../assets/product-streams/open_ecosystem_mapping.svg"
import PlatFormImg from "../../assets/os/OS-Product-icon.png"
import QuarterlyImg from "../../assets/product-streams/quarterly_trends_report.svg"
import StateImg from "../../assets/product-streams/state_of_the_market_reports.svg"
import openEcosystemImg from "../../assets/oe/open-ecosystem-sectors-icon.png"
import Breadcrumbs from "../../components/breadcrumbs"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"
import SectorCards from "../../components/SectorCards"
import openSustainImg from "../../assets/os/open-sustainability-hero-icon.png"

const data = {
  OpenSustainability: {
    elements: [
      {
        img: openBankImg,
        title: "Open Banking/ Open\nFinance",
        paragraph: "Understand how open economy APIs are building sustainability solutions and how open sustainability APIs are being used to enhance financial products",
        color: "#C7F3E540",
        url: "/open-sustainability/open-banking",
      },
      {
        img: AnanlistAsServiceImg,
        title: "Analyst as a service",
        paragraph: "Be at the forefront of creating open sustainability products using available APIs by understanding market gaps and opportunities",
        color: "#C7F3E540",
        url: "/open-sustainability/analyst-as-a-service",
      },
      {
        img: PlatFormImg,
        title: "Product Ideation Workshop",
        paragraph: "Create innovative, viable new products that directly support open sustainability goals by opening APIs or by making use of available APIs",
        color: "#C7F3E540",
        url: "/open-sustainability/product-ideation-workshop",
      },
    ],
  },
}

export default function OpenSustainability({ location }) {
  return (
    <Layout>
      <SEO title="Open Sustainability" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Sustainability</h3>
            <p>
            Measure how stakeholders leverage digital infrastructures to support climate change mitigation, resilience building and ecological regeneration. 
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
          
            <StaticImage
              src="../../assets/os/open-sustainability-hero-icon.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openEcosystem">
        <div className="container mx-auto">

        <SectorCards
        bgColor="#C7F3E540"
          numberOfColumns={3}
          data={data["OpenSustainability"]}
        />
          
        </div>

        {/* <div class="sector-container grid md:grid-cols-3 grid-cols-1 md:gap-10 my-5 md:mx-0 mx-5">
            {data.OpenEcosystem.elements.map((el, index) => {
              return ( <>
          <div class="sector-box rounded-xl sectors-cards-bg p-5 flex flex-col justify-center">
                  <img
                    src={el.img}
                    className="w-24 h-24 mx-auto bg-white shadow text-center rounded-full p-3 "
                    alt=""
                  />
                  <h6 className="my-5 text-center h-8 sm:h-20 lg:h-4 md:h-8 px-3 text-primary font-black sm:mb-10">
                    {el.title}
                  </h6>
                  <p className="hidden md:block text-grayed text-center font-normal font-sm h-24 border-t border-primary border-opacity-25 pt-3 lg:mb-1">
                    {el.paragraph}
                  </p>
                </div>
                </>
              )
            })}
          </div> */}

        {/*   <SectorSubCards
          data={data["OpenEcosystem"]}
          className="my-0 gap-10 xl:gap-20 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center w-full px-0 md:px-3 lg:px-0 xl:px-3 "
        /> */}
        
      </div>
    </Layout>
  )
}
