import homeImg from '../../assets/HouseLine.svg'
import chartImg from '../../assets/ChartPieSlice.svg'
import chartLineUpImg from '../../assets/ChartLineUp.svg'
import moneyImg from '../../assets/Money.svg'
import handsImg from '../../assets/Handshake.svg'
import pixImg from '../../assets/Group.svg'
import credCardImg from '../../assets/CreditCard.svg'
import receiptImg from '../../assets/Receipt.svg'
import wrenchImg from '../../assets/Wrench.svg'
import questionImg from '../../assets/Question.svg'
import CaretRight from '../../assets/CaretRight.svg'

import * as S from './styles'
import NavIcon from '../NavIcon'

const SideMenu = () => {
  return (
    <S.Wrapper>
      <NavIcon icon={homeImg} />
      <NavIcon icon={chartImg} active />
      <NavIcon icon={chartLineUpImg} />
      <NavIcon icon={moneyImg} />
      <NavIcon icon={handsImg} />
      <NavIcon icon={pixImg} disable />
      <NavIcon icon={credCardImg} disable />
      <NavIcon icon={receiptImg} />
      <NavIcon icon={wrenchImg} />
      <NavIcon icon={questionImg} />
      <S.OpenBox>
        <img src={CaretRight} alt="" />
      </S.OpenBox>
    </S.Wrapper>
  )
}

export default SideMenu
