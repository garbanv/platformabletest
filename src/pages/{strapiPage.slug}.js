import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import EmbedContainer from "react-oembed-container"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  useEffect(() => {
    window.instgrm.Embeds.process()
    window.twttr.widgets.load()
  }, [])
  return (
    <>
      <Layout>
        {/* PAGE TITLE ON BROWSER */}
        {/* <SEO title={data.strapiPage.title}/> */}
        <section className="posts-container mx-auto all-blog-content my-5 sm:my-20 px-5">
          <h3 className="text-1xl sm:text-3xl font-black mb-3">
            {data.strapiPage.title}
          </h3>
          <div className="posts-content">
            <EmbedContainer markup={data.strapiPage.content}>
              <div
                dangerouslySetInnerHTML={{ __html: data.strapiPage.content }}
              />
            </EmbedContainer>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query strapiPage($slug: String!) {
    strapiPage(slug: { eq: $slug }) {
      id
      featured_image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      slug
      title
      content
      updated_at
    }
  }
`
