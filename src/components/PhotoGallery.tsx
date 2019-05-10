import Swiper from "better-react-swiper"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { useWindowWidth } from "../hooks/useWindowWidth"
import IconSearch from "../images/icon-search.svg"
import { distributeToColumnByRatio } from "../utils/distributeToColumnByRatio"
import Arrow from "./Arrow"

const PhotoGalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  @media screen and (max-width: 768px) {
    position: relative;
    justify-content: center;
    width: calc(100% + 64px);
    margin: 0 -32px 36px;
  }
`

const PhotoGalleryRow = styled.div`
  width: 100%;
  display: flex;
`

const PhotoGalleryColumn = styled.div<{ colCount: number }>`
  flex: 0 0 ${props => 100 / props.colCount}%;
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
  margin: 8px 8px 16px;
  position: relative;
  cursor: pointer;

  &:hover {
    outline: 3px solid #fff;
  }

  &:hover ${Hover} {
    display: block;
  }
`

const PhotoWrapperMobile = styled.div`
  flex: 0 0 calc(100% - 16px);
  margin: 0 8px;

  .gatsby-image-wrapper > div {
    padding-bottom: 66.6666% !important;
  }
`

const SeeMoreMobile = styled.div`
  cursor: pointer;
  position: absolute;
  top: 100%;
  margin-top: -16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ff3418 0%, #ca1f08 100%);
  border-radius: 10px;
  padding: 14px 18px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;

  svg {
    margin-left: 5px;
    width: 18px;
    fill: #fff;
  }
`

interface PhotoEdge {
  photo: {
    name: string
    childImageSharp: {
      fluid: {
        aspectRatio: number
        presentationWidth: number
        presentationHeight: number
        base64: string
        sizes: string
        src: string
        srcSet: string
      }
    }
  }
}

// TODO: extract childImageSharp to fragment?
interface PhotosQuery {
  photos: {
    edges: PhotoEdge[]
  }
}

const Gallery = ({ photos }: PhotosQuery) => {
  const mappedPhotos = photos.edges.map(({ photo }) => ({
    id: photo.name,
    width: photo.childImageSharp.fluid.presentationWidth,
    height: photo.childImageSharp.fluid.presentationHeight,
    value: { ...photo },
  }))

  const colCount = 3
  const columns = distributeToColumnByRatio<PhotoEdge>(
    mappedPhotos,
    colCount,
    250, // 250 is not perfect, but close enough, would need to trigger on window resize
    16
  )

  return (
    <PhotoGalleryWrapper>
      <PhotoGalleryRow>
        {columns.map((columnPhotos, i) => (
          <PhotoGalleryColumn key={i} colCount={colCount}>
            {columnPhotos.map(({ value: photo }, index) => (
              <PhotoWrapper
                onClick={() => navigate(`/photos/${index + 1}`)}
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
          </PhotoGalleryColumn>
        ))}
      </PhotoGalleryRow>
    </PhotoGalleryWrapper>
  )
}

const GalleryMobile = ({ photos }: PhotosQuery) => (
  <PhotoGalleryWrapper>
    <Swiper
      itemsWide={1}
      style={{ width: "100%" }}
      canvasStyle={{
        width: "calc(100% - 50px)",
        padding: "0 25px",
      }}
      arrowStyle={{
        marginLeft: "8px",
        marginRight: "8px",
        color: "#666",
        background: "rgba(255, 255, 255, .8)",
      }}
      items={photos.edges.map(({ photo }) => (
        <PhotoWrapperMobile key={photo.name}>
          <Img
            fluid={photo.childImageSharp.fluid}
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </PhotoWrapperMobile>
      ))}
    />
    <SeeMoreMobile onClick={() => navigate("/photos")}>
      See more
      <Arrow />
    </SeeMoreMobile>
  </PhotoGalleryWrapper>
)

const PhotoGallery = (): JSX.Element => {
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth <= 768

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
                    presentationWidth
                    presentationHeight
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ photos }: PhotosQuery) => {
        // necessary on first load, because Gatsby cannot build/compute window.innerWidth
        if (!windowWidth) {
          return null
        }

        if (isMobile) {
          return <GalleryMobile photos={photos} />
        }

        return <Gallery photos={photos} />
      }}
    />
  )
}

export default PhotoGallery
