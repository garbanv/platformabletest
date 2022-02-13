import React from "react"
import abstractGraphImg from "../../../assets/lp-trends/abstract_graphs.png"

const MeasuringBenefits = () => {
  return (
    <section className="sm:my-12 my-2 mx-auto pt-5 px-0"> 
      <div className="sm:px-32 px-2 lg:w-4/5 w-full">
        <h3>
          Measuring ecosystem value generation and sharing example use cases
        </h3>
        <p>
          A comprehensive database with charts, graphs, business analysis and
          use case deep dives
        </p>
      </div>
      <div className="text-center">
        <img src={abstractGraphImg} alt="" className="object-cover w-full"/>
      </div>
    </section>
  )
}

export default MeasuringBenefits
