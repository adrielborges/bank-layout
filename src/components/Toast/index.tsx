import React from 'react'

import CopySimple from '../../assets/CopySimple.svg'

import * as S from './styles'

interface TooltipProps {
  title: string
  className?: string
}

const Toast: React.FC<TooltipProps> = ({ title, children, className }) => (
  <S.Wrapper className={className}>
    {children}
    <span>
      <img src={CopySimple} alt="" />
      {title}
    </span>
  </S.Wrapper>
)

export default Toast
