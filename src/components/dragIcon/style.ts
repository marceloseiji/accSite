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
  align-items: flex-end;
  bottom: 11vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transform: scale(.8)
`

export const DragArrowUpImg = styled.img`
  animation: ${DragImgWrapperAnitmation} 1s alternate infinite;
  margin-bottom: 4px;
  position: absolute;
`

export const DragBackgroundImg = styled.img``
