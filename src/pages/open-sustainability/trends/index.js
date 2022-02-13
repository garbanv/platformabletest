import React from 'react';
import Layout from '../../../components/layout';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

export default function index({data}) {

  return (
    <>
      <Layout>
        <section className="os-trends-main-page-hero">
          <div className="container mx-auto">
            <h3>OS Trends Report Main Page</h3>
            <div className="w-1/3 bg-white rounded-lg shadow">
            <ul className="divide-y-2 divide-gray-100">
              {data.allStrapiOsTrends.edges.map((x) => (
                <li
                  className="p-3"
                  key={x.node.strapiId} 
                >
                  <span>
                    <a>
                      <Link to={`/open-sustainability/trends/${x.node.slug}`}
                      state={{postId:`/${x.node.slug}`}}
                      >{x.node.title}
                      </Link>
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </section>
      </Layout>
    </>
  )
}


export const query = graphql`
  {
    allStrapiOsTrends {
      edges {
        node {
          featured_image {
            childImageSharp {
              gatsbyImageData(
                width: 350
                layout: FULL_WIDTH
                blurredOptions: {toFormat: AUTO}
              )
            }
          }
          title
          slug
          published_at
          excerpt
          strapiId
        }
      }
    }
  }
`