import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"

import Layout from "../../components/layout"
/*assets*/
import digitalToolImg from "../../assets/oe/digital-tool.png"
import apilandscapeImg from "../../assets/oe/api-landscape-icon.png"
import dataPrivacy from "../../assets/oe/policy-context.png"
import dataModelsImg from "../../assets/oe/policy-context.png"
import PlatFormImg from "../../assets/product-streams/platform_mindset_training_for_banks.svg"
import contentStrategyImg from "../../assets/oe/Content-Strategy.png"
import StateImg from "../../assets/product-streams/state_of_the_market_reports.svg"
import openEcosystemImg from "../../assets/oe/open-ecosystem-sectors-icon.png"
import Breadcrumbs from "../../components/breadcrumbs"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"
import SectorCards from "../../components/SectorCards"

const data = {
  OpenEcosystem: {
    elements: [
      {
        img: apilandscapeImg,
        title: "API Landscape Trends\nReports",
        paragraph:
          "In partnership with apidays, our monthly trends reports map the latest trends in the API economy to understand investment potential, guide product and feature roadmaps, and support go to market strategies",
        color: "#b6fbf1",
        url: null,
      },
      {
        img: contentStrategyImg,
        title: "Content Strategy \nand Delivery",
        paragraph:
          "Engaging, original, developer and business-facing content for tech providers, open source technologies, standards bodies, and others working to foster open ecosystems",
        color: "#b6fbf1",
        url: null,
      },
      /*  {
        img: PlatFormImg,
        title: "Analyst-as-a-Service",
        paragraph: "",
        color: "#FBDACE40",
        url: "/open-banking/training",
      }, */
      {
        img: dataPrivacy,
        title: "Data Privacy and\n Tech Regulations Analysis",
        paragraph:
          "Understand and strategically plan how to respond and adapt to emerging data and technology policy regulations globally and locally",
        color: "#b6fbf1",
        url: null,
      },
      {
        img: dataModelsImg,
        title: "Data Models and\n Dataset Building",
        paragraph:
          "Draw on world-class expertise to build taxonomies, data models and datasets for your products, services, and operations",
        color: "#b6fbf1",
        url: null,
      },
      {
        img: digitalToolImg,
        title: "Digital Tool Creation",
        paragraph:
          "Create engaging digital tools to surface data insights or interact with your ecosystem stakeholders",
        color: "#b6fbf1",
        url: null,
      },
    ],
  },
}

export default function OpenEcosystem({ location }) {
  return (
    <Layout>
      <SEO title="Open Banking / Open Finance" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Ecosystem</h3>
            <p>
              Supporting API tools providers and consultants, standards bodies,
              and open source technologies to document and measure their open
              ecosystems in order to further support platform businesses to
              foster innovation
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/oe/open-ecosystem-icon.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openEcosystem">
        <div className="container mx-auto">
          <SectorCards
            bgColor="#b6fbf1"
            numberOfColumns={3}
            data={data["OpenEcosystem"]}
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
