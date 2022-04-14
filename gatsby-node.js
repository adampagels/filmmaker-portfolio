const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulVideoDetails {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      const filmTemplate = path.resolve("./src/templates/film.js")

      result.data.allContentfulVideoDetails.edges.forEach(edge => {
        createPage({
          path: `/films/${edge.node.slug}/`,
          component: slash(filmTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
