import React, { useState } from "react"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"
// import AnalystImg from '../images/Analyst-as-a-service.png'
// import BlogAsServiceImg from '../images/Blogs and articles.png'
// import OpenEcosystemImg from '../images/Open ecosystem mapping.png'
// import PlatformMindsetImg from '../images/Platform mindset training for banks.png'
// import QuarterlyImg from '../images/Quarterly Trends report.png'
// import StateOfMarketImg from '../images/State of the Market reports.png'

export default function TrendsReport() {
  const [selectedOption, setSelectedOption] = useState("")

  const handleRedirect = selectedOption => {
    navigate(`${selectedOption}`)
  }

  if (selectedOption) {
    handleRedirect(selectedOption)
  }

  return (
    <>
      <Layout>
        <SEO title="Trends Report" />
        


<section id="q4Hero" class="q4Hero">
    <div class="container mx-auto px-5">
      <div class="q4HeroContainer">
        <div class="q4HeroLeft">
          <div>
   
            <h3>Trends Report</h3>
    
    
            <div> 
            <Link to={'/open-banking/trends'} className="trendsCardLink-russian-violet-light" target="_blank">Click here to Subscribe</Link>
            </div>
          </div>
        </div>
        <div class="q4HeroRight">
          <img src="https://platformable.com/content/images/size/w1600/2021/01/OpenBanking-Q4.png" alt=""/>
        </div>
      </div>
    </div>
  </section>

      



<section>
        {/* <div className="container mx-auto">
            <h3 className="text-3xl font-black text-center mb-5 mt-20">2020</h3>
        </div> */}

        <div className="all-posts">
        <div className="container mx-auto mt-20 ">
          {/* single post card start here */}
         
          
          <section id="q4TrendsCards">
    <div className="">
      <div className="center-title">
      <h3 className="font-black mb-5">Key takeaways from Q4 2020</h3>
      </div>
      <div className="bottom-line"></div>
    <div className="card__wrap--outer">
      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1000/2021/01/banks-icon-1.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for Banks</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">Open banking infrastructure is now in place globally. While some markets are just ramping up, it is no longer the time to do the regulatory minimum. Banks have invested in digitisation. If you work within banks, you should be considering how to test new digital business models with your APIs. You should have a roadmap that goes beyond the APIs that are required for regulation.  </p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-trends-banks/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>

      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1600/2021/01/2-FINTECH-1.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for Fintechs</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">Think beyond building generic fintech services with bank APIs. Focus in on one customer segment and think about truly innovative products that offer niche services to this audience. Expand out from there when you understand what works. The world doesn't need another another budget app.</p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-2020-open-banking-api-trends-fintech/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>


      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1600/2021/01/3-CONSUMERS.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for Consumers</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">Insist that open banking provide truly diverse products. Where are the cashflow optimization apps for small business? Where are the products for adult family members caring for their ageing parents? What data can be shared by banks and regulators to explain how consumers are benefiting (or not) from open banking?</p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-2020-open-banking-api-trends-consumers/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>



    </div>
    </div>
  </section>

  <section id="q4TrendsCards">
    <div className="homepage-container">
    <div className="card__wrap--outer">
      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1600/2021/01/4-UNDER-SERVED.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for Underserved</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">Help insist that national and international data collection methods on business registrations and on lending patterns are able to be disaggregated to identify whether open banking is benefiting all members of society. Check if new fintech offerings in low and middle income countries are extracting data (and value) to companies operating in high income countries.</p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-2020-open-banking-api-trends-underserved/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>

      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1600/2021/01/5-API-INDUSTRY.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for API Industry</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">Incorporate standards like API specificatuion formats and bank and finance API standards into your tooling so that it is easier to build new products and services. If you work with banks and fintech, encourage sharing of data points that describe the value that is being generated from new open ecosystems.</p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-2020-open-banking-api-trends-api-industry/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>


      <div className="card__wrap--inner">
        <div className="card">
          <div className="cardImage">
            <img src="https://platformable.com/content/images/size/w1600/2021/01/OpenBanking-Book.png"/>
          </div>
          <div className="card__item">
            <h2 className="font-black mb-5">If you work for Enablers</h2>
          </div>

          <div className="card__item flexible">
            <p className="px-5">We have identified four key enablers that support the growth of the open banking and open finance ecosystem. Read abnout how regulations, standards, security and focusing on Developer eXperience (DX) can help all stakeholders to co-create and share value.</p>
          </div>

          <div className="card__footer">
            <div className="cardImage">
              <a className="pull bg-russian-violet-dark" href="https://platformable.com/blog/q4-2020-trends-enablers-of-an-open-banking-api-ecosystem/"><small>Read more</small></a>
            </div>

          </div>
        </div>
      </div>



    </div>
    </div>
  </section>



         
   

        </div>
      </div>

            </section>
      </Layout>
    </>
  )
}
