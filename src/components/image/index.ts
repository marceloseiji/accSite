import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

const Image = styled.img<{ width: string; height: string }>`
  height: ${props => `${props.height}`};
  width: ${props => `${props.width}`};
  object-fit: cover;

  @media ${deviceSize.laptop} {
  }
`

export default Image
