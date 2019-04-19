import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import iconHeart from "../images/icon-heart.png"
import iconPhotography from "../images/icon-photography.png"
import iconWebDev from "../images/icon-webdev.png"
import FadedLogoSVG from "../images/jp-faded.svg"
import Logo from "../images/logo.png"
import Container from "./Container"

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

const HeaderWrapper = styled.header``

const HeaderInner = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 64px;
  display: flex;
  background: #34353b;
`

const LogoWrapper = styled.div`
  width: 274px;
  flex: 0 0 274px;
  position: relative;
  left: -50px;
  width: 274px;
  z-index: 2;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) ${slidein};
`

const StyledLogo = styled.img`
  width: 274px;
`

const Content = styled.div`
  opacity: 0;
  position: relative;
  margin-top: 100px;
  font-size: 40px;
  line-height: 1;
  z-index: 2;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards
    ${slidein};

  ul {
    margin: 64px 0 0 64px;
    list-style: none;
  }

  li {
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const FadedBG = styled(FadedLogoSVG)`
  position: absolute;
  height: 100%;
  z-index: 1;
  bottom: 0;
  right: 0;
`

const Icon = styled.img`
  width: 50px;
  margin: 0 10px;
`

const Header = (): JSX.Element => {
  // HACK: since useWindowScrollPosition cannot compile on Node and is replaced,
  // we pass it a fallback dummy object
  // const position =
  //   typeof useWindowScrollPosition === "function"
  //     ? useWindowScrollPosition()
  //     : { x: 0, y: 0 }
  // const scrolled = position.y !== 0

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <LogoWrapper>
            <Link to="/">
              <StyledLogo src={Logo} />
            </Link>
          </LogoWrapper>
          <Content>
            <p>
              I'm a Web developer specialized in UI and front-end, experienced
              with the whole stack. My current tools of choice are React, Node,
              and GraphQL.
            </p>

            <ul>
              <li>
                Web dev <Icon src={iconWebDev} />
              </li>
              <li>
                Sports photographer <Icon src={iconPhotography} />
              </li>
              <li>
                Eternal <Icon src={iconHeart} />
                for design
              </li>
            </ul>
          </Content>
          <FadedBG />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
