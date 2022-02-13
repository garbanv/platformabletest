import React from "react"

import Layout from "../components/layout"

import Seo from "../components/seo"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="">
      <section id="homepageHero" className="homepageHero">
        <div className="homepage-container container mx-auto flex items-center">
          <div className="homepage-heroLeft">
            <h3>
              We work with industry groups, governments, consultants, and
              non-profits to encourage:
            </h3>
            <div className="heroLeftContent">
              <i className="fas fa-angle-right"></i>
              <p>Platform business models</p>
            </div>
            <div className="heroLeftContent">
              <i className="fas fa-angle-right"></i>
              <p>Open ecosystems where everyone can participate.</p>
            </div>
            <button className="cta-contact-us">
              <a href="https://platformable.com/about-platformable/">
                Learn more!
              </a>
            </button>
          </div>
          <div className="homepage-heroRight">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Online_collaboration_re_bkpm.svg"
              alt="plaformable"
            />
          </div>
        </div>
      </section>

      <section
        id="business-models-advantages"
        className="business-models-advantages"
      >
        <h3 className="center">Platform approaches have two big advantages</h3>
        <div className="homepage-container container mx-auto">
          <div className="business-models-advantages-left">
            <p>
              Platforms open up the value previously locked in data and
              capabilities.
            </p>
          </div>
          <div className="business-models-advantages-center">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/completed_tasks_vs6q.svg"
              alt="plaformable"
            />
          </div>
          <div className="business-models-advantages-right">
            <p>
              Platforms enable digital ecosystems where everyone can participate
              and co-create.
            </p>
          </div>
        </div>
      </section>

      <section id="whatwedo-left" className="whatwedo-left">
        <div className="homepage-container container mx-auto flex items-center">
          <div className="whatwedo-left-content red-orange">
            <div className="whatwedo-tag">What we do</div>
            <h3>At Platformable we:</h3>
            <div className="whatwedo-content-numbers">
              <div>
                <h4>Build tools</h4>
                <p>To foster platforms and open ecosystems</p>
              </div>
              <div>
                <h4>Measure value</h4>
                <p>Generated from platforms and ecosystems</p>
              </div>
            </div>

            <div className="whatwedo-content-numbers">
              <div>
                <h4>Share best practices</h4>
                <p>By describing what has worked for others</p>
              </div>
              <div>
                <h4>Connect Partners</h4>
                <p>To work and learn from each other</p>
              </div>
            </div>
          </div>
          <div className="whatwedo-right-content">
            <img
              src="https://platformable.com/assets/img/whatwedoImg1.png"
              alt="platformable"
            />
          </div>
        </div>
      </section>

      <section id="whatwedo-center" className="whatwedo-center">
        <div className="homepage-container container mx-auto">
          <div className="whatwedo-right-content">
            <img
              src="https://platformable.com/assets/img/whatwedoImg2.png"
              alt="platformable"
            />
          </div>
          <div className="whatwedo-left-content ">
            <div className="whatwedo-tag">Key areas</div>
            <h3>We measure the growth of digital open ecosystems in:</h3>
            <div className="whatwedo-content-numbers">
              <div>
                <h4>Open Finance</h4>

                <img
                  src="https://platformable.com/assets/img/OpenFinanceImg.png"
                  alt="plaformable"
                />
              </div>
              <div>
                <h4>Digital Goverment</h4>

                <img
                  src="https://platformable.com/assets/img/governmentImg.png"
                  alt="plaformable"
                />
              </div>
            </div>

            <div className="whatwedo-content-numbers">
              <div>
                <h4>Public health</h4>

                <img
                  src="https://platformable.com/assets/img/publicHealthImg.png"
                  alt="plaformable"
                />
              </div>
              <div>
                <h4>Circular/low-carbon economy</h4>

                <img
                  src="https://platformable.com/assets/img/energyImg.png"
                  alt="plaformable"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whatwedo-left" className="whatwedo-left">
        <div className="homepage-container container mx-auto flex items-center">
          <div className="whatwedo-left-content home-services">
            <div className="whatwedo-tag">Our clients</div>
            <h3>We work with:</h3>
            <p>We create tools and analysis that can help you:</p>
            <div className="whatwedo-content-numbers">
              <div>
                <h4 className="text-sm">Governments</h4>
                <p>
                  Governments need to collaborate openly with increasingly
                  complex networks of partners and stakeholders.
                </p>
              </div>
              <div>
                <h4 className="text-sm">Regulators</h4>
                <p>
                  Regulatory authorities need to ensure that platforms are
                  creating equitable opportunities for all.
                </p>
              </div>
            </div>

            <div className="whatwedo-content-numbers">
              <div>
                <h4 className="text-sm">Industry networks</h4>
                <p>
                  Associations need to offer tools and training that can
                  encourage their members to move to platform models.
                </p>
              </div>
              <div>
                <h4 className="text-sm">API providers and consultants</h4>
                <p>
                  Ecosystem service providers and consultants need to draw on
                  best practices and latest evidence to communicate their value.
                </p>
              </div>
            </div>
          </div>
          <div className="whatwedo-right-content">
            <img
              src="https://platformable.com/assets/img/servicesImg.png"
              alt="platformable"
            />
          </div>
        </div>
      </section>

      <section id="analysis" className="analysis">
        <div className="homepage-container container mx-auto flex items-center">
          <div className="analysis-left-content">
            <div>
              <h3>We publish analysis and insights</h3>
              <p className="mb-5">
                We share data on the growth of platforms and ecosystems and
                track how value is being generated.
              </p>
            </div>
          </div>
          <div className="analysis-right-content">
            <img
              src="https://platformable.com/assets/img/analysisImg.png"
              alt="platformable"
            />
          </div>
        </div>
      </section>

      <section id="product-area" className="product-area">
        <div className="homepage-container container mx-auto">
          <div className="text-center">
            <h3 className="center">Find out more about our product areas</h3>
          </div>
          <div className="products-area">
            <a href="https://platformable.com/open-banking/">
              <div className="product1">
                <div>
                  <img
                    src="https://platformable.com/assets/img/OpenFinanceImg.png"
                    alt="plaformable"
                  />
                </div>
                <div>
                  <h4>Open Banking & Open Finance</h4>
                </div>
              </div>
            </a>
            <a href="https://platformable.com/digital-government/">
              <div className="product2">
                <div>
                  <img
                    src="https://platformable.com/assets/img/governmentImg.png"
                    alt="plaformable"
                  />
                </div>
                <div>
                  <h4>Digital Government</h4>
                </div>
              </div>
            </a>
            <a href="https://platformable.com/public-health/">
              <div className="product3">
                <div>
                  <img
                    src="https://platformable.com/assets/img/publicHealthImg.png"
                    alt="plaformable"
                  />
                </div>
                <div>
                  <h4>Public Health</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* <section id="blog-posts" className="blog-posts" style="margin:30px 0;">
    <div className="homepage-container">
        <div className="text-center">
            <h3 className="center" style="margin-bottom:20px;">Latest Posts</h3>
        </div>

        <div id="loop" className="section-loop wrap{{#is "home"}} no-featured{{/is}}">
            <div className="items-wrap flex">
                {{#get "posts"}}
                {{#foreach posts limit="3"}}
                {{>loop_item}}
                {{/foreach}}
                {{/get}}
            </div>
        </div>


    </div>
</section> */}
    </div>
  </Layout>
)

export default HomePage
