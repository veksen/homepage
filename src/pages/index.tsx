import React from "react"
import styled, { keyframes } from "styled-components"

import Contact from "../components/Contact"
import Container from "../components/Container"
import Header from "../components/Header"
import Layout from "../components/Layout"
import PhotoGallery from "../components/PhotoGallery"
import SEO from "../components/SEO"

const Main = styled.main`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

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

const Sidebar = styled.aside`
  opacity: 0;
  position: relative;
  flex: 0 0 291px;
  margin-top: -64px;
  padding-left: 50px;
  display: flex;
  align-items: flex-start;
  z-index: 5;
  animation: 0.75s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s forwards ${slidein};

  @media screen and (max-width: 768px) {
    margin-top: 64px;
    padding-left: 0;
    flex-basis: auto;
  }
`

const Content = styled.div`
  flex: 1 1 auto;
  margin: 64px 0;
`

const Block = styled.div`
  background: #34353b;
  padding: 48px 64px;

  @media screen and (max-width: 768px) {
    padding: 32px;
  }

  & + & {
    margin-top: 64px;
  }
`

const BlockTitle = styled.h2`
  margin: 0 0 32px;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -1px;
`

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Header />

    <Container>
      <Main>
        <Sidebar>
          <Contact />
        </Sidebar>
        <Content>
          <Block>
            <BlockTitle>Photography</BlockTitle>
            <PhotoGallery />
          </Block>
        </Content>
      </Main>
    </Container>
  </Layout>
)

export default IndexPage
