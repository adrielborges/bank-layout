import Header from '../../components/Header'
import SecondaryHeader from '../../components/SecondaryHeader'
import SideMenu from '../../components/SideMenu'
import Content from '../../components/Content'

import * as S from './styles'
function Home() {
  return (
    <S.Wrapper>
      <S.Content>
        <Header />
        <S.Main>
          <SideMenu />
          <S.Vertical>
            <SecondaryHeader />
            <Content />
          </S.Vertical>
        </S.Main>
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
