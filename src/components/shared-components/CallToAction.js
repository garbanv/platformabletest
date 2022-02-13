import React from "react"
import Link from "./Link"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "./Button"

const CallToAction = ({
  callToActionClass,
  contentClass,
  title,
  titleClass,
  paragraph,
  paragraphTwo,
  paragraphClass,
  doNotDisplayLink,
  doNotDisplayAnchor,
  url,
  to,
  linkTitle,
  type,
  label,
  btnClass,
}) => {
  return (
    <section className={callToActionClass}>

      <div className={contentClass}>
        <h3 className={titleClass}>{title}</h3>
        <p className={paragraphClass}>{paragraph}</p>
        <p className={paragraphClass}>{paragraphTwo}</p>
      </div>

      <div className={doNotDisplayLink}>
        <Link url={url} title={linkTitle}>
          <Button type={type} label={label} btnClass={btnClass} />
        </Link>
      </div>

      <div className={doNotDisplayAnchor}>
          <AnchorLink to={to} title={linkTitle}>
            <Button 
              type={type}
              label={label} 
              btnClass={btnClass} 
            />
          </AnchorLink>
        </div>
    </section>
  )
}

export default CallToAction

/*we use props so we can change title, paragraph accordingly in any component where the CallToAction component will be used
--> className={flexDisplay}, 
-->className={doNotDisplay}, 
are special classes, that when used, will have the classes edited in the index.css*/
