import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import coffeMug from '../../../../assets/os/self-paced.png'
import workshop from '../../../../assets/os/workshop-oriented.png'
import modules from '../../../../assets/os/modules.png'

const ProductsCardsLp = () => {
  const data = useStaticQuery(graphql`
    query MyFileQueryOS {
      file(
        ext: { eq: ".pdf" }
        name: {
          eq: "Platformable-Q2-2021-Open-Banking-Open-Finance-Trends-Report"
        }
      ) {
        id
        name
        publicURL
      }
    }
  `)

  return (
    <>
      <section className="w-screen my-16 mx-auto py-8 ">
        <div className="container mx-auto product-group my-0  py-0 flex md:flex-row flex-col justify-between items-center md:items-stretch">
          <div
            className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
                    flex flex-col items-center 
                     shadow transition-shadow hover:shadow-hover"
          >
            <div className="w-40 h-36">
              <img src={coffeMug} alt="" />
            </div>
            <div>
              <h4 className="m-5 text-center">
              Understand the potential of open banking/open finance for sustainability solutions
              </h4>
            </div>
          </div>

          <div
            className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
          flex flex-col items-center 
           shadow transition-shadow hover:shadow-hover"
          >
            <div className="w-40 h-36">
              <img src={workshop} alt="" />
            </div>
            <div>
              <h4 className="m-5 text-center">
                See where opportunities are emerging
              </h4>
            </div>
          </div>

          <div
            className="product--item md:w-1/3 w-9/12 mb-12 md:mb-2 md:mx-2 p-6 rounded-3xl bg-card
                    flex flex-col items-center 
                     shadow transition-shadow hover:shadow-hover"
          >
            <div className="w-40 h-36 block">
              <img src={modules} alt="" />
            </div>
            <div>
              <h4 className="m-5 text-center">
                Benchmark your activities against industry leaders
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 mx-auto text-center md:w-6/12 w-9/12 px-2">
          <p className="leading-6 text-2xl font-black">
            Let us help you and your team evolve towards a platform mindset.
          </p>
        </div> */}
      </section>
      {/* <section className="flex justify-center py-5 -mt-20">
        <a
          href={data.file.publicURL}
          className="btn bg-russian-violet-dark text-white px-5 rounded-xl py-2"
          download
        >
          See our latest Trends Reports
        </a>
      </section> */}
    </>
  )
}

export default ProductsCardsLp
