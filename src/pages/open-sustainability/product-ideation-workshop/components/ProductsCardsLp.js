import React from "react"
import selfImg from '../../../../assets/os/self-paced.png'
import workshopImg from '../../../../assets/os/workshop-oriented.png'
import modulesImg from '../../../../assets/os/modules.png'

const ProductsCardsLp = props => {
  return (
    <section className=" my-4  py-8">
      <div className="container mx-auto product-group  my-0  py-0  md:flex ">
        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-2 md:mx-2 p-6 rounded bg-card
                    flex flex-col items-center 
                     shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 ">
            <img src={selfImg} alt="" />
   
          </div>
          <div className="lg:h-80">
            <h3 className="m-5 text-center">Self-paced</h3>
            <p>
              Work through each module as you wish, using online video content,
              templates, and tutorials
            </p>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-20  md:mx-2 p-6 rounded bg-card
                    flex flex-col items-center 
                     shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 ">
            <img src={workshopImg} alt="" />
          </div>
          <div className="lg:h-80">
            <h3 className="m-5 text-center">Workshop-oriented</h3>
            <p>
              Book an inhouse series of workshops for your team or select a
              module for a one-off professional development session
            </p>
          </div>
        </div>

        <div
          className="product--item md:w-1/3 w-full mb-12 md:mb-2 md:mx-2 p-6 rounded bg-card
                    flex flex-col items-center 
                     shadow transition-shadow hover:shadow-hover"
        >
          <div className="w-40 h-40 block">
            <img src={modulesImg} alt="" />
          </div>
          <div className="lg:h-80">
            <h3 className="m-5 text-center">Subject-based</h3>
            <p>
              Choose just the modules you need and receive them as self-paced
              modules, inhouse workshops, or via 1:1 mentoring
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCardsLp
