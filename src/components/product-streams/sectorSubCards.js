import React from "react"
import { Link } from "gatsby"
// import CallToAction from './../shared-components/CallToAction';

const SectorSubCards = ({ data, className }) => {
  return (
    <section className="cards-section my-4 container mx-auto py-8 sm:mx-auto md:px-0 px-5">
      <div className="border-b border-primary border-opacity-25 w-2/3 mx-auto mb-8"></div>

      <div className={className}>
        {data.elements.map((el, i) => (
          <div
            key={i}
            className="w-10/12 sm:w-5/12 lg:w-2/12 p-2 rounded-3xl bg-card
              flex flex-col justify-center items-center min-h-full
            "
            style={{ backgroundColor: el.color }}
          >
            <div className="text-center h-auto">
              <Link to={el.url}>
                <img
                  src={el.img}
                  alt={el.title}
                  className="w-24 h-24 mx-auto bg-white shadow text-center rounded-full p-3 "
                />

                <div className="">
                  <h6 className="my-5 text-center h-8 sm:h-20 lg:h-4 md:h-8 px-3 text-primary font-black sm:mb-10">
                    {el.title}
                  </h6>
                  <p className="hidden md:block text-grayed text-center font-normal font-sm h-24 border-t border-primary border-opacity-25 pt-3 lg:mb-1">
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
        paragraph="Not sure about the area or looking for a custom made product stream?"
        doNotDisplayAnchor="hidden"
        url={"/about"}
        linkTitle="Contact us"
        type="button"
        label={"Contact us"}
        btnClass="outlinedBtn text-primary font-bold border-2 my-5 mx-0 py-2 px-10 rounded-full "
      /> */}
    </section>
  )
}

export default SectorSubCards
