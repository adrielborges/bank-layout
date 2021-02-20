import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-left: 2px;
  background: #f9f9f9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 16px;
  }
  ul li {
    display: flex;
  }

  ul li .items {
    display: flex;
    flex-direction: row;

    div {
    }
  }
`

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 32px;
`

export const ItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(89.96deg, #622ee5 0.06%, #172765 99.94%);
  border-radius: 18px;
  color: white;
`

export const ItemTag2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #778899 0%, #172765 100%);
  border-radius: 18px;
  color: white;
`

export const ItemTag3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #ff354e 0%, #172765 100%);
  border-radius: 18px;
  color: white;
`

export const ItemDescription = styled.div`
  flex-direction: column;
  margin-left: 16px;
  span {
    display: flex;
    font-size: 14px;
    color: #172765;
    img {
      margin-left: 16px;
    }
  }
  p {
    color: #69d531;
  }
`

export const ShortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-left: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #e5e4e2 100%);
  border-radius: 18px;
  border: none;
  :hover {
    cursor: pointer;
  }
`
