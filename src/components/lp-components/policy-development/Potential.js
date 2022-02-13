import React from "react"
/*assets*/
import DigitalCoImg from "../../../assets/lp-policy_development/digital_co-creation _and_collaboration _tools.svg"
import openStandImg from "../../../assets/lp-policy_development/open_standards _and_standardised _data_models.svg"
import dataGovImg from "../../../assets/lp-policy_development/data_governance _and_data_sharing _agreements.svg"
import equityImg from "../../../assets/lp-policy_development/equity-focused _participation _metrics.svg"

const Potential = () => {
  const images = [
    {
      src: DigitalCoImg,
      title: "Digital co-creation",
      paragraph: "and collaboration tools",
    },
    {
      src: openStandImg,
      title: "Open standards",
      paragraph: "and standardised data models",
    },
    {
      src: dataGovImg,
      title: "Data governance",
      paragraph: "and data sharing agreements",
    },
    {
      src: equityImg,
      title: "Equity-focused",
      paragraph: "participation metrics",
    },
  ]
  return (
    <section className="container py-6 mx-auto sm:mx-auto md:px-0 px-5">
      <h3 className="md:w-1/3 w-full my-4 mx-auto text-center font-black">
        Help us describe the potential of open ecosystems using:
      </h3>
      <div className="my-0  py-0 px-0 md:px-3 lg:px-0 xl:px-3 flex flex-wrap flex-col sm:flex-row justify-center">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/5 max-w-sm my-6 mx-2 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-30 h-30 mx-auto bg-greyImg rounded-full p-3 mb-5 img-thumbnail"
            />

            <div className="mx-auto">
              <p className="text-center font-bold">{img.title}</p>
              <p className="text-xs text-center w-9/12 mx-auto">
                {img.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Potential
