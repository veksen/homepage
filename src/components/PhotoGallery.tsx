import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import IconSearch from "../images/icon-search.svg"

const PhotoGalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`

const Hover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
`

const Zoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 33px;
  height: 32px;
  background: linear-gradient(180deg, #ff3418 0%, #ca1f08 100%);
  border-radius: 10px;
`

const ZoomIcon = styled(IconSearch)`
  width: 14px;
  fill: #fff;
`

const PhotoWrapper = styled.div`
  flex: 0 0 calc(33.33% - 16px);
  margin: 8px;
  position: relative;
  cursor: pointer;

  &:hover {
    outline: 3px solid #fff;
  }

  &:hover ${Hover} {
    display: block;
  }
`

// TODO: extract childImageSharp to fragment?
interface PhotosQuery {
  photos: {
    edges: [
      {
        photo: {
          name: string
          childImageSharp: {
            fluid: {
              aspectRatio: number
              base64: string
              sizes: string
              src: string
              srcSet: string
            }
          }
        }
      }
    ]
  }
}

const PhotoGallery = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query {
          photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
            edges {
              photo: node {
                name
                childImageSharp {
                  fluid(maxWidth: 300, quality: 60) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ photos }: PhotosQuery) => {
        return (
          <PhotoGalleryWrapper>
            {photos.edges.map(({ photo }) => (
              <PhotoWrapper
                onClick={() => navigate("/photos")}
                key={photo.name}
              >
                <Img fluid={photo.childImageSharp.fluid} />
                <Hover>
                  <Zoom>
                    <ZoomIcon />
                  </Zoom>
                </Hover>
              </PhotoWrapper>
            ))}
          </PhotoGalleryWrapper>
        )
      }}
    />
  )
}

export default PhotoGallery
