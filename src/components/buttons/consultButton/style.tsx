import styled from 'styled-components'
import { textSize, colors, deviceSize } from 'styles/variables'

export const Button = styled.button`
  border: 1px solid #${colors.offWhite};
  border-radius: 3px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${colors.secondary};
  cursor: pointer;
  transition: 0.2s ease;
  width: -webkit-fill-available;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 75px;
  margin: 0 12px;

  &:hover {
    background-color: ${colors.secondary}99;
  }

  @media ${deviceSize.tablet} {
    position: static;
    width: auto;
    margin: 0;
  }
`

export const ButtonText = styled.span`
  margin-left: 8px;
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: ${textSize.tiny};
`

export const MainButtonWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: block;
  @media ${deviceSize.tablet} {
    display: none;
  }
`

export const HomeButtonWrapper = styled.div`
  display: none;
  @media ${deviceSize.tablet} {
    display: block;
  }
`
