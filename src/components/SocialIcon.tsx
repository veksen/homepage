import React from "react"
import styled from "styled-components"

interface SocialIconProps {
  icon: JSX.Element
}

export const SocialIconWrapper = styled.svg`
  width: 44px;
  height: 44px;
`

const SocialIcon = ({ icon, ...restProps }: SocialIconProps): JSX.Element => {
  return (
    <SocialIconWrapper {...restProps} viewBox="0 0 512 512">
      {icon}
    </SocialIconWrapper>
  )
}

export default SocialIcon
