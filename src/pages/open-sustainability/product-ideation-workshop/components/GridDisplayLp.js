import React from "react"
import ButtonLp from "./ButtonLp"
import { Link } from "gatsby"

const GridDisplayLp = ({
  title,
  paragraph,
  span,
  label,
  backImg,
  gridDisplayOrder,
  doNotDisplay,
}) => {
  return (
    <section
      id=""
      className="grid md:grid-cols-2 grid-cols-1 container mx-auto py-10 my-10 justify-between items-center  md:px-0 px-5"
    >
      <div className=" mx-auto px-0 md:px-3 lg:px-0 xl:px-3 ">
        <div>
          <h3 className="font-black">
            {title}&nbsp;
            <span className="bg-secondary p-1">{span}</span>
          </h3>
          <p>{paragraph}</p>
        </div>

       {/*  <div className={doNotDisplay}>
          <ButtonLp label={label} />
        </div> */}
      </div>

      <div className="grid justify-end">
        <img
          loading="lazy"
          src={backImg}
          alt="background"
          className=" mt-5 sm:mt-0"
        />
      </div>
    </section>
  )
}

export default GridDisplayLp

/*--> className={gridDisplayOrder} 
is a special class, that when used, will have the classes edited in the index.css. We use it so we can invert the rows order between the img and the text*/
