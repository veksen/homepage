import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import iconHeart from "../images/icon-heart.png"
import iconPhotography from "../images/icon-photography.png"
import iconWebDev from "../images/icon-webdev.png"
import Logo from "../images/logo.png"
import Container from "./Container"

const HeaderWrapper = styled.header``

const HeaderInner = styled.div`
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
`

const StyledLogo = styled.img`
  width: 274px;
`

const Content = styled.div`
  margin-top: 100px;
  font-size: 40px;
  line-height: 1;

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
                Web Dev <Icon src={iconWebDev} />
              </li>
              <li>
                Sports Photographer <Icon src={iconPhotography} />
              </li>
              <li>
                Eternal <Icon src={iconHeart} />
                for Design
              </li>
            </ul>
          </Content>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
