import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"

const ImageWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  min-width: 100px;
  max-width: 370px;
  margin: 10px;
  width: 80vw;
`

const FilmsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Image = styled.img``

const Index = ({ data }) => {
  const films = data.allContentfulVideoDetails.edges
  console.log(data)
  return (
    <Layout>
      <Seo title="Films" />
      <h1>hey</h1>
      <FilmsContainer>
        {films &&
          films.map(({ node: film }) => {
            return (
              <ImageWrapper>
                <Image
                  alt={film.filmTitle}
                  src={`${film.filmThumbnail.file.url}`}
                />
              </ImageWrapper>
            )
          })}
        <>
          <ImageWrapper>
            <img src={films[0].node.filmThumbnail.file.url} />
          </ImageWrapper>
        </>
      </FilmsContainer>
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
