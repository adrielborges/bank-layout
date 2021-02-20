import styled, { css } from 'styled-components'

type Props = {
  active: boolean
  disable: boolean
}
export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 48px;
  img {
    width: 24px;
    height: 24px;
  }

  :hover {
    display: flex;
    flex-direction: column;
    background: #622ee5;
    justify-content: space-between;
    cursor: pointer;
    &::before {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: #f9f9f9;
      border-radius: 0 0 5px 0;
    }

    &::after {
      content: '';
      height: 4px;
      width: 46px;
      top: 0;
      left: 0;
      background: #f9f9f9;
      border-radius: 0 5px 0 0;
    }
  }

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
      background: #622ee5;
      justify-content: space-between;
      color: #fff;
      &::before {
        content: '';
        height: 4px;
        width: 46px;
        top: 0;
        left: 0;
        background: #f9f9f9;
        border-radius: 0 0 5px 0;
      }

      &::after {
        content: '';
        height: 4px;
        width: 46px;
        top: 0;
        left: 0;
        background: #f9f9f9;
        border-radius: 0 5px 0 0;
      }
    `}

  ${({ disable }) =>
    disable &&
    css`
      :hover {
        background: #f9f9f9;
        cursor: not-allowed;
      }
    `}
`
