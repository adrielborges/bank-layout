import { createGlobalStyle } from 'styled-components'
import { LatoFont } from './fonts/fonts'

const GlobalStyle = createGlobalStyle`
  ${LatoFont}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family:'Lato', sans-serif;
    color: #172765;
  }
`

export default GlobalStyle
