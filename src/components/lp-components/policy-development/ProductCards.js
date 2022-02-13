import React from "react"
/*assets*/
import mapConsultImg from "../../../assets/lp-policy_development/map_consultation.svg"
import opportunitiesImg from "../../../assets/lp-policy_development/identify_opportunities.svg"
import collaborateImg from "../../../assets/lp-policy_development/collaborate_with_us.svg"

const ProductCards = () => {
  const images = [
    {
      src: mapConsultImg,
      title:
        "Map consultation processes and current policies relevant to your industry sector",
    },
    {
      src: opportunitiesImg,
      title:
        "Identify opportunities to contribute to, or advocate for, open ecosystem solutions",
    },
    {
      src: collaborateImg,
      title:
        "Collaborate with us as we respond to upcoming policy opportunities",
    },
  ]

  return (
    <section className="container my-16 mx-auto py-8 ">
      <div className="my-12 mx-auto text-center md:w-6/12 w-9/12 px-2">
        <h3 className="">
          Strengthen your opportunity to plan and build in an open society and
          open economy
        </h3>
      </div>
      <div className="my-0 md:mx-16 mx-2 py-0  flex md:flex-row flex-col justify-evenly items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-64 mb-12 md:mb-2 md:mx-2 p-5 rounded-3xl bg-card
          flex flex-col justify-center items-center 
          shadow transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="w-40 h-32" />

            <div className="">
              <p className="m-2 text-center text-sm">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCards
