import styled from 'styled-components'

export const SectionDivider = styled.div<{ color: string }>`
  height: 45px;
  background: ${props =>
    `linear-gradient(360deg, ${props.color} 12%, rgba(0, 0, 0, 0) 100%)`};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
