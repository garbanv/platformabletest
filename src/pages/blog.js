import React, { useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogCardComponent from "../components/BlogCardComponent"

export default function Blogs({ data, location }) {
  // const authorsData = data.allStrapiPost.edges[0].node.user;
  const noStagingPosts = data
    ? data.allStrapiPost.edges.filter(post => post.node.staging != true)
    : " "

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

  // filter for categories
  const [filterState, setFilterState] = useState("")
  const [searchedValue, setSearchedValue] = useState("")
  const handleInputChange = event => {
    setSearchedValue(event.target.value)
  }
  const getFilter = (post, index) => {
    const searchedValueLowerCase = searchedValue.toLowerCase().trim()

    if (filterState === "" && searchedValue === "") {
      return index > 0
    } else if (searchedValue.length > 0 && filterState === "") {
      return (
        post.node.title.toLowerCase().trim().includes(searchedValueLowerCase) ||
        post.node.user.filter(user =>
          user.username.toLowerCase().trim().includes(searchedValueLowerCase)
        ).length > 0
      )
    } else if (filterState.length > 0 && searchedValue.length > 0) {
      return (
        (post.node.categories.filter(cat => cat.name === filterState).length >
          0 &&
          post.node.title
            .toLowerCase()
            .trim()
            .includes(searchedValueLowerCase)) ||
        post.node.user.filter(user =>
          user.username.toLowerCase().trim().includes(searchedValueLowerCase)
        ).length > 0
      )
    } else if (filterState.length > 0 && searchedValue === "") {
      return (
        post.node.categories.filter(cat => cat.name === filterState).length > 0
      )
    } else if (filterState === "" && searchedValue > 0) {
      return (
        post.node.title.toLowerCase().trim().includes(searchedValueLowerCase) ||
        post.node.user.filter(user =>
          user.username.toLowerCase().trim().includes(searchedValueLowerCase)
        ).length > 0
      )
    }
  }

  const resetFilters = () => {
    setSearchedValue("")
    setFilterState("")
  }

  const postsCategories = [
    { name: "Open Ecosystems" },
    {
      name: "Open Banking / Open Finance",
      url: "/open-banking/open-banking-posts",
    },
    {
      name: "Open Health",
      url: "/open-health/open-health-posts",
    },
    {
      name: "Open Sustainability",
    },
    {
      name: "Open Government",
      url: "/open-government/open-government-posts",
    },
    {
      name: "Labs",
      url: "/labs",
    },
  ]
  const handleCategory = selectedCategory => {
    const found = postsCategories.find(
      cat => cat.name === selectedCategory.name
    )
    const goTo = found && found.url ? navigate(`${found.url}`) : null
    return goTo
  }

  return (
    <Layout>
      <SEO title="Blog" />
      {/* <section className="container mx-auto ">
        <div className="my-10 px-5"></div>
      </section> */}
      {/* <section className="cards-section my-6 container py-8 sm:mx-auto md:px-0 px-5">
        <div className="px-0 md:px-3 lg:px-0 xl:px-3"> */}
      <div className="container mx-auto all-blog-content my-20 sm:mx-auto md:px-0 px-5">
        {data
          ? noStagingPosts.map((post, index) => {
              if (index === 0 && post.node.staging === false) {
                return (
                  <>
                    {/* FEATURED POST */}
                    <div
                      key={post.node.title}
                      className="container all-blog-content px-0 md:px-3 lg:px-0 xl:px-3"
                    >
                      <div class="flex flex-col mb-5 w-full shadow-md lg:flex-row xl:flex-row">
                        <div class="w-full lg:w-1/2 flex flex-col gap-8">
                          <div className="flex gap-3 h-auto ">
                            {post.node.categories.map(cat => {
                              return (
                                <div
                                  key={post}
                                  className={`bg-dark-${cat.name} flex text-center items-center w-16 h-16 justify-center`}
                                >
                                  <div className="w-6/12 text-white font-bold text-xl flex flex-col">
                                    <span className="">
                                      {getDayString(post.node.publishing_date)}
                                    </span>
                                    <span className="">
                                      {getMonthString(
                                        post.node.publishing_date
                                      )}
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                            <div className="flex flex-col justify-center">
                              <div>
                                <h2 class="cursor-default capitalise font-bold text-3xl">
                                  Latest Article
                                </h2>
                                <div className="h-px bg-russian-violet-dark w-full" />
                              </div>
                              {post.node.categories.map(cat => {
                                return (
                                  <div key={post.node.id} className="">
                                    <p
                                      className={`text-dark-${cat.name} capitalise`}
                                    >
                                      <button
                                        to={cat.name}
                                        onClick={() => handleCategory(cat)}
                                      >
                                        {cat.name}
                                      </button>
                                    </p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          <div className="mx-auto w-11/12 mb-10">
                            <Link to={`/${post.node.slug}`}>
                              <h3 className="text-2xl font-bold mb-3 text-russian-violet-dark">
                                {post.node.title}
                              </h3>
                            </Link>
                            <p className="mb-3">
                              {`Written by `}{" "}
                              {post.node.user.length === 1 ? (
                                <Link
                                  className="hover:text-black transition duration-300 ease-in-out"
                                  to={`/author/${post.node.user[0].id}`}
                                >{` ${post.node.user[0].username}`}</Link>
                              ) : post.node.user.length > 1 ? (
                                post.node.user.map((x, index) => (
                                  <Link
                                    to={`/author/${post.node.user[index].id}`}
                                    className="hover:text-black transition duration-300 ease-in-out"
                                    key={index}
                                  >
                                    {x.username}{" "}
                                    {index < post.node.user.length - 1
                                      ? " & "
                                      : ""}
                                  </Link>
                                ))
                              ) : null}
                            </p>
                            <p>
                              {post.node.excerpt
                                ? post.node.excerpt.substr(0, 500) + " ..."
                                : ""}
                            </p>

                            {post.node.categories.map(cat => {
                              return (
                                <div
                                  className={`flex gap-1 items-center justify-end fill-dark-${cat.name}`}
                                  key={post}
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
                                    className={`text-dark-${cat.name} text-sm font-bold text-red-orange-dark`}
                                  >
                                    {post.node.content
                                      ? calculateTimeToRead(post.node.content)
                                      : "0"}{" "}
                                    min read
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div class="flex items-center w-full text-center lg:mb-0 lg:w-1/2 ">
                          {post.node.featured_image &&
                          post.node.featured_image ? (
                            <Link to={`/${post.node.slug}`}>
                              <div className="w-11/12 flex items-center mx-auto mb-5 lg:mb-0 ">
                                <GatsbyImage
                                  image={getImage(
                                    post.node.featured_image.bigImg
                                  )}
                                  className=""
                                  alt={post.node.title}
                                />
                              </div>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            })
          : null}
        {/* end of the featured post*/}

        {/* start of the search component*/}
        <div className="container mx-auto all-blog-content my-20 px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="flex justify-center flex-col mt-10 mb-10">
            <div>
              <h4 className="capitalize font-bold text-center text-russian-violet-dark">
                previous articles
              </h4>
            </div>
            <div className="flex gap-3 justify-center mt-10 ">
              {/* debounce adds delay to avoid flickering due to onChange event */}
              <DebounceInput
                minLength={3}
                debounceTimeout={400}
                id="searchbar"
                placeholder="Search article"
                className="rounded-full pl-3 pr-16 border-2 border-gray-purple-light"
                onChange={handleInputChange}
                value={searchedValue}
              />
            </div>
          </div>
        </div>
        {/* end of the search component */}
        {/* Posts component */}
        <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Categories component */}
            <div className=" pr-5 rounded-xl pt-5 pb-5 top-blog-cards flex flex-col">
              <h5 className="font-bold sm:pb-2 md:pb-0 text-xl ml-2">
                Categories
              </h5>
              <button
                className={
                  filterState === ""
                    ? `bg-sunglow-dark mt-2 text-left padding-bottom-4`
                    : `text-left mt-2`
                }
                onClick={resetFilters}
              >
                <h6
                  className={
                    filterState === ""
                      ? `font-medium md:text-lg pt-4 pb-2 pl-2 bg-sunglow-dark`
                      : `font-medium md:text-lg pt-4 pb-2 border-b-px border-bottom-sunglow-dark pl-2 `
                  }
                >
                  All categories
                </h6>
              </button>
              {postsCategories.map((cat, index) => (
                <button
                  key={index}
                  className={
                    filterState === cat.name
                      ? `bg-dark-${cat.name} mt-2 text-left text-white padding-bottom-4`
                      : `text-left mt-2`
                  }
                  onClick={() => {
                    setSearchedValue("")
                    setFilterState(cat.name)
                  }}
                >
                  <h6
                    className={
                      filterState === cat.name
                        ? `font-medium md:text-lg pt-4 pb-2 pl-2`
                        : `font-medium md:text-lg pt-4 pl-2 pb-2 border-russian-violet-dark text-dark-${cat.name}`
                    }
                  >
                    {cat.name}
                  </h6>
                </button>
              ))}
            </div>
            {/* cards */}
            {data && noStagingPosts.filter(getFilter).length > 0 ? (
              noStagingPosts.filter(getFilter).map((post, index) => {
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
              })
            ) : (
              <p className="pt-5 pl-2 text-lg sm:inline-block md:pl-0 pb-5 ">
                There are no related posts yet
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query AllBlogPosts {
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
                width: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                formats: PNG
              )
            }
            #fetching big image for the top post
            bigImg: childImageSharp {
              gatsbyImageData(
                width: 1280
                blurredOptions: { width: 100 }
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
          content
        }
      }
    }
  }
`
