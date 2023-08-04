import { DragImgWrapper, DragArrowUpImg, DragBackgroundImg } from './style'
import getImageHash from 'utils/getImageHash'
import DragArrowsBackground from 'assets/icons/DragArrowsBackground.svg'
import DragUpArrows from 'assets/icons/DragUpArrows.svg'

const DragIcon = () => {
  return (
    <DragImgWrapper>
      <DragArrowUpImg src={getImageHash(DragUpArrows)} />
      <DragBackgroundImg src={getImageHash(DragArrowsBackground)} />
    </DragImgWrapper>
  )
}

export default DragIcon
