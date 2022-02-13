import React from "react"

const TeamHours = () => {
  return (
    <section className="team-section py-8 px-8 rounded-3xl my-14 md:mx-12 mx-4 text-center">
      <h2 className="pb-3">Additional analyst team hours</h2>
      <p className="pb-3 w-9/12 self-center text-center mx-auto">
        Purchase additional hours to gain access to our Platformable analyst
        team to address your specific go to market strategy needs
      </p>
      <div className="flex justify-evenly tracking-normal ">
        <p className="font-bold text-2xl text-left">
          <span className="text-gray-400 text-base">€ </span>800 
          <span className="text-gray-400 text-base"> for </span>5 hours
        </p>
        <span className="sm:border-r-2"></span>
        <p className="font-bold text-2xl text-right">
          <span className="text-gray-400 text-base">€ </span>1500
          <span className="text-gray-400 text-base"> for </span>10 hours
        </p>
      </div>
    </section>
  )
}

export default TeamHours
