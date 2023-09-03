import styled from "styled-components";
import { colors, textSize } from 'styles/variables'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 38vh 40px 0 32px;
`

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bold;
  font-size: ${textSize.large};
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 10px;
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: bolder;
  font-size: ${textSize.small};
  padding-top: 8px;
  text-align: center;
  text-shadow: ${colors.blackTextShadow} 1px 0 10px;
`

export const ButtonsWrapper = styled.div`
  align-self: center;
  display: flex;
  margin-top: 10px;
  gap: 10px
`