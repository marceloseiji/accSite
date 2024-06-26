import WhatsAppIconFlat from 'assets/icons/WhatsappIconFlat'
import { Button, ButtonText } from './style'

const ConsultButton = () => {
  return (
    <>
      <Button
        type="button"
        href="https://wa.me/554199229920?text=Gostaria%20de%20saber%20mais%20sobre%20a%20clínica."
        target="_blank"
      >
        <WhatsAppIconFlat size={24} />
        <ButtonText>AGENDE SUA CONSULTA!</ButtonText>
      </Button>
    </>
  )
}

export default ConsultButton
