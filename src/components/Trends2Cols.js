import React from "react"

export default function Trends2Cols({ index, section }) {
  return (
    <section key={index} className="border-b-2 border-purple-50 container mx-auto py-10">

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8  md:px-0 px-5">
        <div className="trends-2cols-component-left-col">
          <div dangerouslySetInnerHTML={{ __html: section.column1 }}></div>
        </div>
        <div className="trends-2cols-component-right-col">
          <div dangerouslySetInnerHTML={{ __html: section.column2 }}></div>
        </div>
      </div>
    </section>
  )
}
