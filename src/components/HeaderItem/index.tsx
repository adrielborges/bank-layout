import * as S from './styles'
import EyeIcon from '../../assets/eye.svg'

type HeaderItemProps = {
  title: string
  value: string
  backgroundColor: string
}

const HeaderItem = ({ title, value, backgroundColor }: HeaderItemProps) => {
  return (
    <S.Wrapper>
      <S.Tag backgroundColor={backgroundColor}>
        {title.substr(0, 1).toUpperCase()}
      </S.Tag>
      <S.Description>
        <span>
          {title}
          <a href="#">
            <img src={EyeIcon} alt="hidden balace" />
          </a>
        </span>
        <p>R${value},00</p>
      </S.Description>
    </S.Wrapper>
  )
}

export default HeaderItem
