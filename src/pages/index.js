import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"

const ImageWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  position: relative;
`

const FilmsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const FilmTitle = styled.h2`
  color: white;
  left: 50%;
  opacity: 0;
  position: absolute;
  text-decoration: none;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.7s;
  z-index: 1;
`

const Image = styled.img`
  postion: relative;
`

const ImageLink = styled(Link)`
  align-items: center;
  background-color: black;
  display: flex;
  flex-basis: 10%;
  flex-grow: 1;
  margin: 8px;
  min-width: 363px;

  &:hover {
    ${FilmTitle} {
      color: white;
      opacity: 1;
    }
    ${Image} {
      opacity: 0.5;
    }
    filter: brightness(100%);
  }
`

const Index = ({ data }) => {
  const films = data.allContentfulVideoDetails.edges
  return (
    <Layout>
      <Seo title="Films" />
      <FilmsContainer>
        {films &&
          films.map(({ node: film }) => {
            return (
              <>
                <ImageLink to={`/films/${film.slug}`}>
                  <ImageWrapper>
                    <Image
                      alt={film.filmTitle}
                      src={`${film.filmThumbnail.file.url}`}
                    />
                    <FilmTitle>{film.filmTitle}</FilmTitle>
                  </ImageWrapper>
                </ImageLink>
              </>
            )
          })}
        <>
          <ImageLink to={`/`}>
            <ImageWrapper>
              <Image src={films[0].node.filmThumbnail.file.url} />
            </ImageWrapper>
          </ImageLink>
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
