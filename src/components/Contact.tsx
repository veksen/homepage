import React from "react"
import styled from "styled-components"

const ContactWrapper = styled.div`
  padding: 26px 34px;
  background: #fff;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  color: #34353b;
  margin: 0;
`

const Contact = (): JSX.Element => {
  return (
    <ContactWrapper>
      <Title>Stalk me!</Title>
    </ContactWrapper>
  )
}

export default Contact
