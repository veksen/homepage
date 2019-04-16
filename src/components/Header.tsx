import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../images/lodash.svg"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background: #171f26;
  padding: 24px;
  height: 100px;
  position: fixed;
  top: 0;
  left: 320px;
  right: 0;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 2px solid #293845;
`

const StyledLogo = styled(Logo)`
  width: 58px;
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
      <LogoWrapper>
        <Link to="/">
          <StyledLogo />
        </Link>
      </LogoWrapper>
    </HeaderWrapper>
  )
}

export default Header
