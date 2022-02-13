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
    // <section className="container mx-auto all-blog-content my-20 ">
    // <div className="container mx-auto all-blog-content px-0 md:px-3 lg:px-0 xl:px-3">
    <section className=" container py-6 mx-auto md:px-0 px-5">
      <div className="my-0 px-0 md:px-3 lg:px-0 xl:px-3 py-0  flex flex-wrap flex-col sm:flex-row justify-center md:gap-10 xl:gap-5">
        {images.map((img, i) => (
          <div key={i} className="md:w-1/5 w-full my-6 mx-1 text-center ">
            <img
              src={img.src}
              alt={img.title}
              className=" h-30 mx-auto bg-lightPink mb-1 rounded-full p-3  transition-shadow hover:shadow-hover img-thumbnail"
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
