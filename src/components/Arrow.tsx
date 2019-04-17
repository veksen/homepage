import React from "react"
import styled from "styled-components"

interface ArrowProps {
  direction?: "left" | "right" | "up" | "down"
}

export const ArrowWrapper = styled.svg``

const Arrow = ({ direction }: ArrowProps): JSX.Element => {
  const style = direction === "left" ? { transform: "scaleX(-1)" } : {}

  if (direction === "up" || direction === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240.823 240.823"
        style={{ ...style }}
      >
        <path d="M129.006 183.189L237.267 74.892c4.74-4.752 4.74-12.451 0-17.215-4.74-4.752-12.439-4.752-17.179 0l-99.67 99.707-99.672-99.695c-4.74-4.752-12.439-4.752-17.19 0-4.74 4.752-4.74 12.463 0 17.215L111.815 183.2c4.691 4.68 12.511 4.68 17.19-.012z" />
      </svg>
    )
  }

  return (
    <ArrowWrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240.823 240.823"
      style={{ ...style }}
    >
      <path d="M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z" />
    </ArrowWrapper>
  )
}

export default Arrow
