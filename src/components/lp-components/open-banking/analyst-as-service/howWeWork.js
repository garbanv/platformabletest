import React from "react"
/*assets*/

import discuss from "../../../../assets/ob-analyst-as-service/Discuss.png"
import agreements from "../../../../assets/ob-analyst-as-service/agreements.png"
import key from "../../../../assets/ob-analyst-as-service/Key.png"
import priorities from "../../../../assets/ob-analyst-as-service/Priorities.png"
import applied from "../../../../assets/ob-analyst-as-service/Applied.png"
import monitoring from "../../../../assets/ob-analyst-as-service/monitoring.png"

const OBAnalystAsService = () => {
  const images = [
    {
      src: discuss,
      title: "Our analyst team meets with your leads to discuss:",
      paragraph:
        "Departmental/line of business/organisational stakeholder mapping",
    },
    {
      src: agreements,
      title: "Agreements",
      paragraph: "We sign NDA and IP agreements",
    },
    {
      src: key,
      title: "Key Questions",
      paragraph:
        "Our analyst team provides 1-5 key questions and scope parameters using our actionable insights templates",
    },
    {
      src: priorities,
      title: "Priorities",
      paragraph:
        "Together we set priorities and decide on output formats (deck, dashboard, briefing, webinar, etc)",
    },
    {
      src: applied,
      title: "Applied Methodology",
      paragraph:
        "We apply our rapid insights methodology to immediately share data insights based on our current open ecosystem data collection",
    },
    {
      src: monitoring,
      title: "Monitoring Stakeholders",
      paragraph:
        "We identify and followup with relevant industry stakeholders and scan for examples from within and across industries",
    },
  ]

  return (
    <section className="bg-lightPink py-3 px-8">
      <h2 className="my-10 md:mx-16 text-center font-black">How we work</h2>

      <div className="my-0  md:w-3/5 mx-auto">
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
    </section>
  )
}

export default OBAnalystAsService
