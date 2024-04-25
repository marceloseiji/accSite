import styled from 'styled-components'
import { textSize, colors } from 'styles/variables'

export const Nav = styled.nav`
  bottom: 30px;
  left: 0;
  position: fixed;
  width: 100%;
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
`

export const Link = styled.a.attrs<{ isActive?: boolean }>(props => ({
  isActive: props.isActive || false
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

  background-color: ${props => props.isActive && colors.primary};
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
