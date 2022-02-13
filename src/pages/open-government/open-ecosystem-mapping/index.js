import React from "react"
import { graphql } from "gatsby"
import SEO from "../../../components/seo"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import HowWeWork from "./components/howWeWork"
import FourHorizontalCircles from "../../../components/lp-components/open-government/open-ecosystem-mapping/FourHorizontalCircles"
// import OBOpenEcosystemTitle from '../../../assets/ob-open-ecosystem-mapping/OB - Open Ecosystem Title.png'
import OGOpenEcosystemTitle from "../../../assets/og/open-ecosystem-mapping/heroImg.png"
import Form from "../../../components/shared-components/Form"
import BuildADataImg from "../../../assets/ob-open-ecosystem-mapping/build-a-data.png"
import UseOurExistingImg from "../../../assets/ob-open-ecosystem-mapping/use-our-existing.png"
import CreateARangeImg from "../../../assets/ob-open-ecosystem-mapping/create-a-range.png"
import OESMLine from "../../../assets/ob-open-ecosystem-mapping/oecmappingLines.png"
import PanoramaImg from "../../../assets/ob-open-ecosystem-mapping/Panorama.png"
import PolicyImg from "../../../assets/ob-open-ecosystem-mapping/Policy.png"
import ProcessImg from "../../../assets/ob-open-ecosystem-mapping/Process.png"
import Breadcrumbs from "../../../components/breadcrumbs"

export default function index({ data, location }) {
  // const authorsData = data?data.allStrapiPost.edges[0].node.user :null
  return (
    <Layout>
      <Breadcrumbs location={location} />
      <SEO title="OG-Open Ecosystem Mapping" />
      {/* <div className="container sm:mx-auto md:px-0 px-5">
        <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center px-0 md:px-3 lg:px-0 xl:px-3"> 
        </div> */}
      <GridDisplay
        gridDisplayClass="hero-section flex flex-col sm:flex-row flex-wrap my-6 container mx-auto md:px-0 px-5 py-6 justify-between items-center"
        gridContentClass="md:w-2/5 px-0 md:px-3 lg:px-0 xl:px-3"
        title="Open Government"
        subtitle="Open Ecosystem Mapping"
        secondParagraph=""
        secondParagraphClass="py-2"
        paragraphOne=""
        paragraphTwo=""
        paragraphThree=""
        imgContentClass="px-0 md:px-3 lg:px-0 xl:px-3"
        imgClass=""
        backImgSrc={OGOpenEcosystemTitle}
        alt="Hero"
      ></GridDisplay>

      <FourHorizontalCircles />
      <section className="bg-lavender-blue-light py-10 OG-anOpenEcosystemIs sm:mx-auto md:px-0 px-5">
        <div className="container mx-auto md:w-2/5 px-0 md:px-3 lg:px-0 xl:px-3">
          <h3 className="font-black text-center my-5">An open ecosystem is</h3>
          <p className="italic">
            A network of equitable participation opportunities that{" "}
            <strong>allow stakeholders</strong> (including governments and
            regulators, associations, industry enterprises, small and medium
            enterprises, researchers, community groups and individuals){" "}
            <strong>
              to co-create, collaborate, compete, complement, and/or coordinate
            </strong>{" "}
            with each other and by using common tools (APIs) and data
            infrastructures.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <HowWeWork />

      {/* OUR PROCESS */}

      <section className="our-process my-10">
        <div className="container mx-auto ">
          <h3 className="font-black text-center my-5">Our process</h3>

          <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
            <div className="our-process-img">
              <img src={BuildADataImg} className="img-thumbnail" />
            </div>
            <div className="our-process-text">
              <p className="text-sm md:text-md">
                Build a <strong>data model</strong> and taxonomies for each
                element of the ecosystem
              </p>
            </div>
          </div>

          <div className="our-process-vertical-line"></div>

          <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
            <div className="our-process-img">
              <img src={UseOurExistingImg} className="img-thumbnail" />
            </div>
            <div className="our-process-text">
              <p className="text-sm md:text-md">
                {" "}
                Use our existing <strong>data collection</strong> to enhance
                your mapping needs
              </p>
            </div>
          </div>

          <div className="our-process-vertical-line"></div>

          <div className="our-process-pill w-4/4 md:w-2/4 flex md:flex-nowrap flex-wrap justify-center items-center  py-5 px-10 shadow mx-auto md:rounded-full border-gray-100 shadow">
            <div className="our-process-img">
              <img src={CreateARangeImg} className="img-thumbnail" />
            </div>
            <div className="our-process-text">
              <p className="text-sm md:text-md">
                Create a range of <strong>tools</strong> to help you understand
                and strategise around your ecosystem
              </p>
            </div>
          </div>

          <div className="mx-auto flex justify-center">
            <img src={OESMLine} />
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="tools">
        <div className="container mx-auto">
          <div className="tools-cards-container flex flex-wrap md:flex-nowrap gap-4 px-5">
            <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow">
              <div className="grid justify-center border-b border-gray-100">
                <img src={PanoramaImg} className=" text-center img-thumbnail" />
              </div>
              <h3 className="font-black mt-5">Panorama</h3>
              <p className="text-sm">
                A “State of the Market” report and dashboard outlining the
                ecosystem stakeholders and value being generated
              </p>
            </div>

            <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow">
              <div className="grid justify-center border-b border-gray-100">
                <img src={PolicyImg} className=" img-thumbnail" />
              </div>
              <h3 className="font-black mt-5">Policy</h3>
              <p className="text-sm">
                A series of insight tools to help you identify partnerships and
                opportunities to be part of the wider ecosystem{" "}
              </p>
            </div>

            <div className="tools-card-item shadow p-5 rounded-2xl flex-grow md:flex-grow">
              <div className="grid justify-center border-b border-gray-100">
                <img
                  src={ProcessImg}
                  className=" img-thumbnail text-center mx-auto"
                />
              </div>
              <h3 className="font-black mt-5">Process</h3>
              <p className="text-sm">
                Data model and guidelines to assist you to measure the value
                generated by stakeholders through a systematic, structured and
                regularly scheduled process{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Form
        formClass="text-center my-5 mx-auto overflow-hidden py-6"
        formID="lp-training-form"
        titleClass=""
        title="Contact us to discuss mapping your ecosystem"
        iframeId="submitMailerlite"
        iframeSrc={"https://landing.mailerlite.com/webforms/landing/q8j2m7"}
      />
    </Layout>
  )
}

export const OGOpenEcosystemPagePosts = graphql`
  query OGOpenEcosystemPagePosts {
    allStrapiPost(
      limit: 3
      filter: {
        categories: { elemMatch: { name: { eq: "Open Government" } } }
        tags: { elemMatch: { name: { eq: "mapping" } } }
      }
    ) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          title
          updated_at
          user {
            id
            username
          }
        }
      }
    }
  }
`
