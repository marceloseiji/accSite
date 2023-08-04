import { IconWrapper } from './style'
import getImageHash from 'utils/getImageHash'
import DragUpArrows from 'assets/icons/DragUpArrows.svg'
import Squirrel from 'assets/icons/kindpng_1131539.png'

const DragIcon = () => {
  return (
    <IconWrapper>
      <img src={getImageHash(DragUpArrows)} />
    </IconWrapper>
  )
}

export default DragIcon
