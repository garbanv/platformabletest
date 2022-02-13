import React from 'react'
/*assets*/
import openBankingImg from "../../../assets/lp-trends/offer_open_banking_and_open_finance_regulations.svg";
import opportunitiesImg from "../../../assets/lp-trends/cards_see_where_opportunities _are_emerging.svg";
import benchmarkImg from "../../../assets/lp-trends/cards_benchmark_your_activities _against_industry_leaders.svg";


const ProductCards = () => {
  const images = [
    {
      src:openBankingImg,
      title:'Understand the open banking platform economy',
    },
    {
      src:opportunitiesImg,
      title:'See where opportunities are emerging',
    },
    {
      src:benchmarkImg,
      title:'Benchmark your activities against industry leaders',
    },
  ];
  
  return (
    <section className="my-16 mx-auto py-8">
      
      <div className="my-0 md:mx-16 mx-2 py-0 px-3 flex md:flex-row flex-col justify-evenly items-center">
        {images.map((img, i) =>(
          <div key={i} className="md:w-1/3 w-8/12 mb-12 md:mb-2 md:mx-2 p-5 rounded-3xl bg-card
          flex flex-col justify-center items-center 
          cursor-pointer shadow transition-shadow hover:shadow-hover"
            >
            <img src={img.src} alt={img.title} className="w-40 h-32" />
            
            <div className="">
              <p className="m-2 text-center font-bold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12 mx-auto text-center md:w-6/12 w-9/12 px-2">
        <p className="leading-6 text-2xl">
          Let us help you and your team evolve towards a platform mindset.
        </p>
      </div>

    </section>
  )
}

export default ProductCards

