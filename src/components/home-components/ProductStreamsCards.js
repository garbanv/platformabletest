import React from "react"
/*assets*/
import testImg from "../../assets/home/open_banking.png"

const ProductStreamsCards = () => {
  const images = [
    {
      src: testImg,
      title: "Open Banking/Open Finance",
      paragraph: "Short description of the field lorem ipsum dolor sit amet",
    },
    {
      src: testImg,
      title: "Digital Government",
      paragraph: "Short description of the field lorem ipsum dolor sit amet",
    },
    {
      src: testImg,
      title: "Public Health",
      paragraph: "Short description of the field lorem ipsum dolor sit amet",
    },
    {
      src: testImg,
      title: "Circular Economy",
      paragraph: "Short description of the field lorem ipsum dolor sit amet",
    },
  ]
  return (
    <section className="cards-section my-4 mx-auto py-8">
      <h2 className="text-center my-5">Product Streams</h2>
      <p className="text-center w-2/5 my-5 mx-auto">
        Select your area of interest and see how we can help your users
        co-create the value they need.
      </p>

      <div className="my-0 md:mx-16 mx-2 py-0 px-3 flex flex-wrap flex-col sm:flex-row justify-center items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="md:w-52 w-full max-w-md mb-12 mt-4 md:mb-2 mx-2 p-6 rounded-3xl bg-card
            flex flex-col justify-center items-center 
            cursor-pointer shadow transition-shadow hover:shadow-hover"
          >
            <img src={img.src} alt={img.title} className="" />

            <div className="">
              <h4 className="my-5 text-center h-14">{img.title}</h4>
              <p className="text-grayed my-5 border-t border-darkGrey pt-3">
                {img.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductStreamsCards
