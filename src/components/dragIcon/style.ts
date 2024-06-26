import styled, { keyframes } from 'styled-components'
import { deviceSize } from 'styles/variables'

type DragImgWrapper = {
  isvisible: string
}

const DragImgWrapperAnitmation = keyframes`
  from {
    margin-bottom: 6px;
    }
  100% {
    margin-bottom: 14px;
  }
`

export const DragImgWrapper = styled.div<DragImgWrapper>`
  align-items: flex-end;
  bottom: 11vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: 0.3s ease;
  transform: ${({ isvisible }) =>
    isvisible === 'true' ? 'scale(.65)' : 'scale(0)'};
  opacity: ${({ isvisible }) => (isvisible === 'true' ? 1 : 0)};

  @media ${deviceSize.laptop} {
    display: none;
  }
`

export const DragArrowUpImg = styled.img`
  animation: ${DragImgWrapperAnitmation} 1s alternate infinite;
  margin-bottom: 6px;
  position: absolute;
`

export const DragBackgroundImg = styled.img``
