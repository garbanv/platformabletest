import React from "react"
import { Link } from "gatsby"
// import CallToAction from './../shared-components/CallToAction';

const ProductStreamsCards = ({ data, className }) => {
  return (
    <section className="cards-section container my-4 py-8 sm:mx-auto md:px-0 px-5">
      <div className="border-b border-primary border-opacity-25 w-3/3 mb-8 mx-0 md:px-3 lg:px-0 xl:px-3"></div>
      <div className={className}>
        {data.elements.map((el, i) => (
          <div
            key={i}
            className="w:3/6 sm:w-5/12 lg:w-56 max-w-xs p-6 rounded-3xl bg-card
              flex flex-col  items-center"
            style={{ backgroundColor: el.color }}
          >
            <div className="text-center">
              <Link to={el.anchorLink}>
                <img
                  src={el.img}
                  alt={el.title}
                  className="w-24 h-24 mx-auto bg-white shadow text-center rounded-full p-3 "
                />

                <div className="">
                  <h5 className="my-5 text-center h-14 px-3 text-primary font-black">
                    {el.title}
                  </h5>
                  <p className="text-grayed text-center  my-5 h-24 border-t border-primary border-opacity-25 pt-3 font-sm-sectors">
                    {el.paragraph}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <CallToAction
        callToActionClass="text-center my-8 mx-auto py-0 px-4 "
        contentClass="md:w-3/5 w-full text-center mx-auto"
        paragraph=""
        doNotDisplayAnchor="hidden"
        url={"/about"}
        linkTitle=""
        type="button"
        label={"Contact us"}
        btnClass="outlinedBtn text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full "
      /> */}
    </section>
  )
}

export default ProductStreamsCards
