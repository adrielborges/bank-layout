import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    height: 22px;
    font-size: 14px;
    padding: 4px 8px;

    opacity: 0;
    transition: opacity 0.4s;

    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 5px);
    color: #312e38;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 16px;
      margin-right: 4px;
    }

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
