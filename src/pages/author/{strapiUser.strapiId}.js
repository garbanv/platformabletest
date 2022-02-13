import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AuthorPage = ({ data }) => {
  const user = data.strapiUser
  const calculateTimeToRead = article => {
    return Math.ceil(article.trim().split(/\s+/).length / 225)
  }
  const sortByDate = user
    ? user.posts.sort(
        (a, b) => new Date(b.publishing_date) - new Date(a.publishing_date)
      )
    : " "
  console.log(`This is sort ${sortByDate}`)
  return (
    <Layout>
      <SEO title="Author" />
      <div className="container mx-auto">
        <div className="sm:mx-auto px-5 md:px-3 lg:px-0 xl:px-3">
          <section className="grid md:grid-cols-2  grid-cols-1 py-10 justify-center  items-center bg-gray-50 my-5 rounded-xl px-0 md:px-3 lg:px-0 xl:px-3">
            <div className="authors-page-left grid justify-center">
              {user.image && user.image ? (
                <GatsbyImage
                  image={getImage(user.image)}
                  className="mb-2"
                  alt={"Platformable"}
                />
              ) : (
                ""
              )}
            </div>
            <div className="px-5 text-center sm:center md:right md:text-left lg:text-left">
              <h3 className="font-black">
                {user.name} {user.lastname}
                {console.log(user.id)}
              </h3>
              <h5 className="font-black italic">{user.position}</h5>
              <h6 className="">
                <strong>Email: </strong> {` ${user.email}`}
              </h6>
              <div dangerouslySetInnerHTML={{ __html: user.bio }} />
            </div>
          </section>
        </div>

        <section className="blog-cards sm:mx-auto px-5 md:px-3 lg:px-0 xl:px-3">
          <h3 className="text-center font-black mt-14">Posts</h3>
          <div className="bottom-line"></div>
          <div className="container mx-auto all-blog-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortByDate.map(post => {
                if (post.authors_page === true) {
                  return (
                    <>
                      <div className="rounded-xl pt-5 pb-10 top-blog-cards flex flex-col shadow relative">
                        <Link to={`/${post.slug}`}>
                          <div className="px-7 text-center justify-center mb-3 h-44 overflow-hidden">
                            <GatsbyImage
                              image={getImage(post.featured_image)}
                              className=""
                              alt={post.title}
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col gap-3 h-auto mr-5 h-11 mb-2">
                          <div className="text-center ml-5">
                            <h5 class="capitalise font-bold">
                              <Link to={`/${post.slug}`}> {post.title}</Link>
                            </h5>
                          </div>
                          <div>
                            <p className="text-center text-sm">
                              Published on {""}
                              {post.publishing_date}
                            </p>
                          </div>
                        </div>

                        <div className="absolute right-5 w-full bottom-5">
                          <div
                            className={`flex gap-1 items-center justify-end fill-dark-Open-Ecosystems`}
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
                              className={` text-dark-Open-Ecosystems
                                  text-sm font-bold `}
                            >
                              {post.content
                                ? calculateTimeToRead(post.content)
                                : "0"}{" "}
                              min read
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                } else {
                  return
                }
              })}
            </div>
          </div>
        </section>
      </div>
      {/* end of container */}
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
  query strapiAuthorPage($strapiId: Int) {
    strapiUser(strapiId: { eq: $strapiId }) {
      bio
      id
      image {
        childImageSharp {
          gatsbyImageData(
            width: 320
            blurredOptions: { width: 100 }
            placeholder: BLURRED
          )
        }
      }
      name
      email
      lastname
      position
      strapiId
      posts {
        slug
        title
        content
        publishing_date(formatString: "DD MMM YYYY")
        staging
        featured_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        excerpt
        authors_page
      }
    }
  }
`

export default AuthorPage
