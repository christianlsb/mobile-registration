import { Link } from "react-router-dom"
import styled from "styled-components"

import { themes } from "../../styles/theme"

export const Button = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;
  justify-content: center;
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize.md};
  line-height: 28px;
  color: ${themes.colors.white};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  margin-bottom: 15px;
`
