import React from "react"
/*assets*/
import ensureImg from "../../../assets/lp-data_stewardship/ensure_data_quality.png"
import improveImg from "../../../assets/lp-data_stewardship/improve_service_delivery.png"
import advocateImg from "../../../assets/lp-data_stewardship/advocate_more_effectively.png"
import generateImg from "../../../assets/lp-data_stewardship/generate_new_funding.png"

const LearnHowToCollect = () => {
  const images = [
    {
      src: ensureImg,
      title: "Ensure",
      paragraph: "data quality",
    },
    {
      src: improveImg,
      title: "Improve",
      paragraph: "service delivery",
    },
    {
      src: advocateImg,
      title: "Advocate",
      paragraph: "more effectively",
    },
    {
      src: generateImg,
      title: "Generate",
      paragraph: "new funding",
    },
  ]
  return (
    <section className="px-8 py-6 container mx-auto mx-4">
      <h3 className="my-4 mx-auto text-center font-black">
        Learn how to collect, manage, analyse and reuse data in ways that are
        ethical, responsible and participatory.
      </h3>
      <p className="text-center">This will help you to:</p>
      <div className="my-0 md:mx-8 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-center items-center">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/5 w-full my-6 mx-1 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-30 h-30 mx-auto bg-greyImg rounded-full p-3 cursor-pointer transition-shadow hover:shadow-hover"
            />

            <div className="mx-auto">
              <h4 className="text-center font-black">{img.title}</h4>
              <p className="text-xs text-center font-black">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LearnHowToCollect
