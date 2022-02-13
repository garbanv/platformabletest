import { Link } from "gatsby"
import React from "react"

const Sectorcards = ({ data, numberOfColumns, bgColor }) => {



  return (
    <div className="container mx-auto">
      <div
        className={`grid md:grid-cols-${numberOfColumns} grid-cols-1 md:px-0 px-5 gap-10`}
      >
        {data.elements.map((el, index) => {
          return (

            <Link to={el.url} key={index}>
              <div
                className="p-5 rounded-xl p-4 h-full"
                style={{ backgroundColor: bgColor }}
              >
                <div className="text-center">
                <img
                  src={el.img}
                  alt=""
                  className="w-24  bg-white shadow rounded-full p-3 my-5"
                />
                </div>
                <h6 className="font-black text-center my-3"> {el.title}</h6>
                <p className="hidden md:block mb-5 text-center text-primary">{el.paragraph}</p>
              </div>
              </Link>
  
          )
        })}
      </div>
    </div>
  )
}

export default Sectorcards
