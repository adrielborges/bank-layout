import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 13px;
`

export const BalancePrint = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 20px;
    font-weight: 600;
    color: #172765;
  }
`
export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: 1px solid #622ee5;
  color: #622ee5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px;
  background: none;
  margin-left: 15px;
  :hover {
    background: linear-gradient(90deg, #622ee5 0%, #a683ff 100%);
    border: none;
    color: #fff;
    transition: 0.5s;
  }
`

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 8px;
`

export const BalanceDate = styled.div`
  margin-top: 45px;
  padding: 6px 12px 5px 16px;
  display: flex;
  width: 280px;
  height: 48px;
  background-color: #f9f9f9;
  border-radius: 5px 5px 0 0;
  border: 1px solid #e5e4e2;
  border-bottom: 2px solid #622ee5;
  align-items: center;
  img {
    width: 24px;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    font-size: 12px;
    color: #622ee5;
    p {
      margin-top: 3px;
      font-size: 16px;
      color: #172765;
    }
  }
`

export const BalanceRefresh = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 16px;
  img {
    margin-left: 10px;
  }
`

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px 5px 16px;
  margin-top: 17px;
  width: 280px;
  background: #f9f9f9;
  border: 0.5px solid #e5e4e2;
  border-bottom: 1px solid #172765;
  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  img {
    width: 24px;
    height: 24px;
  }
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  span {
    font-size: 12px;
    color: #778899;
  }

  p {
    font-size: 16px;
    color: #69d531;
  }
`

export const IconRightContainer = styled.button`
  border: none;
  background-color: #f9f9f9;
  position: relative;
  cursor: pointer;
  right: 0;
`
