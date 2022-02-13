import React from 'react'
/*assets*/
import openFinanceImg from "../../../assets/lp-trends/offer_open_banking_and_open_finance_regulations.svg";
import apiImg from "../../../assets/lp-trends/offer_API_products.svg";
import benchmarkImg from "../../../assets/lp-trends/offer_pricing_and_business_models.svg";
import globalMoveImg from "../../../assets/lp-trends/offer_the_global_move.svg";

const ActionableInfo = () => {
  const images = [
    {
      src:openFinanceImg,
      paragraph:'Open banking and open finance regulations',
    },
    {
      src:apiImg,
      paragraph:'API products and how they are being used',
    },
    {
      src:benchmarkImg,
      paragraph:'Pricing and business models',
    },
    {
      src:globalMoveImg,
      paragraph:'The global move towards embedded finance and how to prepare for it',
    },
  ];
  
  return (
    <section className="bg-card py-3 px-8 rounded-3xl md:mx-12 mx-4 lg:absolute -bottom-3/4 inset-x-0">
      <h2 className="my-8 mx-auto text-center">Actionable information on:</h2>
      <div className="my-0 sm:mx-12 mx-auto justify-between flex flex-wrap items-center">
        {images.map((img, i) =>(
          <div key={i} className="mb-5 md:flex items-center lg:w-5/12 w-10/12"
            >
            <img src={img.src} alt={img.title} className="w-28 h-28 mr-2 object-contain" />
            
            <div className="">
              <p className="">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ActionableInfo
