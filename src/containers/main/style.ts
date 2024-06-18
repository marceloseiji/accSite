import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

type SectionProps = {
  $url?: string
  $backgroundcolor?: string
  $screenheight?: boolean
}

export const MainSection = styled.main`
  width: 100%;
`

export const Section = styled.section<SectionProps>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || ''};
  height: ${({ $screenheight }) => ($screenheight ? '100%' : 'initial')};
  position: relative;
  width: 100%;

  @media ${deviceSize.tablet} {
    background-color: ${({ $backgroundcolor }) => $backgroundcolor || ''};
    background-position: right;
    background-size: initial;
    background-image: none;
  }
`
