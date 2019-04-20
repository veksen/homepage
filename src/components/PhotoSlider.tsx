import { graphql, StaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Arrow, { ArrowWrapper } from "./Arrow"

const PreviousNext = styled.div`
  cursor: pointer;
  z-index: 3;
  width: 44px;
  height: 44px;
  background: linear-gradient(180deg, #ff3418 0%, #ca1f08 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  margin-top: -22px;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;

  ${ArrowWrapper} {
    position: relative;
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`

const Previous = styled(PreviousNext)`
  left: 22px;

  ${ArrowWrapper} {
    left: -2px;
  }
`

const Next = styled(PreviousNext)`
  right: 22px;

  ${ArrowWrapper} {
    right: -2px;
  }
`

const PhotoSliderWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;

  &:hover ${PreviousNext} {
    opacity: 1;
  }
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

const BasePhotoSlider = ({ photos }: PhotosQuery): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previous = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const next = () => {
    if (currentIndex + 1 < photos.edges.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <PhotoSliderWrapper>
      <BackgroundPhotos>
        {photos &&
          photos.edges &&
          photos.edges.length &&
          photos.edges.map(({ photo }) => (
            <PhotoBlurred
              key={photo.name}
              style={{
                backgroundImage: `url(${photo.childImageSharp.fluid.base64})`,
                left: `-${currentIndex * 100}%`,
              }}
            />
          ))}
      </BackgroundPhotos>

      <Previous onClick={previous}>
        <Arrow direction="left" />
      </Previous>
      <Next onClick={next}>
        <Arrow direction="right" />
      </Next>

      <PhotosOuterWrapper>
        {photos &&
          photos.edges &&
          photos.edges.length &&
          photos.edges.map(({ photo }) => (
            <PhotoWrapper
              key={photo.name}
              style={{ left: `-${currentIndex * 100}%` }}
            >
              <Photo src={photo.childImageSharp.fluid.src} />
            </PhotoWrapper>
          ))}
      </PhotosOuterWrapper>
    </PhotoSliderWrapper>
  )
}

const PhotoSlider = (): JSX.Element => (
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
    render={({ photos }: PhotosQuery) => <BasePhotoSlider photos={photos} />}
  />
)

export default PhotoSlider
