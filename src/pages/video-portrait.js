import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VideoPortrait = ({ data }) => {
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
export default VideoPortrait
export const query = graphql`
  query VideoPortraitPageQuery {
    allContentfulVideoDetails(filter: { tags: { eq: "video-portrait" } }) {
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
