import styled from 'styled-components'
import { deviceSize } from './variables'

export const ShowOnMobile = styled.div`
  display: block;

  @media ${deviceSize.tablet} {
    display: none;
  }
`
