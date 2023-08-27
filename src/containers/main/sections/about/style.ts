import styled from "styled-components";
import { colors, textSize } from 'styles/variables'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18vh 40px 0 32px;
`

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: lighter;
  font-size: ${textSize.large};
  margin-bottom: 24px;
  text-align: right;
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Lato';
  font-weight: lighter;
  font-size: ${textSize.small};
  padding-top: 16px;
  text-align: right;
`