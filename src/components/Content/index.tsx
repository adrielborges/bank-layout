import refreshImg from '../../assets/Refresh.svg'
import shieldImg from '../../assets/Shield.svg'
import eyeOffImg from '../../assets/eye-off.svg'
import CaretDown from '../../assets/CaretDown.svg'

import * as S from './styles'

const Content = () => {
  return (
    <S.Wrapper>
      <S.BalancePrint>
        <strong>Saldo Bancário</strong>
        <S.Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99951 7.5V3.75H17.9995V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9995 14.25H5.99951V20.625H17.9995V14.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99951 16.5H2.62451V9C2.62451 8.17157 3.35205 7.5 4.24951 7.5H19.7495C20.647 7.5 21.3745 8.17157 21.3745 9V16.5H17.9995"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z"
              fill="currentColor"
            />
          </svg>
        </S.Button>
        <S.Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 21H5.24927C5.05036 21 4.85959 20.921 4.71894 20.7803C4.57828 20.6397 4.49927 20.4489 4.49927 20.25V3.75C4.49927 3.55109 4.57828 3.36032 4.71894 3.21967C4.85959 3.07902 5.05036 3 5.24927 3H14.25L19.5 8.25V20.25C19.5 20.3485 19.4806 20.446 19.4429 20.537C19.4052 20.628 19.35 20.7107 19.2803 20.7803C19.2107 20.85 19.128 20.9052 19.037 20.9429C18.946 20.9806 18.8485 21 18.75 21Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 3V8.25H19.5007"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.375 14.625L12 17.25L14.625 14.625"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11.25V17.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Button>
        <S.Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9766 6.87209L8.52307 10.3779"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.52307 13.622L13.9766 17.1279"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Button>
      </S.BalancePrint>
      <S.BalanceWrapper>
        <S.BalanceDate>
          <div>
            <span>Data do Saldo</span>
            <p>07/12/2020</p>
          </div>
          <S.IconRightContainer>
            <img src={CaretDown} alt="" />
          </S.IconRightContainer>
        </S.BalanceDate>
        <S.BalanceRefresh>
          <span>Saldo atualizado às 16:48</span>
          <a href="/#">
            <img src={refreshImg} alt="" />
          </a>
        </S.BalanceRefresh>
        <S.Balance>
          <img src={shieldImg} alt="" />
          <div>
            <span>Saldo Disponivel</span>
            <p>R$40.000,00</p>
          </div>
          <S.IconRightContainer>
            <img src={eyeOffImg} alt="" />
          </S.IconRightContainer>
        </S.Balance>
      </S.BalanceWrapper>
    </S.Wrapper>
  )
}

export default Content
