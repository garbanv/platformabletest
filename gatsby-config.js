require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: { 
    FUNCTIONS: true,
    PRESERVE_WEBPACK_CACHE: true ,
    DEV_SSR:true
  },
  siteMetadata: {
    title: `Platformable`,
    description: `We measure the value of open ecosystems`,
    author: `Mark Boyd`,
    siteUrl:`https://www.platformable.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:`https://websiteserver-ds7cf.ondigitalocean.app`,
        //apiURL: `http://localhost:1337`,
        queryLimit: 5000,
        contentTypes: [`post`, `category`,`user`,`tag`,`page`,`os-trends`],
        singleTypes: [`homepage`,`about`],    
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ["oembed", "video","embed","script"],
              providers: {
                include: [
                  'Twitter',
                  'Instagram',
                  'Youtube',
                  'Vimeo',
                  'Codesanbox'
                ],
                exclude: ["Reddit"]
              }
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product','Sku','Subscription', 'Price', 'Customer'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
     
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/app/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.platformable.com',
        sitemap: 'https://www.platformable.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/',disallow: ['/app','/app/*'] }]
      }
    },
/*     {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://platformable.matomo.cloud',
        siteUrl: 'https://platformable.com'
      }
    } */
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `platformable.com`,
      },
    },
    `gatsby-plugin-react-helmet`,
    

  ],
}