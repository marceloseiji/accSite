import WhatsAppIconFlat from 'assets/icons/WhatsappIconFlat'
import { Button, ButtonText } from './style'

const ConsultButton = () => {
  return (
    <>
      <Button type="button">
        <WhatsAppIconFlat size={24} />
        <ButtonText>AGENDE SUA CONSULTA!</ButtonText>
      </Button>
    </>
  )
}

export default ConsultButton
