import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/Layout"
import PhotoSlider from "../components/PhotoSlider"
import SEO from "../components/SEO"
import Logo from "../images/logo.png"

const slidein = keyframes`
  from {
    opacity: 0;
    top: -75px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`

const LogoWrapper = styled.div`
  width: 160px;
  flex: 0 0 160px;
  position: relative;
  z-index: 2;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) ${slidein};
`

const StyledLogo = styled.img`
  width: 274px;
`

interface PhotoPageProps {
  pageContext: {
    photo: {
      i: number
      name: string
    }
  }
}

const PhotosPage = ({ pageContext }: PhotoPageProps): JSX.Element => (
  <Layout>
    <SEO title="Photography" keywords={[`gatsby`, `application`, `react`]} />

    <LogoWrapper>
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>
    </LogoWrapper>

    <PhotoSlider at={pageContext.photo && pageContext.photo.name} />
  </Layout>
)

export default PhotosPage
