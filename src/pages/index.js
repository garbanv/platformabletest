import React,{useState} from "react"
import { Link, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BlogCardComponent from "../components/BlogCardComponent"

/*shared-components*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridDisplay from "../components/shared-components/GridDisplay"
import Form from "../components/shared-components/Form"
/*specific-components*/
import PositionedSection from "../components/home-components/PositionedSection"
import HowWeDoItCards from "../components/home-components/HowWeDoItCards"
import WorkWithCards from "../components/home-components/WorkWithCards"
import SimpleSubscriptionForm from "../components/SimpleSubscriptionForm"


/* import apilandscapeImg from "../../assets/oe/api-landscape-icon.png" */
import apilandscapeImg from "../assets/oe/api-landscape-icon.png"
import QuarterlyImg from "../assets/product-streams/quarterly_trends_report.svg"
/*assets*/

import OBTrendsFile from '../static/ob/Platformable Open Banking Trends Report Q1 2022 January 2022.pdf'

const IndexPage = ({ data }) => {


  const [form,setForm]=useState("");
  const [formSuccess,setFormSuccess]=useState(false)

  const handleSubscription = async (e) =>{
    const email = form
    const mailerlite = {
      email,
    }
    const response = await window.fetch(`/api/platformableGroupSubscription`, {
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



  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging !== true)
    : " "


    console.log("noStagingPosts",noStagingPosts)

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
  const getMonthString = date => {
    return new Date(date).toLocaleString("default", {
      month: "short",
    })
  }
  const getDayString = date => {
    return new Date(date).toLocaleString("default", {
      day: "2-digit",
    })
  }

  // 225 w/m - average reading speed
  const calculateTimeToRead = article => {
    return Math.ceil(article.trim().split(/\s+/).length / 225)
  }


  /* TRENDS REPORT TILES */

  const trendsData = [
    {
      title:"Open Banking/Open Finance Trends Report",
      date:"January 2022",
      btnBackground:"btn-trends-ob",
      btnText:"Download",
      img:QuarterlyImg,
      download:true,
      url:"https://drive.google.com/uc?export=download&id=1Vdl_XKh7rmoMJaIkZ5QyY5tN_e0ag9MW"
    },
    {
      title:"API Landscape Tool and State of the Market",
      date:"apidays",
      btnBackground:"btn-trends-oe",
      btnText:"Visit site",
      img:apilandscapeImg,
      url:"https://apilandscape.apiscene.io/",
      download:false
    },
    {
      title:`Open Sustainability Trends Report `,
      date:"2022",
      btnBackground:"btn-trends-os",
      btnText:"Find out more",
      img:QuarterlyImg,
      url:"/open-banking-apis-for-sustainability-an-open-ecosystem-approach",
      download:false
    },
    {
      title:`Open Health Trends Report`,
      date:2022,
      btnBackground:"btn-trends-oh",
      btnText:"Coming soon",
      img:QuarterlyImg,
      url:null,
      download:false
    }

  ]
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container md:my-5 my-5 sm:mx-auto md:px-0 px-5">
        <br />
        <br />
        <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="left flex items-center">
            <div>
              <h3 className="font-black mb-5 text-base md:text-2xl">
                We support open ecosystems that build economic opportunities,
                solve complex problems, and enable everyone to participate and
                co-create their own value
              </h3>
               
              <Link
                to="/about"
                className="outlinedBtn mt-3 text-sm md:text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
              >
                Learn more about us
              </Link>
              <a
                href="#subscription"
                className="md:inline-block inline-block bg-secondary text-sm md:text-primary font-bold my-5 ml-2  py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/hero_squares.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
{/*         <br />
        <br /> */}
      </section>
      

    <section className="trends-homepage bg-sunglow my-5 py-10">
      <div className="container mx-auto">
        <div className="my-5">
        <h3 className="text-center text-2xl font-black">Check out our latest releases</h3>
        {/* <h4 className="text-center text-sm font-black">2022</h4> */}
     {/*    <a href="https://drive.google.com/uc?export=download&id=16DRInTjc0L6flFkkS1uqfXFepbeh_0xq">DDD</a>
        <a href="https://drive.google.com/u/0/uc?id=16DRInTjc0L6flFkkS1uqfXFepbeh_0xq&export=download">aaa</a> */}
        </div>
      <div
        className={`grid md:grid-cols-4 grid-cols-1 md:px-0 px-5 gap-10`}
      >

        {trendsData.map((trend,index)=>{
          return (
      
             <div className="p-5 rounded-xl p-4 h-full  home-trends-bg-russian-violet-dark drop-shadow-2xl">
            <div className="text-center">
            <img
              src={trend.img}
              alt=""
              className="w-24  bg-white shadow rounded-full p-3 my-5"
            />
            </div>
            <p className="font-sm text-center text-white mb-4">{trend.date}</p>
            <h6 className="font-black text-center  text-white  h-16 ">{trend.title}</h6>
            <div className="text-center">
            {trend?.download && <a
            className={`md:inline-block inline-block 
            ${trend.btnBackground} text-sm md:text-primary 
            font-bold my-5 ml-2  py-2 px-10 rounded-full 
            hover:bg-secondary cursor-pointer`}
            href={OBTrendsFile}
            download="Platformable Open Banking Trends Report Q1 2022 January 2022">
            {trend.btnText}
          </a>}
          

          {trend?.download=== false  && 
          <a
            className={`md:inline-block inline-block 
            ${trend.btnBackground} text-sm md:text-primary 
            font-bold my-5 ml-2  py-2 px-10 rounded-full 
            hover:bg-secondary ${trend.url===null ? "":"cursor-pointer"}`}
            href={trend.url}
            target={trend?.url?.includes("http")&& "_blank"}
            >
            {trend.btnText}
          </a>
        }  
          </div>
          </div> 

          )
        })}
     </div>
      </div>
    </section>



      {/* <section className="bg-gray-100 ">
        <div className="container sm:mx-auto md:px-0 px-5">
          <br />
          <br />
          <div className=" grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="left flex items-center">
              <div>
                <p>Download our latest release</p>
                <h3 className="font-black mb-5">
                  Open Banking/Open Finance Quarterly Trend Reports Q2 2021
                </h3>
                <Link
                  to="/open-banking/trends"
                  className="bg-secondary text-sm md:text-primary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-secondary cursor-pointer"
                >
                  More info on our reports
                </Link>
              </div>
            </div>
            <div className="right flex justify-end">
              <StaticImage
                src="../assets/home/quarterly_trends1.png"
                alt="platformable"
                width={400}
              />
            </div>

            <br />
            <br />
          </div>
        </div>
      </section> */}






      {/* <PostsCards/> */}
      {/* POSTS */}
      <section className="cards-section my-2 container py-2 sm:mx-auto md:px-0 px-5">
        <div className="px-0 md:px-3 lg:px-0 xl:px-3">
          <h2 className="text-center font-black mb-5 mt-6">Latest Posts </h2>
          <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-3 text-lg md:text-sm lg:text-sm xl:text-lg gap-5">
           {console.log("noStagingPosts",noStagingPosts)}
           
            {data
              ? noStagingPosts.map((post, index) => {
                  while (index < 3 && post.node.staging === false) {
                    console.log("post",post)
                    return (
                      <div className="rounded-xl pt-5 pb-10 top-blog-cards flex flex-col shadow relative">
                        <Link to={`/${post.node.slug}`}>
                          <div className="px-7 text-center justify-center mb-3 h-44 overflow-hidden">
                            <GatsbyImage
                              image={getImage(post.node.featured_image)}
                              className=""
                              alt={post.node.title}
                            />
                          </div>
                        </Link>
                        <div>
                          <div className="flex flex-col gap-3 h-auto mr-5 h-11 mb-2">
                            {post.node.categories.map((cat, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="w-1/5">
                                    <div
                                      className={`flex text-center items-center w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-14 xl:h-14 bg-dark-${cat.name}
                                                    justify-center`}
                                    >
                                      <div className="flex flex-col text-white">
                                        <p className="font-bold text-xl">
                                          {getDayString(
                                            post.node.publishing_date
                                          )}
                                        </p>
                                        <p className="font-bold text-xl">
                                          {getMonthString(
                                            post.node.publishing_date
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      cat.name === "Open Banking / Open Finance"
                                        ? `flex items-end justify-center flex-nowrap w-full ml-2 sm:-ml-11 md:ml-0`
                                        : `flex items-end justify-center flex-nowrap w-full -ml-11 md:ml-0 lg:-ml-11`
                                    }
                                  >
                                    <button
                                      key={index}
                                      to={cat.name}
                                      className={`text-dark-${cat.name} capitalise self-end md:self-center lg:self-end text-center`}
                                      onClick={() => handleCategory(cat)}
                                    >
                                      {cat.name}
                                    </button>
                                  </div>
                                </div>
                              )
                            })}

                            <div className="text-center ml-5">
                              <h5 class="capitalise font-bold">
                                <Link to={`/${post.node.slug}`}>
                                  {" "}
                                  {post.node.title}
                                </Link>
                              </h5>
                              <small className="small-text">
                                {`Written by `}{" "}
                              </small>
                              {post.node.user.length === 1 ? (
                                <Link
                                  className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                  to={`/author/${post.node.user[0].id}`}
                                >{` ${post.node.user[0].username}`}</Link>
                              ) : post.node.user.length > 1 ? (
                                post.node.user.map((x, index) => (
                                  <Link
                                    key={index}
                                    to={`/author/${post.node.user[index].id}`}
                                    className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                                  >
                                    {x.username}{" "}
                                    {index < post.node.user.length - 1
                                      ? " & "
                                      : ""}
                                  </Link>
                                ))
                              ) : null}
                            </div>
                          </div>

                          {post.node.categories.map(cat => {
                            return (
                              <div
                                key={index}
                                className="absolute right-5 w-full bottom-5"
                              >
                                <div
                                  className={`flex gap-1 items-center justify-end fill-dark-${cat.name}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <p
                                    className={`text-dark-${cat.name} text-sm font-bold`}
                                  >
                                    {post.node.content
                                      ? calculateTimeToRead(post.node.content)
                                      : "0"}{" "}
                                    min read
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  }
                })
              : null}
          </div>
        </div>
      </section>

      <PositionedSection />
      {/* <section className="hidden lg:block pt-8 mt-12 md:px-0 px-5">
        <h2 className="text-center mb-6 font-black">
          Platformable Program Structure
        </h2>
        <div className="container mx-auto all-blog-content px-3 text-center pt-4">
          <StaticImage
            src="../images/PlatformableProgramStructure.png"
            className="w-12/12 lg:w-11/12 "
          />
        </div>
      </section> */}
      <HowWeDoItCards />
      <WorkWithCards />

      <section className="publish_analysis container my-6 py-8 sm:mx-auto md:px-0 px-5">
        <div className=" grid md:grid-cols-2 grid-cols-1  px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="left flex items-center">
            <div>
              <h3 className="font-black mt-6">
                We publish analysis and insights
              </h3>
              <p>
                We share data on the growth of open ecosystems, and track how
                value is being generated and distributed
              </p>
            </div>
          </div>
          <div className="right flex justify-end">
            <StaticImage
              src="../assets/home/we_publish_analysis.png"
              alt="platformable"
              width={400}
            />
          </div>
        </div>
      </section>



      <section name="subscription" id="subscription">
        <div className="container mx-auto">
              <div>
          <div className="flex justify-center">
            <input type="text" className="rounded-l-lg  px-4 border-t mr-0 border-b border-l text-main-color border-gray-200 bg-white subscribe-input" placeholder="Your email address" onChange={(e)=>setForm(e.target.value)}/>
          <button className="px-4 rounded-r-lg bg-sunglow  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={handleSubscription}>Subscribe</button>
        </div>
      </div>
      {formSuccess && <p className="text-center ">Thank you for your subscription</p>}
        </div>
      </section>
      {/* 
    <Form
      id="submitMailerlite"
      formClass="text-center my-6 mx-auto"
      titleClass="text-sm"
      title="The future is open"
      iframeId=""
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      paragraph="We share monthly updates on the growth of open ecosystems"
      paragraphClass="mb-12"
    /> */}
    </Layout>
  )
}

export default IndexPage

export const blogQuery = graphql`
  query HomepagePosts {
    allStrapiPost(sort: { fields: publishing_date, order: DESC }, limit: 6) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          staging
          publishing_date
          published_at
          is_featured
          tags {
            name
          }
          featured_image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                formats: PNG
              )
            }
          }
          title
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
