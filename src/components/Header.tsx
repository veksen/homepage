import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
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

const HeaderInner = styled.div<{ quickListHeight: number }>`
  position: relative;
  padding-top: 50px;
  padding-bottom: 64px;
  display: flex;
  background: #34353b;

  @media screen and (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: ${props => props.quickListHeight}px !important;
    flex-direction: column;
  }
`

const LogoWrapper = styled.div`
  width: 274px;
  flex: 0 0 274px;
  position: relative;
  left: -50px;
  width: 274px;
  z-index: 2;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) ${slidein};

  @media screen and (max-width: 768px) {
    left: 0;
    margin-left: calc(0.09489 * -85px);
    width: 85px;
    flex-basis: auto;
  }
`

const StyledLogo = styled.img`
  width: 274px;
`

const Content = styled.div`
  opacity: 0;
  position: relative;
  margin-top: 64px;
  padding-right: 32px;
  font-size: 40px;
  line-height: 1;
  z-index: 2;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s forwards
    ${slidein};

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 32px;
    padding-right: 0;
  }

  p {
    margin: 0;
  }
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin: 0 0 8px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const QuickList = styled.ul`
  margin: 64px 0 0 64px;
  list-style: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    margin: 32px 0 0 0;
    background: #fff;
    color: #34353b;
    padding: 32px;
    display: inline-flex;
    flex-direction: column;

    li + li {
      @media screen and (max-width: 768px) {
        margin-top: 8px;
      }
    }
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

  @media screen and (max-width: 768px) {
    width: 25px;
    margin: 0 5px;
  }
`

const Header = (): JSX.Element => {
  // HACK: since useWindowScrollPosition cannot compile on Node and is replaced,
  // we pass it a fallback dummy object
  // const position =
  //   typeof useWindowScrollPosition === "function"
  //     ? useWindowScrollPosition()
  //     : { x: 0, y: 0 }
  // const scrolled = position.y !== 0

  const [quickListHeight, setQuickListHeight] = useState(0)
  const quickListEl = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!quickListEl.current) {
      return
    }

    const handleResize = () =>
      setQuickListHeight((quickListEl.current as HTMLElement).clientHeight)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner quickListHeight={quickListHeight}>
          <LogoWrapper>
            <Link to="/">
              <StyledLogo src={Logo} />
            </Link>
          </LogoWrapper>
          <Content>
            <Title>
              My name is <b>Jean-Philippe Sirois</b>,
            </Title>

            <p>
              I'm a Web developer specialized in UI and front-end, experienced
              with the whole stack. My current tools of choice are React, Node,
              and GraphQL.
            </p>

            <QuickList ref={quickListEl}>
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
            </QuickList>
          </Content>
          <FadedBG />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
