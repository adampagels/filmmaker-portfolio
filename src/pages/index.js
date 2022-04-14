import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data }) => {
  const films = data.allContentfulVideoDetails.edges
  console.log(data)
  return (
    <Layout>
      <Seo title="Films" />
      <h1>hey</h1>
      {films &&
        films.map(({ node: film }) => {
          return (
            <div>
              <img
                alt={film.filmTitle}
                src={`${film.filmThumbnail.file.url}`}
              />
            </div>
          )
        })}
    </Layout>
  )
}
export default Index
export const query = graphql`
  query IndexPageQuery {
    allContentfulVideoDetails {
      edges {
        node {
          id
          slug
          filmTitle
          filmThumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`
