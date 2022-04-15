import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ShortFilm = ({ data }) => {
  const films = data.allContentfulVideoDetails.edges
  console.log(data)
  return (
    <Layout>
      <Seo title="Travel Films" />
      <h1>hi</h1>
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
export default ShortFilm
export const query = graphql`
  query ShortFilmPageQuery {
    allContentfulVideoDetails(filter: { tags: { eq: "short-film" } }) {
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
