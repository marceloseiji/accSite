import { createGlobalStyle } from 'styled-components'
import LatoThin from 'assets/fonts/Lato-Thin.ttf'
import LatoLight from 'assets/fonts/Lato-Light.ttf'
import LatoRegular from 'assets/fonts/Lato-Regular.ttf'
import LatoBold from 'assets/fonts/Lato-Bold.ttf'
import Julius from 'assets/fonts/JuliusSansOne-Regular.ttf'

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${LatoThin}) format("truetype");
    font-weight: lighter;
  }
  @font-face {
    font-family: Lato;
    src: url(${LatoLight}) format("truetype");
    font-weight: normal;
  }
  @font-face {
    font-family: Lato;
    src: ${LatoRegular} format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: Lato;
    src: ${LatoBold} format('truetype');
    font-weight: bolder;
  }
  @font-face {
    font-family: Julius;
    src: ${Julius};
    font-weight: normal;
  }
`
