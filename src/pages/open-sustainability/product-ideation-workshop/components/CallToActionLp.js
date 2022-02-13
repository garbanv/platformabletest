import React from "react"
import FormLp from './FormLp'

import ButtonLp from "./ButtonLp"

const CallToActionLp = ({
  flexDisplay,
  title,
  paragraph,
  label,
  doNotDisplay
}) => {
  return (
    <section id="cta" className={flexDisplay}>
      <h3 className="my-3">{title}</h3>
      <p className="md:text-left md:w-2/4 text-xl">{paragraph}</p>
      <ButtonLp label={label} doNotDisplay={doNotDisplay}/>
    </section>
  )
}

export default CallToActionLp

/*we use props so we can change title, paragraph accordingly in any component where the CallToAction component will be used
--> className={flexDisplay}, 
-->className={doNotDisplay}, 
are special classes, that when used, will have the classes edited in the index.css*/
