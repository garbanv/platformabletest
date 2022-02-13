import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/

import SectorSubCards from "../../components/product-streams/sectorSubCards"
import SectorCards from "../../components/SectorCards"

import Layout from "../../components/layout"
/*assets*/
import openBankImg from "../../assets/product-streams/open_banking-open_finance.svg"
import AnanlistAsServiceImg from "../../assets/product-streams/analyst-as-a-service.svg"
import BlogImg from "../../assets/product-streams/blogs_and_articles.svg"
import OpenEcoIMg from "../../assets/product-streams/open_ecosystem_mapping.svg"
import PlatFormImg from "../../assets/product-streams/platform_mindset_training_for_banks.svg"
import QuarterlyImg from "../../assets/product-streams/quarterly_trends_report.svg"
import StateImg from "../../assets/product-streams/state_of_the_market_reports.svg"
import Breadcrumbs from "../../components/breadcrumbs"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

const data = {
  OpenBanking: {
    elements: [
      {
        img: AnanlistAsServiceImg,
        title: "Analyst as a\n service",
        paragraph:
          "Generate revenue and strengthen planning by using data, evidence and best practices in open banking and open finance",
        color: "#FBDACE40",
        url: "/open-banking/analyst-as-service",
      },
      {
        img: QuarterlyImg,
        title: "Open Banking/Open Finance\nMonthly Trends Report",
        paragraph:
          "Understand the open economy and see where opportunities are emerging and benchmark your activities against industry leaders",
        color: "#FBDACE40",
        url: "/open-banking/trends",
      },
      {
        img: PlatFormImg,
        title: "Platform Mindset Training",
        paragraph:
          "Understand the potential of platform-based approaches that enable banks and fintech to build an ecosystem, and how to capture opportunities as they emerge",
        color: "#FBDACE40",
        url: "/open-banking/training",
      },
      {
        img: BlogImg,
        title: "Open Banking/Open Finance\n Blogs and Articles",
        paragraph: "Read our latest news and industry analysis",
        color: "#FBDACE40",
        url: "/open-banking/open-banking-posts",
      },
    /*   {
        img: OpenEcoIMg,
        title: "Open Ecosystem\nMapping",
        paragraph:
          "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        color: "#FBDACE40",
        url: "/open-banking/open-ecosystem-mapping",
      },
      
      
      {
        img: StateImg,
        title: "State of the Market\nReports",
        paragraph:
          "Our annual summary of the open banking ecosystem, sponsored by Axway",
        color: "#FBDACE40",
        url: "/open-banking-open-finance-state-of-the-market-reports",
      }, */
    ],
  },
}

export default function OpenBanking({ location }) {
  return (
    <Layout>
      <SEO title="Open Banking / Open Finance" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Banking / Open Finance</h3>
            <p>
            Identify opportunities for new products that understand market factors and foster new collaborations, enable stakeholders and users to build financial health and prepare to go to market successfully
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/product-streams/open_banking-open_finance.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>

      <div id="openBanking">
        <SectorCards
          data={data["OpenBanking"]}
          numberOfColumns={4}
          bgColor="#FBDACE40"
        />
      </div>
    </Layout>
  )
}
