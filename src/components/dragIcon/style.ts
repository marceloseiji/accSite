import styled, { keyframes } from 'styled-components'

const DragImgWrapperAnitmation = keyframes`
  from {
    margin-bottom: 6px;
    }
  100% {
    margin-bottom: 14px;
  }
`

export const DragImgWrapper = styled.div<{isvisble: boolean}>`
  align-items: flex-end;
  bottom: 11vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: .3s ease;
  transform: ${props => props.isvisble ? 'scale(.65)' : 'scale(0)'};
  opacity: ${props => props.isvisble ? 1 : 0};
`

export const DragArrowUpImg = styled.img`
  animation: ${DragImgWrapperAnitmation} 1s alternate infinite;
  margin-bottom: 6px;
  position: absolute;
`

export const DragBackgroundImg = styled.img``
