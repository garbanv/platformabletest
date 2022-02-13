import React from 'react'
/*assets*/
import selfPaceImg from "../../../assets/lp-training/Self_Pace.svg";
import workshopImg from "../../../assets/lp-training/Workshop_Oriented.svg";
import ModulesImg from "../../../assets/lp-training/Modules.svg";


const ProductCards = () => {
  const images = [
    {
      src:selfPaceImg,
      title:'Self-paced',
      paragraph:'Work through each module as you wish, using online video content, templates, and tutorials'
    },
    {
      src:workshopImg,
      title:'Workshop-oriented',
      paragraph:'Book an inhouse series of workshops for your team or select a module for a one-off professional development session'
    },
    {
      src:ModulesImg,
      title:'Subject-based',
      paragraph:'Choose just the modules you need and receive them as self-paced modules, inhouse workshops, or via 1:1 mentoring'
    },
  ];
  
  return (
    <section className="my-4 mx-auto py-8">
      
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 md:flex  justify-evenly items-center">
        {images.map((img, i) =>(
          <div key={i} className="product-cards-lp-training md:w-1/3 w-full mb-12 md:mb-2 md:mx-2 p-6 rounded bg-card
          flex flex-col justify-center items-center 
          cursor-pointer shadow transition-shadow hover:shadow-hover"
            >
            <img src={img.src} alt={img.title} className="w-40 h-40" />
            
            <div className="">
              <h4 className="m-5 text-center">{img.title}</h4>
              <p>{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ProductCards

