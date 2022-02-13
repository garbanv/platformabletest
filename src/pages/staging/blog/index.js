import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

export default function StagingBlogs({ data, location }) {
  // const authorsData = data.allStrapiPost.edges[0].node.user;
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container mx-auto ">
        <div className="my-10 px-5"><h3 className="font-black text-center">Staging Blog Posts</h3></div>
      </section>
      <div className="container mx-auto all-blog-content my-20 px-5">
        {/* TOP LATESTS 3 POSTS */}
        

        <div className="blog-cards-main-page-container">
          {data?data.allStrapiPost.edges.map((post, index) => {

while (post.node.staging ===true) {
            return (
              <div className="my-4" key={index}>

        <div className="horizontal-blog-card rounded-xl bg-gray-50 shadow-md">
      
          <div className="blog-card-image">
          <GatsbyImage
            image={getImage(post.node.featured_image)}
            className=""
            alt={post.node.title}
          />
          </div>
          <div className="blog-card-content">
          <h5 className="text-lg font-bold leading-5 mt-5">
                    <Link to={`/${post.node.slug}`}> {post.node.title}</Link>
          </h5>
          <span className="text-gray-600 mr-3 small-text mt-4">
                    Published{" "}
                    {new Date(post.node.publishing_date).toDateString()}
          </span>{" "}
          <div className="text-gray-600 text-sm font-medium flex mb-0 mt-0">
                    <small className="small-text mr-1">{`Written by `} </small>
                    {post.node.user.length === 1 ? (
                      <Link
                        className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                        to={`/author/${post.node.user[0].id}`}
                      >{` ${post.node.user[0].username}`}</Link>
                    ) : post.node.user.length > 1 ? (
                      post.node.user.map((x, index) => (
                        <Link
                          to={`/author/${post.node.user[index].id}`}
                          className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                        >
                          {x.username}{" "}
                          {index < post.node.user.length - 1 ? " & " : ""}
                        </Link>
                      ))
                    ) : null}
            </div>
            <div>
                    {post.node.categories.map(cat => {
                      return (
                        <div key={post.node.id} className="">
                          <button
                            to={cat.name}
                            className={`bg-${cat.name} py-0 px-2 rounded text-white small-text text-xs`}
                          
                          >
                            {cat.name}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                  <p className="text-xs leading-5 my-1 small-text pr-5">
                    {post.node.excerpt ? post.node.excerpt : ""}
                  </p>
          </div>
     
        </div>
        
</div>
            )}
          }):null}
        </div>

      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query AllStaginBlogPosts {
    allStrapiPost(sort: { fields: publishing_date, order: DESC }) {
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
                width:300
                blurredOptions: {width: 100}
                placeholder: BLURRED
                formats: PNG
              )
            }
          }
          title
          updated_at
          user {
            id
            username
          }
          publishing_date
          published_at
          excerpt
          staging
        }
      }
    }
  }
`
