import React from "react"

export const AuthorPostComponent = ({image,name,position,description}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img
          src="{image}"
          alt=""
          className="h-full w-full my-0"
        />
      </div>

      <h2 className="mt-4 font-bold text-xl">{name}</h2>
      <h6 className="mt-2 text-sm font-medium">{position}</h6>

      <p className="text-xs text-gray-500 text-center mt-3">
        {description}
      </p>
    </div>
  )
}
