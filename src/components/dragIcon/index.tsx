import { IconWrapper } from './style'
import getImageHash from 'utils/getImageHash'
import DragUpArrows from 'assets/icons/DragUpArrows.svg'

const DragIcon = () => {
  return (
    <IconWrapper>
      <img src={getImageHash(DragUpArrows)} />
    </IconWrapper>
  )
}

export default DragIcon
