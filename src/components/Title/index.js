import PropTypes from "prop-types"
import React from "react"

import * as S from "./styles"
export default function Title({ children, isMargin }) {
  return (
    <div>
      <S.H1 isMargin={isMargin}>{children}</S.H1>
    </div>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  isMargin: PropTypes.bool
}
