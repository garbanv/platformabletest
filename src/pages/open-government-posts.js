import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCardComponent from "../components/BlogCardComponent"
const OpenGovernmentPostx = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container mx-auto all-blog-content my-20">
        <h3 className="text-3xl font-black text-center md:px-0 px-5">
          Open Government
        </h3>
        <h3 className="text-1xl font-black text-center mb-5 md:px-0 px-5">
          Posts and Articles
        </h3>
        <div className="container mx-auto all-blog-content my-20 md:px-0 px-5">
          <div className="container mx-auto all-blog-content sm:px-5 px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data
                ? data.allStrapiPost.edges.map((post, index) => {
                    return (
                      <BlogCardComponent
                        key={index}
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
                  })
                : null}
            </div>
          </div>
        </div>
        {/* end of all posts */}
      </section>
    </Layout>
  )
}

export default OpenGovernmentPostx

export const blogQuery = graphql`
  query OpenGovernmentBlogPostx {
    allStrapiPost(
      sort: { fields: publishing_date, order: DESC }
      filter: { categories: { elemMatch: { name: { eq: "Open Government" } } } }
    ) {
      edges {
        node {
          categories {
            name
          }
          id
          slug
          publishing_date
          published_at
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
