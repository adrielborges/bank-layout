import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 46px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #f9f9f9;
`
export const OpenBox = styled.button`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: #622ee5;
  margin-left: 28px;
  :hover {
    cursor: pointer;
  }
  img {
    width: 24px;
  }
`
