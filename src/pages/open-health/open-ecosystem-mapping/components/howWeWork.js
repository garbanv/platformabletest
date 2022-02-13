import React from "react"
/*assets*/

import Businesses from "../../../../assets/ob-open-ecosystem-mapping/Businesses.png"
import Industry from "../../../../assets/ob-open-ecosystem-mapping/Industry.png"
import Regulators from "../../../../assets/ob-open-ecosystem-mapping/Regulators.png"

const OGOpenEcosystemMapping = () => {
  const images = [
    {
      src: Businesses,
      title: "Businesses",
      paragraph: `We look at the stakeholders around your platform and how they are building products and services and reaching end users. We measure how value flows and the monetization and network
      effects you could enhance.`,
    },
    {
      src: Industry,
      title: "Industry associations, standards bodies, membership associations",
      paragraph:
        "We look at the overall ecosystem stakeholder and enabling environment and identify where the ecosystem is strongest, where opportunities could be generated, what business models are being used, what obstacles are facing stakeholders, and where gaps exist.",
    },
    {
      src: Regulators,
      title:
        "Regulators, government agencies or community advocacy organisations",
      paragraph:
        "We look at whether open ecosystems are generating benefits for all stakeholders and what can be done to enable greater participation and value flow for everyone.",
    },
  ]

  return (
    <section className="bg-lavender-blue-dark py-10 px-8 ">
      <h3 className="my-10  md:mx-16 text-center font-black">Audience TEST</h3>
      <div classname="container mx-auto">
        <div className="md:w-4/5 mx-auto">
          {images.map((img, i) => (
            <div key={i} className="mb-5 md:flex items-center">
              <img src={img.src} alt={img.title} className="mr-5" />

              <div className="">
                <h4 className="font-black text-1xl">{img.title}</h4>
                <p>{img.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OGOpenEcosystemMapping
