import styled, { keyframes } from 'styled-components'

const DragImgWrapperAnitmation = keyframes`
  from {
    margin-bottom: 6px;
    }
  100% {
    margin-bottom: 14px;
  }
`

export const DragImgWrapper = styled.div`
  align-items: flex-end;
  bottom: 11vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transform: scale(.65)
`

export const DragArrowUpImg = styled.img`
  animation: ${DragImgWrapperAnitmation} 1s alternate infinite;
  margin-bottom: 6px;
  position: absolute;
`

export const DragBackgroundImg = styled.img``
