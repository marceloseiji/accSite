import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

const ResponsiveWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 0 24px;
  z-index: 1;

  @media ${deviceSize.tablet} {
    margin: auto;
    width: 768px;
  }

  @media ${deviceSize.laptop} {
    width: 1024px;
  }

  @media ${deviceSize.desktop} {
    width: 1264px;
  }
`

export default ResponsiveWrapper
