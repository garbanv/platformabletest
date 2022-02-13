import React from "react"

export default function Trends3ColsComponent({ section, index }) {
  return (
    <section
      key={index}
      className="border-b-2 border-purple-50 py-10 os-trends-light-bg"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8  md:px-0 px-5 trends-3cols-component">
          <div className="trends-3cols-column bg-white p-5 rounded-xl shadow-xl">
            <h3 className="text-sm font-black my-2">
              {section.column1_heading}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: section.column1 }}></div>
          </div>
          <div className="trends-3cols-column bg-white p-5 rounded-xl shadow-xl">
            <h3 className="text-sm font-black my-2">
              {section.column2_heading}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: section.column2 }}></div>
            <div className="liner"></div>
          </div>
          <div className="trends-3cols-column bg-white p-5 rounded-xl shadow-xl">
            <h3 className="text-sm font-black my-2">
              {section.column3_heading}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: section.column3 }}
              className="text-sm"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
