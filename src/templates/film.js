import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Film = ({ data }) => {
  const { filmTitle, filmDescription, markdownContent, filmStills } =
    data.contentfulVideoDetails
  return (
    <Layout>
      {console.log(data.contentfulVideoDetails)}
      <SEO title={filmTitle} />
      <h1>{filmTitle}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownContent.childMarkdownRemark.html,
        }}
      />
      <p className="description">{filmDescription.filmDescription}</p>
      {/* <img alt={filmTitle} src={filmThumbnail.file.url} /> */}
      <div className="stills">
        {filmStills.map(image => (
          <img alt={`${image.file.fileName}`} src={`${image.file.url}`} />
        ))}
      </div>

      <Link to="/">Back to Home</Link>
    </Layout>
  )
}
export default Film
export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulVideoDetails(slug: { eq: $slug }) {
      filmTitle
      slug
      filmDescription {
        filmDescription
      }
      markdownContent {
        childMarkdownRemark {
          html
        }
      }
      filmStills {
        file {
          url
          fileName
        }
      }
    }
  }
`
