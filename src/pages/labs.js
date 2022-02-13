import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import axios from "axios"
import Loader from "../components/Loader"
import HeroImg from "../static/labs/HomeHero.png"

const Labs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  })

  const [errorMessage, setErrorMessage] = useState(false)
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)
  const [formMissingValues, setFormMissingValues] = useState(false)

  const [serverResponse, setServerResponse] = useState(``)

  async function handleLabForm(e) {
    e.preventDefault()
    setLoading(true)

    if (form.name === "" || form.email === "") {
      setFormMissingValues(true)
    } else {
      const response = await window
        .fetch(`/api/labs`, {
          method: `POST`,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(form),
        })
        .then(res => res.json())
        .then(result => {
          if (result === "OK") {
            setLoading(false)
            setSuccessMsg(true)
            setForm({ name: "", email: "" })
          } else {
            setLoading(false)
            setErrorMessage(true)
          }
        })

      setServerResponse(response)
    }
  }
  // const LabProjectComponent = props => {
  //   return (
  //     <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
  //       <StaticImage
  //         src={props.src}
  //         alt={props.src}
  //         className="img-thumbnail"
  //         placeholder="blurred"
  //       />
  //       <h3 className="text-lg md:w-2/3 m-1/2">{props.header}</h3>
  //     </div>
  //   )
  // }
  return (
    <Layout>
      <SEO title="Labs" />

      {/* <section className="cards-section my-6 container py-8 sm:mx-auto md:px-0 px-5">
        <div className="px-0 md:px-3 lg:px-0 xl:px-3"> */}

      <div className="container mx-auto sm:mx-auto md:px-0 px-5">
        <div className="labs-hero-container flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center md:px-3 lg:px-0 xl:px-3">
          <div className="labs-hero-left md:w-3/5 w:1/1">
            <h3 className="font-black labs-main-color-dark">Labs</h3>
            <p>
              Learn about our experimental and developmental work to build tools
              that support open ecosystems.
            </p>
          </div>
          <div className="labs-hero-right w-full md:w-2/5 flex justify-end pt-5 md:pt-0">
            {/*       <img src={HeroImg} alt="" /> */}

            <img src={HeroImg} alt="" />
            {/*        <StaticImage src="../static/labs/HomeHero.png" placeholder="blurred" /> */}
          </div>
        </div>
      </div>

      <section className="bg-pink-50 py-10 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <h3 className="font-black mb-5 labs-main-color-dark">
            Current Lab Projects
          </h3>
          <div className="current-labs-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/codegen.png"
                className="img-thumbnail"
                placeholder="blurred"
                alt="codegen image"
              />
              <h3 className="text-lg md:w-2/3 m-1/2">
                Blog component code generator for headless CMS
              </h3>
            </div>
            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/Open banking-open finance ecosystem data model.png"
                className="img-thumbnail md:w-1/3 w-1/3"
                placeholder="blurred"
                alt="finance ecosystem data model"
              />
              <h3 className="text-lg  md:w-2/3 w-2/3">
                Open banking / open finance ecosystem data model
              </h3>
            </div>
            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/Open health ecosystem model.png"
                className="img-thumbnail md:w-1/3 w-1/1"
                placeholder="blurred"
                alt="Open health ecosystem model"
              />
              <h3 className="text-lg  md:w-2/3">Open health ecosystem model</h3>
            </div>

            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/Equity tool to measure participation in open ecosystems.png"
                className="img-thumbnail md:w-1/3 w-1/1"
                placeholder="blurred"
                alt=" Equity tool to measure participation image"
              />
              <h3 className="text-lg md:w-2/3">
                Equity tool to measure participation in open ecosystems
              </h3>
            </div>
            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/Equity tech financing.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
                alt="Equity tech financing image"
              />
              <h3 className="text-lg md:w-2/3">Equity tech financing</h3>
            </div>
            <div className="lab-container grid grid-cols-2 gap-4 items-center  labs-grid mb-8">
              <StaticImage
                src="../static/labs/Open sustainability ecosystem data model.png"
                className="img-thumbnail md:w-1/3 w-1/1"
                placeholder="blurred"
                alt="Open sustainability data model image"
              />
              <h3 className="text-lg md:w-2/3">
                Open sustainability data model
              </h3>
            </div>
          </div>
          <br />
          <br />
          <span className="labs-main-color-dark mt-10">
            Details on projects below ↓
          </span>
        </div>
      </section>
      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">
                Blog component code generator for headless CMS
              </h3>
              <p className="text-sm mb-5">
                Our open source tool enables site designers that use a headless
                CMS to create custom blog elements based on a site’s style
                guide. This makes it easy for content creators to use a low code
                approach to copy and paste HTML code snippets and create
                engaging web content that aligns with the site’s style guide{" "}
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/codegen.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">
                Open banking / open finance ecosystem data model
              </h3>
              <p className="text-sm mb-5">
                Governments around the world are introducing new open banking
                and open finance regulations, but there are no commonly agreed
                international metrics that consistently measure and report
                whether these new digital ecosystems are meeting their intended
                goals and creating value for all stakeholders. Our work aims to
                develop a common set of indicators that can be applied globally
                to measure the value distribution of open banking and open
                finance ecosystems
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/Open banking-open finance ecosystem data model.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">Open health ecosystem model</h3>
              <p className="text-sm mb-5">
                Drawing on ecosystem{" "}
                <Link
                  className="internal-link"
                  to="/health-data-governance-understanding-the-ecosystem-and-current-maturity"
                >
                  models we created with the Open Data Institute for the World
                  Health Organization
                </Link>
                , we are documenting an evidence-based data governance framework
                and identifying indicators that could be applied to determine
                the level of maturity of data-enabled open health ecosystems
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/Open health ecosystem model.png"
                className="img-thumbnail"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">
                Open sustainability data model
              </h3>
              <p className="text-sm mb-5">
                Drawing on what we have learnt in our open banking/open finance,
                open health, and open government framework models, we will be
                creating a data model to measure the growth of open ecosystems
                that build circular economy and climate crisis response
                solutions{" "}
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/Equity tool to measure participation in open ecosystems.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">
                Equity tool to measure participation in open ecosystem
              </h3>
              <p className="text-sm mb-5">
                This new tool will be developed in two stages. In stage one, we
                are developing a tracking and dashboard tool for blogs and media
                sites that want to monitor whether their content includes
                diverse spokespeople, interviewees, and profiles diverse
                businesses. Platformable already uses a basic version of this
                tool to ensure our coverage of open ecosystems. In stage two, we
                will expand on this approach to support API providers to better
                understand how their APIs are enabling non-traditional
                businesses to participate in their ecosystems
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/Equity tech financing.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="lab-component my-5 py-5 mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="lab-component-container flex items-center">
            <div className="lab-component-left md:w-3/5 w-1/1 ">
              <h3 className="font-black mb-5">Equity tech financing</h3>
              <p className="text-sm mb-5">
                We are excited by some of the new approaches that industry and
                non-profits are taking to invest in new social impact and
                equity-focused tech solutions. Our research program identifies
                what financing models are emerging and how organisations
                including philanthropies, think tanks, investors, and large
                community agencies can establish financing and seed grant
                programs to support viable tech for good
              </p>
            </div>
            <div className="lab-component-right md:w-2/5  hidden inline-block md:flex md:justify-end md:items-start">
              <StaticImage
                src="../static/labs/Open sustainability ecosystem data model.png"
                className="img-thumbnail md:w-1/3"
                placeholder="blurred"
              />
            </div>
          </div>
          {/* <Link className="labs-main-color-dark text-sm px-5">Read more</Link> */}
        </div>
      </section>

      <section className="my-5 py-5 lab-form mx-auto md:px-0 px-5">
        <div className="container mx-auto md:px-3 lg:px-0 xl:px-3">
          <div className="container mx-auto bg-pink-50 rounded-xl p-5">
            <div className="labs-form-container">
              <div className="lab-form-top-container flex items-center">
                <div className="lab-form-top-left-container">
                  <h3 className="text-3xl font-black">
                    Support our labs initiatives
                  </h3>
                  <p>
                    You can help us develop our labs initiatives faster by
                    investing in our efforts, by sponsoring one of our projects,
                    or simply by keeping up to date with our work. Sign up now
                    and we will be in touch
                  </p>
                </div>
                <div className="lab-form-top-right-container flex   items-center">
                  <StaticImage
                    src="../static/labs/Home Hero.png"
                    placeholder="blurred"
                    className="lab-form-img"
                  />
                </div>
              </div>
            </div>

            {/* LABS FORM */}
            <div className="labs-form-inputs grid md:grid-cols-3 grid-cols-1 w-8/12 md:w-auto pt-4 gap-4">
              <input
                type="text"
                name="name"
                id="lab-form-email"
                placeholder="name"
                className="px-10 rounded-xl p-2"
                onChange={e => {
                  setFormMissingValues(false)
                  setForm({ ...form, name: e.target.value })
                }}
                value={form.name}
              />
              <input
                type="email"
                name="email"
                id="lab-form-email"
                placeholder="email"
                className="px-10 rounded-xl p-2"
                onChange={e => {
                  setFormMissingValues(false)
                  setForm({ ...form, email: e.target.value })
                }}
                value={form.email}
              />
              <button
                className="btn bg-pink-500 rounded-xl p-3 hover:russian-violet-light"
                onClick={handleLabForm}
              >
                {" "}
                {loading ? <Loader text="Loading" /> : "Find out more"}
              </button>
            </div>

            {successMsg && (
              <div className="form-message-container flex justify-center my-5">
                <div className="form-messages   md:rounded-full py-3 px-3 bg-green-300 md:w-1/3 w-1/1">
                  <p className="text-center text-white text-sm px-5">
                    Thank you for your subscription
                  </p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="form-message-container flex justify-center my-5">
                <div className="form-messages md:rounded-full py-3 px-3 bg-red-500 md:w-1/3 w-1/1">
                  <p className="text-center text-white text-sm px-5">
                    Something went wrong, try again later
                  </p>
                </div>
              </div>
            )}

            {formMissingValues && (
              <div className="form-message-container flex justify-center my-5">
                <div className="form-messages grid justify-content items-center py-5 bg-red-500 md:w-1/3 w-1/1">
                  <p className="text-center text-white text-sm px-5">
                    All inputs should be completed
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Labs
