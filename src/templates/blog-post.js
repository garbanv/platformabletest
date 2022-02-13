import React, { useEffect, useState, useRef, useContext } from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
// import EmbedContainer from "react-oembed-container"
import { InlineWidget } from "react-calendly"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import BlogPostAlertMessage from "../components/BlogPostAlertMessage"
import PostContentComponent from "../components/PostContentComponent"
import UserContext from "../context/UserContext"
import BlogCardComponent from "../components/BlogCardComponent"
// import { GatsbyImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { EmailIcon, LinkedinIcon, TwitterIcon } from "react-share"

const isBrowser = typeof window !== "undefined"

const BlogPost = ({ data, pageContext, location }) => {
  const actualPostCategory = data.strapiPost.categories[0].name
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "
  const sameCatergoryPosts = noStagingPosts.filter(
    post => post.node.categories[0].name === actualPostCategory
  )
  const activePostTitle = data.strapiPost.title

  const imgAsolutePath = `https://platformable.com${data.strapiPost.featured_image.childImageSharp
  .gatsbyImageData.images.fallback.src}` || `https://res.cloudinary.com/platform1/image/upload/v1644508012/platformable_Featuredimg_e85aa2f51a.png`;


  const cleanCategoryPosts = sameCatergoryPosts.filter(
    post => post.node.title !== activePostTitle
  )


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
  const calculateTimeToRead = article => {
    return Math.ceil(article.trim().split(/\s+/).length / 225)
  }
  /* REEDIRECT TO CAGETORY */
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }

  const { next, prev } = pageContext
  const [user, setUser] = useContext(UserContext)
  const [scripts, setScripts] = useState([])
  const [update, setUpdate] = useState(false)
  const [category, setCategory] = useState("")
  const [urls, setUrls] = useState([])
  /* get user from localStorage */
  let getLocalUser = {}
  if (isBrowser) {
    getLocalUser = JSON.parse(window.localStorage.getItem("user"))
  }

  const [localUser, setLocalUser] = useState(getLocalUser)

  useEffect(() => {
    if (localUser) {
      setUser(localUser)
    }
  }, [localUser])

  /* BREADCRUMBS */
  const getLocations = location => {
    const url = location.href
    const getUrls = url.split(/[/]/)
    const pathnames = getUrls.splice(3, getUrls.length - 1)
    setUrls(pathnames)
  }

  useEffect(() => {
    getLocations(location)
  }, [category])

  /* DISPLAY CONTENT BASED ON membership */

  const getMembership = (subscription, isLoggedIn) => {
    if (subscription === "free") {
      return <PostContentComponent data={data.strapiPost.content} />
    } else if (subscription === "free_login" && !user.isLoggedIn) {
      return (
        <BlogPostAlertMessage message="Hi, this is a login-only blog post. Become a member to get unlimited access and discover more of ours services." />
      )
    } else if (subscription === "free_login" && user.isLoggedIn) {
      return <PostContentComponent data={data.strapiPost.content} />
    } else if (subscription === "paid" && !user.isLoggedIn) {
      return (
        <BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services." />
      )
    } else if (
      subscription === "paid" &&
      user.isLoggedIn &&
      user.membership === "free"
    ) {
      return (
        <BlogPostAlertMessage message="Hi, this is a member-only blog post. Become a member to get unlimited access and discover more of ours services." />
      )
    } else if (
      subscription === "paid" &&
      user.isLoggedIn &&
      user.membership === "paid"
    ) {
      return <PostContentComponent data={data.strapiPost.content} />
    }
  }



  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      setUpdate(true)
      isInitialMount.current = false
    } else {
    }
  }, [data])

  return (
    <>
      <Layout>
        <section className="container mx-auto py-5 sm:mx-auto md:px-0 px-5">
          <div className=" px-0 md:px-3 lg:px-0 xl:px-3">
            <ul className="flex">
              <li className="small-text">
                <Link to={`/blog`}>Blog</Link>
              </li>
              {urls &&
                urls.map((url, index) => {
                  return (
                    <>
                      <li className="small-text font-black">{`/${url}`}</li>
                    </>
                  )
                })}
            </ul>
          </div>
        </section>
   
        <SEO title={data.strapiPost.title} img={imgAsolutePath} />
        <section className="posts-container mx-auto all-blog-content my-5 sm:my-20 px-5">
          <h3 className="text-3xl sm:text-3xl font-black mb-3">
            {data.strapiPost.title}
          </h3>
          {/* <div className="block container mx-auto px-3"> */}
          <div className="flex flex-col mx-auto text-sm sm:text-lg">
            {data.strapiPost.categories.map(cat => {
              return (
                <div className="flex justify-between gap-3">
                  <Link
                    key={cat.name}
                    className={`py-1 mr-1 text-dark-${cat.name}  flex-grow font-bold`}
                    onClick={() => handleCategory(cat)}
                  >
                    {cat.name}
                  </Link>
                  <div>
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
                      <p className={`text-dark-${cat.name}`}>
                        {data.strapiPost.content
                          ? calculateTimeToRead(data.strapiPost.content)
                          : "0"}{" "}
                        min read
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="flex justify-between gap-3">
              <div className="autores flex  ">
                <div className="autorInfo flex items-start">
                  <span>
                    {`Written by`}{" "}
                    {data.strapiPost.user.length === 1 ? (
                      <>
                        <Link
                          to={`/author/${data.strapiPost.user[0].id}`}
                          className="hover:text-black transition duration-300 ease-in-out"
                        >
                          {" "}
                          <span className="tracking-tighter">
                            {data.strapiPost.user[0].username}
                          </span>
                        </Link>
                      </>
                    ) : data.strapiPost.user.length > 1 ? (
                      data.strapiPost.user.map((x, index) => (
                        <>
                          <Link
                            to={`/author/${x.id}`}
                            className="hover:text-black transition duration-300 ease-in-out mr-1"
                          >
                            {x.name} {x.lastname}{" "}
                            {index < data.strapiPost.user.length - 1
                              ? " &"
                              : ""}
                          </Link>
                        </>
                      ))
                    ) : null}
                  </span>
                </div>
              </div>
              <span className="font-bold text-right">
                Updated at {new Date(data.strapiPost.updated_at).toDateString()}
              </span>
            </div>
            {urls &&
              urls.map((url, index) => {
                const shareUrl = `https://platformable.com/${url}`

                const quote = data.strapiPost.title
                return (
                  <div className="flex gap-1 mt-3 items-center" key={index}>
                    <p>Share this article</p>

                    <TwitterShareButton url={shareUrl} title={quote}>
                      <TwitterIcon size={28} round={true} />
                    </TwitterShareButton>
                    <EmailShareButton
                      url={shareUrl}
                      subject={quote}
                      body={quote}
                    >
                      <EmailIcon size={28} round={true} />
                    </EmailShareButton>
                  </div>
                )
              })}
          </div>
          {/* </div> */}

          <div className="posts-content py-10">
            {data.strapiPost.featured_image &&
            data.strapiPost.featured_image ? (
              <div className="post-featured-img shadow-md mb-8 rounded-lg flex justify-center w-full">
                {data.strapiPost.featured_image &&
                data.strapiPost.featured_image ? (
                  <img
                    src={
                      data.strapiPost.featured_image.childImageSharp
                        .gatsbyImageData.images.fallback.src
                    }
                    className="text-center mb-5  top-featured-post-image w-full"
                    alt={data.strapiPost.title}
                  />
                ) : null}
              </div>
            ) : (
              ""
            )}

            {getMembership(data.strapiPost.membership, user.isLoggedIn)}

            {data.strapiPost.calendly ? (
              <section className="posts-container mx-auto calendly">
                <InlineWidget url="https://calendly.com/platformable" />
              </section>
            ) : (
              ""
            )}
          </div>

          {/* end of all posts */}

          {/* AUTHOR CARD */}
        </section>
        {data.strapiPost.categories.map(cat => {
          return (
            <section
              className={`posts-container mx-5 lg:mx-auto border-bottom-${cat.name}`}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                {data.strapiPost.user.map((user, index) => {
                  return (
                    <Link
                      to={`/author/${user.id}`}
                      key={index}
                      className="flex flex-col items-center justify-center p-4  rounded-lg"
                    >
                      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                        <img
                          alt={data.strapiPost.title}
                          key={index}
                          src={
                            user.image.childImageSharp.gatsbyImageData.images
                              .fallback.src
                          }
                          className="h-full w-full my-0"
                        />
                      </div>

                      <h2 className="mt-4 font-bold text-xl">
                        {user.name} {user.lastname}
                      </h2>
                      <h6 className="mt-2 text-sm font-medium">
                        {user.position}
                      </h6>

                      <p className="text-xs text-gray-500 text-center mt-3">
                        {user.bio}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}

        <section>
          {data.strapiPost.categories.map(cat => {
            return (
              <div
                className={`post-next-prev-button container mx-auto grid justify-center mt-5`}
              >
                <ul className="flex mx-auto gap-5">
                  {prev && (
                    <li
                      className={` bg-dark-${cat.name} text-white rounded-lg text-lg px-5 py-2 w-28 text-center`}
                    >
                      <Link
                        to={`/${prev.slug}`}
                        className="small-text"
                      >{`< Previous`}</Link>
                    </li>
                  )}
                  {next && (
                    <li
                      className={`bg-dark-${cat.name} text-white text-lg rounded-lg px-5 py-2 w-28 text-center `}
                    >
                      <Link
                        to={`/${next.slug}`}
                        className="small-text"
                      >{`Next >`}</Link>
                    </li>
                  )}
                </ul>
              </div>
            )
          })}
        </section>
        <section className="related-posts container mx-auto my-5">
          {data.strapiPost.categories.map(cat => {
            return (
              <h3
                className={`font-black my-5 text-center text-dark-${cat.name} pt-5 w-3/5 mx-auto`}
              >
                Related Articles
              </h3>
            )
          })}
          {/* TOP LATESTS 3 POSTS */}

          <div className="container mx-auto all-blog-content mb-20 mt-10 sm:mx-auto md:px-0 px-5">
            <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data
                  ? cleanCategoryPosts.map((post, index) => {
                      while (index < 3 && post.node.staging === false) {
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
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query MyPost($slug: String) {
    allStrapiPost(
      sort: { fields: publishing_date, order: DESC }
      filter: { is_featured: { eq: true } }
    ) {
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
          excerpt
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
    strapiPost(slug: { eq: $slug }) {
      categories {
        name
      }
      membership
      content
      id
      title
      user {
        id
        name
        lastname
        username
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        position
      }
      updated_at
      featured_image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      calendly
    }
  }
`
