import React from "react"
import styled, { keyframes } from "styled-components"

import Contact from "../components/Contact"
import Container from "../components/Container"
import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Main = styled.main`
  display: flex;
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
`

const Content = styled.div`
  flex: 1 1 auto;
  margin: 64px 0;
`

const Block = styled.div`
  background: #34353b;
  padding: 64px;

  & + & {
    margin-top: 64px;
  }
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit harum
            alias illum, facere, omnis voluptas reprehenderit soluta voluptates
            inventore cumque id maiores ab iure minima hic eos magnam blanditiis
            ad?
          </Block>
          <Block>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit harum
            alias illum, facere, omnis voluptas reprehenderit soluta voluptates
            inventore cumque id maiores ab iure minima hic eos magnam blanditiis
            ad?
          </Block>
        </Content>
      </Main>
    </Container>
  </Layout>
)

export default IndexPage
