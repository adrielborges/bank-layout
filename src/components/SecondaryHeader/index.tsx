import PlusIcon from '../../assets/Plus.svg'
import TagIcon from '../../assets/Tag.svg'
import * as S from './styles'
import HeaderItem from '../HeaderItem'

const SecundaryHeader = () => {
  return (
    <S.Wrapper>
      <S.ShortButton>
        <img src={TagIcon} alt="" />
      </S.ShortButton>
      <S.ShortButton>
        <img src={PlusIcon} alt="" />
      </S.ShortButton>

      <HeaderItem
        title={'Principal'}
        value={'10.000'}
        backgroundColor={'#622ee5'}
      />
      <HeaderItem
        title={'Aluguel'}
        value={'1.600'}
        backgroundColor={'#778899'}
      />
      <HeaderItem
        title={'Alimentação'}
        value={'450'}
        backgroundColor={'#ff354e'}
      />
    </S.Wrapper>
  )
}

export default SecundaryHeader
