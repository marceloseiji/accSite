import styled from 'styled-components'
import { colors } from 'styles/variables'

export const Image = styled.img<{ width: string; height: string }>`
  border: 1px solid #${colors.offWhite}90;
  border-radius: 3px;
  display: initial;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  object-fit: cover;
`

export default Image
