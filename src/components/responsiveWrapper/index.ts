import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

const ResponsiveWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 16px;
  width: 100%;

  @media ${deviceSize.tablet} {
    margin: 0 32px;
    width: 768px;
  }

  @media ${deviceSize.laptop} {
    width: 1024px;
  }
`

export default ResponsiveWrapper
