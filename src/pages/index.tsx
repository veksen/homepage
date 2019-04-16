import React from "react"
import styled from "styled-components"

import Container from "../components/Container"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Container>
      <Title>Title</Title>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ad odio
        aliquam, quod quae id perferendis esse fugiat incidunt nam
        necessitatibus similique accusamus illo maxime reiciendis minima amet
        doloremque vel.
      </p>
    </Container>

    <Footer />
  </Layout>
)

export default IndexPage
