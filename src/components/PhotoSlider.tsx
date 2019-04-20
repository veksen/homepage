import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const PhotoSliderWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
`

const PhotosOuterWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex: 0 0 100%;
  position: relative;
  transition: all 0.3s;
`

const Photo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`

const BackgroundPhotos = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
`

const PhotoBlurred = styled.div`
  flex: 1 0 100%;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  filter: blur(5px);
  transition: all 0.3s;
  opacity: 0.28;
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

const PhotoSlider = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query {
          photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
            edges {
              photo: node {
                name
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 60) {
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
          <PhotoSliderWrapper>
            <BackgroundPhotos>
              {photos.edges.map(({ photo }) => (
                <PhotoBlurred
                  key={photo.name}
                  style={{
                    backgroundImage: `url(${
                      photo.childImageSharp.fluid.base64
                    })`,
                  }}
                />
              ))}
            </BackgroundPhotos>

            <PhotosOuterWrapper>
              {photos.edges.map(({ photo }) => (
                <PhotoWrapper key={photo.name}>
                  <Photo src={photo.childImageSharp.fluid.src} />
                </PhotoWrapper>
              ))}
            </PhotosOuterWrapper>
          </PhotoSliderWrapper>
        )
      }}
    />
  )
}

export default PhotoSlider
