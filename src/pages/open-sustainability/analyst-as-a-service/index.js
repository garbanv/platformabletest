import React,{useState} from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../../../components/layout"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import HowWeWork from "../../../components/lp-components/open-sustainability/analyst-as-service/howWeWork"
import FourHorizontalCircles from "../../../components/lp-components/open-banking/analyst-as-service/FourHorizontalCircles"
import AnalistAsServiceTitle from "../../../assets/ob-analyst-as-service/heroImg.png"
import HowToHire from "../../../components/lp-components/open-banking/analyst-as-service/HowToHire"
import Form from "../../../components/shared-components/Form"
import Breadcrumbs from "../../../components/breadcrumbs"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogCardComponent from "../../../components/BlogCardComponent"

import identify from "../../../assets/os/identify.png"
import inspire from "../../../assets/os/inspire.png"
import define from "../../../assets/os/define.png"
import track from "../../../assets/os/track.png"

export default function Index({ data, location }) {

    const images = [
        {
          src: identify,
          title: "Identify",
          paragraph: "Business models and potential for impact",
        },
        {
          src: inspire,
          title: "Inspire",
          paragraph: "new product ideas",
        },
        {
          src: define,
          title: "Define",
          paragraph: "market pricing strategies",
        },
        {
          src: track,
          title: "Track",
          paragraph: "Track new opportunities and emerging trends",
        },
      ]

  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/osSubscriptions`, {
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
  const postsCategories = [
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking-posts",
    },
    {
      name: "Open Government",
      url: "/open-government-posts",
    },
    {
      name: "Open Health",
      url: "/open-health-posts",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }

  // const authorsData = data?data.allStrapiPost.edges[0].node.user :null
  return (
    <Layout>
      <Breadcrumbs location={location} />

      <div className="container mx-auto">
          <div className="hero-container grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div className="hero-text px-3">
                  <h3 className="font-black">Open Banking / Open Finance</h3>
                  <h4 className="font-black">Analyst as a service</h4> 
                  <p>Subscribe to a set range of hours and answer key questions to support your growth and create environmental value</p> 
              </div>
              <div className="hero-img flex justify-end md:px-0 px-5">
                <img src={AnalistAsServiceTitle} alt="" />
              </div>
          </div>
      </div>


      <section className="container mx-auto py-6 md:px-0 px-5">
      <div className="my-0 px-0 md:px-3 lg:px-0 xl:px-3 py-0  flex flex-wrap flex-col sm:flex-row justify-center ">
        {images.map((img, i) => (
          <div
            key={i}
            className="md:w-1/5 w-full my-6 mx-1 text-center h-full "
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-30 h-30 mx-auto bg-lightGreenOS mb-1 rounded-full p-3 cursor-pointer transition-shadow hover:shadow-hover img-thumbnail "
            />

            <div className="mx-auto">
              <h4 className="text-center font-black">{img.title}</h4>
              <p className="text-center">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>




      <HowWeWork />
      {/* TOP LATESTS 3 POSTS */}
      {/* <h3 className="text-center font-black mt-5">Our Latest Work </h3>
    
      <section className="container mx-auto all-blog-content my-20 md:px-0 px-5">
        <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data
              ? data.allStrapiPost.edges.map((post, index) => {
                  while (index < 3 && post.node.staging === false) {
                    return (
                      <BlogCardComponent
                        index={index}
                        staging={post.node.staging}
                        img={post.node.featured_image}
                        categories={post.node.categories}
                        publishing_date={post.node.publishing_date}
                        id={post.node.id}
                        slug={post.node.slug}
                        user={post.node.user}
                        content={post.node.content}
                        title={post.node.title}
                      />
                    )
                  }
                })
              : null}
          </div>
        </div>
      </section> */}

     {/*  <HowToHire /> */}

      <section name="subscription" id="subscription">
        <div className="container mx-auto my-10">
              <div>
          <div className="flex justify-center">
            <input type="text" className="rounded-l-lg  px-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-4 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thank you for your subscription</p>}
        </div>
      </section>

      {/*       <Form
      formClass="text-center my-5 mx-auto overflow-hidden py-6"
      formID="lp-training-form"
      titleClass=""
      title="Sign up now to gain new insights into your open banking / open finance strategy"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    /> */}
    </Layout>
  )
}

export const AnalystPagePosts = graphql`
  query AnalystPagePostsOSAAAS {
    allStrapiPost(
      limit: 3
      filter: {
        categories: {
          elemMatch: { name: { eq: "Open Banking / Open Finance" } }
        }
        tags: { elemMatch: { name: { eq: "analysis" } } }
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
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
              )
            }
          }
          publishing_date
          title
          staging
          updated_at
          content
          user {
            id
            username
          }
        }
      }
    }
  }
`
