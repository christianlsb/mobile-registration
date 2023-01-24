import React from 'react';
import * as S from "./styles"

export default function Button({children, ...props}) {
 return (
   <div>
        <S.Button {...props}>{children}</S.Button>
   </div>
 );
}