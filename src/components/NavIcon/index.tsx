import * as S from './styles'

type NavMenuProps = {
  icon: string
  active?: boolean
  disable?: boolean
}

const NavIcon = ({ icon, active = false, disable = false }: NavMenuProps) => {
  return (
    <S.Wrapper active={active} disable={disable}>
      <img src={icon} alt="" />
    </S.Wrapper>
  )
}

export default NavIcon
