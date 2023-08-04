import styled, { keyframes } from 'styled-components'

const DragImgWrapperAnitmation = keyframes`
  from {
    margin-bottom: 4px;
    }
  100% {
    margin-bottom: 8px;
  }
`

export const DragImgWrapper = styled.div`
  bottom: 12vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
`

export const DragArrowUpImg = styled.img`
  animation: ${DragImgWrapperAnitmation} 1s alternate infinite;
  margin-bottom: 4px;
  position: absolute;
`

export const DragBackgroundImg = styled.img``
