import styled, { css } from 'styled-components'
type TagProps = {
  backgroundColor: string
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 32px;
`

export const Tag = styled.div<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #778899 0%, #172765 100%);
  border-radius: 18px;
  color: white;

  ${({ backgroundColor }) =>
    css`
      background: linear-gradient(135deg, ${backgroundColor} 0%, #172765 100%);
    `}
`

export const Description = styled.div`
  flex-direction: column;
  margin-left: 16px;
  font-size: 14px;

  span {
    display: flex;
    font-size: 14px;
    color: #172765;
    img {
      margin-left: 10px;
    }
  }
  p {
    color: #69d531;
  }
`
