import React from "react"

const Testimonials = props => {
  return (
    <section className="yellowBkgTest bg-secondary my-0 mx-auto">
      <div className="text-center p-8">
        <h2 className="text-white">
          What our colleagues say about the program:
        </h2>
        <blockquote className="italic p-2">
          <p>
            The most comprehensive <br />
            studies on open banking
            <br />I have come across.
          </p>
        </blockquote>
        <p className="uppercase">
          <span className="font-bold">Author Name</span>, Position
        </p>
      </div>
    </section>
  )
}

export default Testimonials
