import React from "react"
/*assets*/
import bankPlatformImg from "../../../assets/lp-training/bank_platform.svg"
import digitalArchitectureImg from "../../../assets/lp-training/digital_architecture.svg"
import regulatoryFoundationsImg from "../../../assets/lp-training/regulatory_foundations.svg"
import apiProductImg from "../../../assets/lp-training/api_product.svg"
import premiumApiImg from "../../../assets/lp-training/premium_api.svg"
import selOpenBankImg from "../../../assets/lp-training/selling.svg"
import measureSuccessImg from "../../../assets/lp-training/measuring_success.svg"

const CourseStructure = () => {
  const images = [
    {
      src:bankPlatformImg,
      title:'The bank platform',
      paragraph:'A solid overview of open banking regulations, why banks are moving to platform business models, and which banks have done this successfully to generate new revenue streams.'
    },
    {
      src:digitalArchitectureImg,
      title:'Digital architecture',
      paragraph:'Designed for non-technical audiences and CTOs who have been more immersed in business than coding, this course outlines key IT infrastructure that will be needed, security best practices, and give a library of patterns so that new technology can be embedded without rebuilding legacy bank technology.'
    },
    {
      src:regulatoryFoundationsImg,
      title:'Regulatory foundations',
      paragraph:'Understand what APIs banks must make available and what that means for how to monetize, understand best practice standards and how that helps banks gain value faster at lower cost, and how to look beyond compliance to strategize digital success.'
    },
    {
      src:apiProductImg,
      title:'API product ideation',
      paragraph:'Use design thinking techniques to brainstorm potential use cases and apply scoring methodologies to prioritise high value opportunities'
    },
    {
      src:premiumApiImg,
      title:'Premium APIs and partnerships',
      paragraph:'Review potential business models that can be applied to bank APIs and learn strategic skills and access tools that will help you decide on safe bets when adopting a revenue-generating API strategy.'
    },
    {
      src:selOpenBankImg,
      title:'Selling the open banking opportunity internally',
      paragraph:'Learn from bank leaders that have successfully won over lines of business and have now built new whole-of-business API support and track to VP of Platforms for your bank.'
    },
    {
      src:measureSuccessImg,
      title:'Measuring success and building on wins',
      paragraph:'Understand performance and technical metrics that will help you understand whether your bank APIs are high standard, embed governance, risk and compliance metrics, and establish revenue targets and metrics.'
    },
  ];
  
  return (
    <section className="bg-card py-3 px-8">
      <h2 className="my-8 md:mx-16">Course Structure</h2>
      
      <div className="my-0 md:mx-16">
        {images.map((img, i) =>(
          <div key={i} className="mb-5 md:flex items-center"
            >
            <img src={img.src} alt={img.title} className="mr-5" />
            
            <div className="">
              <h4 className="">{img.title}</h4>
              <p>{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CourseStructure
