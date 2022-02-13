import React from "react"

const Form = ({
  formClass,
  formID,
  titleClass,
  title,
  iframeId,
  iframeSrc,
  paragraphClass,
  paragraph,
}) => {
  return (
    <section className={formClass} id={formID}>
      <h2 className="text-2xl font-black">{title}</h2>

      <iframe 
        id={iframeId}
        src={iframeSrc}
        frameBorder="0"
        width="100%"
        height="350px"
        scrolling="no"
        margin='0'
      ></iframe>

      <p className="italic">{paragraph}</p>
    </section>
  )
}

export default Form
