import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import Form from "../../../components/shared-components/Form"
import PostsCards from "../../../components/home-components/PostsCards"
/*specific-components*/
import Potential from "../../../components/lp-components/policy-development/Potential"
import ProductCards from "../../../components/lp-components/policy-development/ProductCards"
import HowWeDoIt from "../../../components/lp-components/policy-development/HowWeDoIt"
import Breadcrumbs from "../../../components/breadcrumbs"
/*assets*/
import sectionOneImg from "../../../assets/lp-policy_development/heroImg.png"
import BlogCardComponent from "../../../components/BlogCardComponent"

const LPPolicyDevelopment = ({ data, location }) => {
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "

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
  // const handleCategory = selectedCategory => {
  //   const found = postsCategories.find(
  //     cat => cat.name === selectedCategory.name
  //   )
  //   const goTo = found ? navigate(`${found.url}`) : null
  //   return goTo
  // }
  return (
    <Layout>
      <Breadcrumbs location={location} />
      <SEO title="Policy Development" />
      <section className="hero-data-governance py-10 sm:mx-auto md:px-0 px-5">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="hero-data-governance-left">
            <h3 className="font-black">
              Policy development and advocacy services
            </h3>
            <p className="">
              Join us as we map and respond to emerging policy opportunities
            </p>
          </div>
          <div className="hero-data-governance-right flex justify-end">
            <img src={sectionOneImg}></img>
          </div>
        </div>
      </section>

      <Potential />

      <Form
        formClass="text-center mt-5 mx-auto overflow-hidden sm:mx-auto md:px-0 px-5"
        formID="lp-training-form"
        titleClass="text-base"
        title="Sign up now to learn about the upcoming global policy agenda"
        iframeId="submitMailerlite"
        iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      />

      <HowWeDoIt />
      <ProductCards />
      <section className="mt-6  py-6 px-5 bg-whitePurple">
        <div className="container mx-auto">
          <h3 className="text-center font-black">
            Current policy consultation opportunities
          </h3>
          <iframe
            src="https://airtable.com/embed/shrHdOaxfkJmBJUno?backgroundColor=red&viewControls=on"
            frameborder="0"
            width="100%"
            height="533"
            className="my-8 mx-auto px-8"
          ></iframe>
        </div>
      </section>

      {/* <section className=" bg-lightPurple py-10">
        <div className="blog-cards container mx-auto all-blog-content my-20 sm:mx-auto md:px-0 px-5">
          <h3 className="text-center font-black my-5 text-white px-0 md:px-3 lg:px-0 xl:px-3">{`See our recent submissions\n and contribute to our next response`}</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-0 md:px-3 lg:px-0 xl:px-3">
            {data
              ? noStagingPosts.map((post, index) => {
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

      <Form
        formClass="text-center my-5 mx-auto overflow-hidden"
        formID="lp-training-form"
        titleClass="text-base"
        title="Sign up now to learn about the upcoming global policy agenda"
        iframeId="submitMailerlite"
        iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
      />
    </Layout>
  )
}

export default LPPolicyDevelopment

export const OGPolicyPostIndex = graphql`
  query OGPolicyPostIndex {
    allStrapiPost(
      limit: 3
      filter: { categories: { elemMatch: { name: { eq: "Open Government" } } } }
    ) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          staging
          is_featured
          publishing_date
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
