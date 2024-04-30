import styled from 'styled-components'
import { deviceSize } from 'styles/variables'

const Backdrop = styled.div`
  display: none;
  background: linear-gradient(
    90deg,
    rgba(67, 64, 62, 1) 50%,
    rgba(67, 64, 62, 0) 75%
  );
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media ${deviceSize.laptop} {
    display: inline-block;
  }
`

export default Backdrop
