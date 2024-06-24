import styled from 'styled-components'
import { colors, textSize, deviceSize } from 'styles/variables'

export const MainSection = styled.main`
  width: 100%;
`

export const Title = styled.div`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: ${textSize.large};
  margin-bottom: 24px;
  text-align: left;
`

export const Paragraph = styled.p`
  color: ${colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: ${textSize.tiny};
  padding-top: 16px;
  text-align: left;

  @media ${deviceSize.tablet} {
    font-size: ${textSize.small};
  }
`

export const PsicanaliseWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  @media ${deviceSize.tablet} {
    flex-direction: row;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${deviceSize.tablet} {
    flex: 1;
    margin-right: 64px;
  }
`

export const AdditionalTextWrapperDesktop = styled.div`
  display: none;
  @media ${deviceSize.tablet} {
    display: block;
  }
`

export const AdditionalTextWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  @media ${deviceSize.tablet} {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  width: 250px;
  height: 250px;
  margin: auto;
  @media ${deviceSize.tablet} {
    padding-top: 0;
    flex: 1;
    height: 340px;
  }
  @media ${deviceSize.laptop} {
    padding-top: 0;
    flex: 1;
    height: 460px;
  }
`

export const SectionImage = styled.img<{ width: string; height: string }>`
  border: 1px solid #${colors.offWhite}90;
  border-radius: 3px;
  display: initial;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  object-fit: cover;

  @media ${deviceSize.tablet} {
    border: none;
    border-radius: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
  }
`
