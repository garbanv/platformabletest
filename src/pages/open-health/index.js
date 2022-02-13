import React from "react"
import { Link } from "gatsby"
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/
import SectorCards from "../../components/SectorCards"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
/*assets*/
import openHealthImg from "../../assets/product-streams/open_health.svg"

import AnanlistAsServiceImg from "../../assets/product-streams/analyst-as-a-service.svg"
import BlogImg from "../../assets/product-streams/blogs_and_articles.svg"
import OpenEcoIMg from "../../assets/product-streams/open_ecosystem_mapping.svg"
import PlatFormImg from "../../assets/product-streams/platform_mindset_training_for_banks.svg"
import QuarterlyImg from "../../assets/product-streams/quarterly_trends_report.svg"
import StateImg from "../../assets/product-streams/state_of_the_market_reports.svg"
import Breadcrumbs from "../../components/breadcrumbs"
import SEO from "../../components/seo"
const data = {
  OpenHealth: {
    elements: [
      {
        img: AnanlistAsServiceImg,
        title: "Data Governance",
        paragraph:
          "Create a data governance and data stewardship system for your agency",
        color: "#87ACFC40",
        url: "/open-health/data-governance",
      },
      {
        img: BlogImg,
        title: "Blogs and \nArticles",
        paragraph: "Read our latest news and articles",
        color: "#87ACFC40",
        url: "/open-health/open-health-posts",
      },
      {
        img: OpenEcoIMg,
        title: "Open Ecosystem\nMapping",
        paragraph:
          "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        color: "#87ACFC40",
        url: "/open-health/open-ecosystem-mapping",
      },
      {
        img: PlatFormImg,
        title: "Data Stewardship Training and Mentoring",
        paragraph: "Learn how to collect, manage, analyse and reuse data",
        color: "#87ACFC40",
        url: "/open-health/data-stewardship-training-and-mentoring",
      },
      {
        img: QuarterlyImg,
        title: "Quarterly Trends\nReport",
        paragraph: "Coming Soon",
        color: "#87ACFC40",
      },
      {
        img: StateImg,
        title: "State of the Market\nReports",
        paragraph: "Coming Soon",
        color: "#87ACFC40",
      },
    ],
  },
}

export default function openHealth({ location }) {
  return (
    <Layout>
      <SEO title="Open Health" />
      <Breadcrumbs location={location} />
      <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0">
            <h3 className="font-black ">Open Health</h3>
            <p>
              Supporting community-based health organisations with data
              governance and data management.
            </p>
            <p>
              Mapping the health data and emerging health tech open ecosystem.
            </p>
          </div>
          <div className="labs-hero-right w-full lg:w-2/5 flex justify-center lg:justify-end">
            {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
            <StaticImage
              src="../../assets/product-streams/open_health.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      <div id="openHealth">
        <SectorCards
          data={data["OpenHealth"]}
          bgColor="#87ACFC40"
          numberOfColumns={3}
        />
      </div>
    </Layout>
  )
}
