import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from "../../components/Card/Card"
import { Modal } from '../../components/Modal/Modal'

export const HomePage = () => {
  return (
    <>
      <Modal 
        open={true} 
        title="Salvar Pin"
        controls={[
          {
            label: 'Criar Pasta',
            variant: 'primary',
            onClick: () => {
              console.log('Clicou!')
            }
          },
          {
            label: 'Fechar',
            variant: 'secondary',
            onClick: () => {
              console.log('Clicou em fechar!')
            }
          }
        ]}
      >
        <p>Olá a todos</p>
      </Modal>
      <Container fluid>
        <Row>
          <Col xs="12" md="2" ><Card title="Matemática" image="https://picsum.photos/200/300?53" total = {0} /></Col>
          <Col xs="12" md="2" ><Card title="Trigonometria" image="https://picsum.photos/200/300?13" total = {0} /></Col>
          <Col xs="12" md="2" ><Card title="Matemática" image="https://picsum.photos/200/300?53" total = {0} /></Col>
          <Col xs="12" md="2" ><Card title="Matemática" image="https://picsum.photos/200/300?53" total = {0} /></Col>

        </Row>
      </Container>
    </>
  )
}