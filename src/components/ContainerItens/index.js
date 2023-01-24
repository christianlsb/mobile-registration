import React from 'react';
import * as S from "./styles"
export default function ContainerItens({children, isBlack}) {
 return (
   <div>
        <S.Container isBlack={isBlack}>{children}</S.Container>
   </div>
 );
}