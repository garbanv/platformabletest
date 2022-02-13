import React from "react"
/*assets*/
import Stakeholders from "../../../../assets/ob-open-ecosystem-mapping/Sholders.png"
import products from "../../../../assets/ob-open-ecosystem-mapping/products.png"
import platforms from "../../../../assets/ob-open-ecosystem-mapping/Platforms.svg"
import standards from "../../../../assets/ob-open-ecosystem-mapping/standards.png"
import value from "../../../../assets/ob-open-ecosystem-mapping/Value Flows.png"
import policy from "../../../../assets/ob-open-ecosystem-mapping/policyContext.png"

const FourHorizontalCircles = () => {
  const images = [
    {
      src: policy,
      title: "Policy Context",
      paragraph: "",
    },
    {
      src: Stakeholders,
      title: "Stakeholders",
      paragraph: "",
    },
    {
      src: products,
      title: "Products",
      paragraph: "",
    },
    {
      src: platforms,
      title: "Platforms",
      paragraph: "",
    },
    {
      src: standards,
      title: "Standards",
      paragraph: "",
    },
    {
      src: value,
      title: "Value Flows",
      paragraph: "",
    },
  ]
  return (
    <section className="container mx-auto  py-6 ">
      <div className="my-0 md:mx-8 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-center gap-7 lg:gap-5">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/5 w-full my-6 mx-1 text-center ">
            <img
              src={img.src}
              alt={img.title}
              className=" h-30 mx-auto OH-anOpenEcosystemIs mb-1 rounded-full p-3  transition-shadow hover:shadow-hover img-thumbnail"
            />

            <div className="mx-auto">
              <h4 className="text-center font-black">{img.title}</h4>
              <p className="text-xs text-center font-black">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourHorizontalCircles
