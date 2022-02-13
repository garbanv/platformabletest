/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function SEO({ description, lang, meta, title,img }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             siteUrl
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
   const siteUrl = site.siteMetadata?.siteUrl
 console.log("siteUrl",siteUrl)
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `description`, content: `We measure the value of open ecosystems`,
         },
         {
           name:"title", property: `og:title`,content: title,
         },
         {
           property: `og:description`,content: `We measure the value of open ecosystems`,
         },
         {
           property: `og:type`,content: `website`,
         },

         { property: "og:url", content:siteUrl },
 
         {
           name:"image", property: "og:image",content:img,
         },
         {
           name:"author", content:"https://platformable.com"
         },
         {
           name: `twitter:card`,content: `summary_large_image`,
         },
         {
           name: `twitter:creator`,content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,content: title,
         },
         {
           name: `twitter:description`, content: `We measure the value of open ecosystems`,
         },
         {
           name:"twitter:image",content:img
         },
         {
          name:"twitter:site",content:"https://platformable.com"
        },
       ].concat(meta)}
     />
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default SEO