import styled from "styled-components"

import { themes } from "../../styles/theme"

export const H1 = styled.h1`
  font-weight: ${themes.fontSize.normal};
  font-size: ${themes.fontSize["4xl"]};
  line-height: 40px;
  text-align: center;
  color: ${themes.colors.white};
  margin: 50px;

  ${props =>
    props.isMargin &&
    `
    margin-bottom: 83px;
  `}
`
