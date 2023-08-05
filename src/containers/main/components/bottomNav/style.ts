import styled from 'styled-components'
import { textSize, colors } from 'styles/variables'

export const Nav = styled.nav`
  bottom: 40px;
  left: 0;
  position: fixed;
  width: 100%;
`

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const Link = styled.a`
  color: ${colors.white};
  font-family: 'Lato';
  font-size: ${textSize.small};
  font-weight: bolder;
  text-decoration: none;
`
