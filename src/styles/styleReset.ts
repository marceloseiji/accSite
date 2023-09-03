import { createGlobalStyle } from 'styled-components'

export const StyleReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100vh;
    scroll-behavior: smooth;
  }
`
