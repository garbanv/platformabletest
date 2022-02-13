import React from "react"
/*assets*/
import understandImg from "../../../assets/lp-policy_development/understand.svg"
import contributeImg from "../../../assets/lp-policy_development/contribute.svg"
import advocateImg from "../../../assets/lp-policy_development/advocate.svg"
import drawImg from "../../../assets/lp-policy_development/draw.svg"
import identifyImg from "../../../assets/lp-policy_development/identify.svg"

const HowWeDoIt = () => {
  const images = [
    {
      src: understandImg,
      title: "Understand",
      paragraph: "the policy environment",
    },
    {
      src: contributeImg,
      title: "Contribute",
      paragraph: "to policy consultations",
    },
    {
      src: advocateImg,
      title: "Advocate",
      paragraph: "for open ecosystem approaches",
    },
    {
      src: drawImg,
      title: "Draw",
      paragraph: "on policy mapping to plan your strategies",
    },
    {
      src: identifyImg,
      title: "Identify",
      paragraph: "and prepare for new funding and investment opportunities",
    },
  ]
  return (
    <section className="container cards-section mx-auto">
      <div className="my-0 md:mx-16 mx-2 py-0 px-4 flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="lg:w-2/5 w-full max-w-md my-6 mx-2 p-4 rounded-full bg-card
          flex items-center 
           transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="mr-8 w-20 h-20" />

            <div className="w-8/12">
              <h4 className="my-1 text-purple font-black">{img.title}</h4>
              <p className="text-grayed">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWeDoIt
