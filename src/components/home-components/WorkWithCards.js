import React from "react"
/*assets*/
import govImg from "../../assets/home/governments.png"
import regulatoryImg from "../../assets/home/regulatory_authorities.png"
import industryImg from "../../assets/home/industry_networks.png"
import apiProvImg from "../../assets/home/api_providers.png"
import BusinessImg from "../../assets/home/Business.png"
import NonProfitImg from "../../assets/home/Non-Profits.png"

const WorkWithCards = () => {
  const images = [
    {
      src: BusinessImg,
      title: "Businesses",
      paragraph:
        "Reorient towards a platform focus and understand how to connect with other stakeholders in broader open ecosystems",
    },
    {
      src: NonProfitImg,
      title: "Non-profits",
      paragraph:
        "Build data governance processes, automate data systems, and connect with partners",
    },
    {
      src: govImg,
      title: "Governments",
      paragraph:
        "Use API strategies to encourage collaboration and solve complex problems",
    },
    {
      src: regulatoryImg,
      title: "Regulatory authorities",
      paragraph:
        "Measure the impact of open ecosystems and track how inequalities are reduced",
    },
    {
      src: industryImg,
      title: "Industry networks",
      paragraph:
        "Use tools and training to support members to become effective platforms",
    },
    {
      src: apiProvImg,
      title: "API providers and consultants",
      paragraph: "Communicate the value of APIs to build more business",
    },
  ]
  return (
    <section className="cards-section container sm:mx-auto md:px-0 px-5">
      <div className="px-0 md:px-3 lg:px-0 xl:px-3">
        <h2 className="text-center mb-6 font-black">We Work with</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center">
          {/* <div className="my-0 md:mx-16 mx-2 md:mx-0 py-0 px-3 md:px-0 flex flex-wrap flex-col sm:flex-row justify-between items-center"> */}
          {images.map((img, i) => (
            <div
              key={i}
              className="px-3 rounded-3xl bg-card justify-center gap-4 items-center shadow transition-shadow hover:shadow-hover "
            >
              <div className="flex justify-center">
                <img src={img.src} alt={img.title} className="w-28 h-28 " />
              </div>
              <div className="h-56">
                <h6 className="my-5 border-t border-darkGrey pt-3 font-black text-center">
                  {img.title}
                </h6>
                <p className="text-sm">{img.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkWithCards
