import { useEffect, useState } from 'react'
import { DragImgWrapper, DragArrowUpImg, DragBackgroundImg } from './style'
import getImageHash from 'utils/getImageHash'
import DragArrowsBackground from 'assets/icons/DragArrowsBackground.svg'
import DragUpArrows from 'assets/icons/DragUpArrows.svg'

const DragIcon = () => {
  const [isVisible, setIsVisible] = useState(true)

  const scrollLiestener = () => {
    let heigthToHide = 300
    const windowScroll = window.scrollY

    if (windowScroll > heigthToHide) {
      isVisible && setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollLiestener, true)
    return () => window.removeEventListener('scroll', scrollLiestener)
  }, [])

  return (
    <DragImgWrapper isvisible={isVisible.toString()}>
      <DragArrowUpImg src={getImageHash(DragUpArrows)} />
      <DragBackgroundImg src={getImageHash(DragArrowsBackground)} />
    </DragImgWrapper>
  )
}

export default DragIcon
