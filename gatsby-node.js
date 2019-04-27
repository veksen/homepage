const { graphql } = require("gatsby")
const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /window-scroll-position/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const photoPage = path.resolve("src/pages/photos.tsx")

  return graphql(`
    {
      photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        edges {
          photo: node {
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.photos.edges.forEach(({ photo }, i) => {
      createPage({
        path: `/photos/${i}`,
        component: photoPage,
        context: {
          photo: {
            name: photo.name,
            i,
          },
        },
      })
    })
  })
}
