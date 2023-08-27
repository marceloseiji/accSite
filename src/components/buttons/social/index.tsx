import { Button } from './style'
import WhatsAppIcon from 'assets/icons/WhatsappIcon'
import InstagramIcon from 'assets/icons/InstagramIcon'
import React from 'react'

type SocialButton = {
  WhatsApp: () => JSX.Element
  Instagram: () => JSX.Element
}

const SocialButton: SocialButton = {
  WhatsApp: () => <></>,
  Instagram: () => <></>
}

const WhatsApp = () => (
  <Button
    aria-label="Contatar Amanda por WhatsApp"
    href="https://wa.me/554199229920?text=Gostaria%20de%20saber%20mais%20sobre%20a%20clínica."
  >
    <WhatsAppIcon />
  </Button>
)

const Instagram = () => (
  <Button
    aria-label="Instagram da Clínica"
    href="https://www.instagram.com/psi.amandaccorrea/"
  >
    <InstagramIcon />
  </Button>
)

SocialButton.WhatsApp = WhatsApp
SocialButton.Instagram = Instagram

export default SocialButton
