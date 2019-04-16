import React from "react"
import styled from "styled-components"
import Container from "./Container"

const FooterWrapper = styled.footer`
  margin-top: 32px;
  padding: 32px 0;
  background: #171f26;
`

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <Container>footer</Container>
  </FooterWrapper>
)

export default Footer
