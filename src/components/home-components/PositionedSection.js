import React from "react"
import OpenEcosystemSection from "./OpenEcosystemSection"

import { StaticImage } from "gatsby-plugin-image"

const PositionedSection = () => {
  return (
    <div>
      <section className="bg-primary relative pb-40 w-auto my-6 py-8 text-center">
        <h3 className="text-white">Platform approaches</h3>
        <h3 className="text-white font-black">have two big advantages</h3>
        <div className="md:w-3/6  text-center mx-auto  advantageImgs flex flex-wrap md:flex-nowrap justify-center flex-wrap">
          <div className="flex justify-center text-center">
            <div className="flex flex-col items-center text-center">
              <StaticImage
                src="../../assets/home/home-apiproviders.png"
                alt="Platformable Advantages"
                placeholder="blurred"
                layout="fixed"
                width={300}
              />
              <p className="p-5 text-center text-white">
                They open up the value previously locked in data and capabilties
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center text-center">
              <StaticImage
                src="../../assets/home/home-theyopenvalues.png"
                alt="Platformable Advantages"
                placeholder="blurred"
                layout="fixed"
                width={300}
              />
              <p className="p-5 text-center text-white">
                They enable digital ecosystems where everyone can participate
                and co-create
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="md:mx-8"> */}
      <OpenEcosystemSection />
      {/* </div> */}
    </div>
  )
}

export default PositionedSection
