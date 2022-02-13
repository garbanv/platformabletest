import React from "react"
/*assets*/
import buildImg from "../../assets/home/building_tools.png"
import measureImg from "../../assets/home/measuring_value.png"
import bestPracticesImg from "../../assets/home/sharing_best_practices.png"
import connectImg from "../../assets/home/connecting_partners.png"

const HowWeDoItCards = () => {
  const images = [
    {
      src: buildImg,
      title: "Building Tools",
      paragraph: "To grow platforms and ecosystems",
    },
    {
      src: measureImg,
      title: "Measuring Value",
      paragraph: "To identify gaps and opportunities in open ecosystems",
    },
    {
      src: bestPracticesImg,
      title: "Sharing Best Practices",
      paragraph: "To learn from what works",
    },
    {
      src: connectImg,
      title: "Connecting Partners",
      paragraph: "To collaborate effectively",
    },
  ]
  return (
    <section className="cards-section my-2 container mx-auto py-8">
      <h2 className="text-center mt-2 text-secondary font-black">
        How we do it
      </h2>

      <div className="my-0 md:mx-16 mx-2 py-0 px-4 flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="lg:w-2/5 w-full max-w-xl my-6 mx-2 p-4 rounded-full bg-card
          flex items-center 
          transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="mr-8 w-20 h-20" />
            <div className="w-8/12">
              <h6 className="my-1 text-secondary font-black">{img.title}</h6>
              <p className="text-darkGrey">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWeDoItCards
