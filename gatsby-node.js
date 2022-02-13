const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  
  const { createPage } = actions;
  
  const getPosts = makeRequest(graphql, `
    {
      allStrapiPost(sort: { fields: publishing_date, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            categories {
              name
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    const posts= result.data.allStrapiPost.edges;

    posts.forEach(({ node }, index) => {
      
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          slug:node.slug,
          categories:node.categories[0].name,
          prev: index===0  ? null : posts[index-1].node,
          next: index ===(posts.length -1) ? null : posts[index +1].node
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getPosts;
};



exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiAbout implements Node {
      content: String
    }

    type StrapiPost implements Node  {
    slug: String
    content: String
  } 

 
  `
  createTypes(typeDefs)
}




// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}