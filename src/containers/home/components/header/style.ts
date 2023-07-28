import styled from 'styled-components'
import { textSize } from 'styles/variables'

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
`

export const Link = styled.a`
  font-family: 'Lato';
  font-size: ${textSize.small};
  font-weight: normal;
  text-decoration: none;
`
