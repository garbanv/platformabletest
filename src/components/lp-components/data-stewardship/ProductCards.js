import React from "react"
/*assets*/
import selfPaceImg from "../../../assets/lp-training/Self_Pace.svg"
import workshopImg from "../../../assets/lp-training/Workshop_Oriented.svg"
import ModulesImg from "../../../assets/lp-training/Modules.svg"
import mentorshipImg from "../../../assets/lp-data_stewardship/Mentorship.svg"

const ProductCards = () => {
  const images = [
    {
      src: selfPaceImg,
      title: "Self-paced",
      paragraph:
        "Work through each module as you wish, using online video content, templates, and tutorials",
    },
    {
      src: workshopImg,
      title: "Workshop-oriented",
      paragraph:
        "Book an inhouse series of workshops for your team or select a module for a one-off professional development session",
    },
    {
      src: ModulesImg,
      title: "Subject-based",
      paragraph:
        "Choose just the modules you need and receive them as self-paced modules, inhouse workshops, or via 1:1 mentoring",
    },
    {
      src: mentorshipImg,
      title: "Mentorship",
      paragraph:
        "Training can also be provided 1:1 alongside a  mentorship program where key data staff are supported to improve their data stewardship skills",
    },
  ]

  return (
    <section className="my-4 container mx-auto py-6">
      <div className="my-0 mx-auto py-0 px-3 md:flex flex-wrap justify-between items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="lg:w-1/5 md:w-80 w-full md:mb-2 mb-12 md:mx-4 p-6 rounded bg-card
          flex flex-col justify-center items-center 
           shadow transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="w-40 h-40" />

            <div className=" md:h-44 lg:h-60">
              <h5 className="m-5 text-center font-black">{img.title}</h5>
              <p className="text-sm">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCards
