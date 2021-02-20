import styled from 'styled-components'
import Toast from '../Toast'

export const Wrapper = styled.div`
  height: 71px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 13px;
  justify-content: space-between;
`
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin: 0 8px;
  }
`

export const Logo = styled.img`
  height: 21px;
  width: 130px;
`

export const Division = styled.span`
  margin-left: 6.5px;
  margin-right: 19.5px;
  width: 1px;
  height: 25px;
  border: 1px solid #e5e4e2;
`

export const AccountSelect = styled.div`
  display: flex;
  flex-direction: column;
  select {
    width: 135px;
    font-size: 16px;
    border: none;
    margin-bottom: 5.5px;
    :hover {
      cursor: pointer;
    }
  }
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-left: 2px;
    color: #622ee5;
    font-size: 12px;
    margin-bottom: 2px;
  }
  img {
    margin-bottom: 2px;
  }
`

export const Balance = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  span {
    font-size: 12px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    img {
      margin-left: 10px;
    }
  }
  strong {
    font-weight: bold;
    color: #69d531;
  }
`

export const Search = styled.div`
  border: 1px solid rgba(119, 136, 153, 0.5);
  width: 160px;
  height: 30px;
  color: #778899;
  display: flex;
  align-items: center;
  padding: 2px 12px 2px 16px;
  border-radius: 5px;
  margin-right: 8px;
  input {
    &::placeholder {
      color: #778899;
    }
    outline: none;
    width: 100%;
    border: none;
  }
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const Error = styled(Toast)`
  span {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
    &::before {
      border-color: #fff transparent;
    }
  }
`
