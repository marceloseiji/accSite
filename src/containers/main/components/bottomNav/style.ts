import styled from 'styled-components'
import { textSize, colors, deviceSize } from 'styles/variables'

export const Nav = styled.nav<{ $isScrollDown: boolean }>`
  bottom: 30px;
  left: 0;
  position: fixed;
  width: 100%;
  height: fit-content;
  z-index: 1;
  transition: 0.5s ease;
  background-color: ${colors.primaryStrong};
  border-bottom: 1px solid #${colors.offWhite}80;

  @media ${deviceSize.tablet} {
    top: 0;
    height: 72px;
    background-color: ${({ $isScrollDown }) =>
      $isScrollDown ? `${colors.primary}70` : undefined};
  }
`

export const NavWrapper = styled.div`
  justify-content: center;
  display: flex;
  height: 100%;

  @media ${deviceSize.tablet} {
    justify-content: left;
  }
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media ${deviceSize.tablet} {
    justify-content: left;
  }
`

export const Link = styled.a.attrs<{ $isactive?: boolean }>(props => ({
  $isactive: props.$isactive
}))`
  border-radius: 4px;
  color: ${colors.white};
  font-family: 'Kumbh Sans';
  font-size: ${textSize.small};
  line-height: ${textSize.small};
  font-weight: 300;
  text-decoration: none;
  padding: 8px 6px;
  transition: 0.2s ease;

  background-color: ${({ $isactive }) =>
    $isactive ? colors.primary : undefined};
`

// const Input = styled.input.attrs<{ $size?: string }>(props => ({
//   // we can define static props
//   type: 'text',

//   // or we can define dynamic ones
//   $size: props.$size || '1em'
// }))`
//   color: #bf4f74;
//   font-size: 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${props => props.$size};
//   padding: ${props => props.$size};
// `
