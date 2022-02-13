import React from "react"
import abstractGraphImg from "../assets/abstract_graphs.png"

const MeasuringBenefitsLP = () => {
  return (
    <section className="sm:my-12 my-2 container mx-auto pt-5 px-0">
      <div className="text-center md:text-left mx-auto sm:px-2 w-4/5 sm:w-full mt-10">
        <h3 className="font-black">
          Measuring ecosystem value generation and sharing example use cases
        </h3>
        <p>
          A comprehensive database with charts, graphs, business analysis and
          use case deep dives
        </p>
      </div>
      <div className="text-center ">
        <img src={abstractGraphImg} alt="" className="object-cover w-full" />
      </div>
    </section>
  )
}

export default MeasuringBenefitsLP
