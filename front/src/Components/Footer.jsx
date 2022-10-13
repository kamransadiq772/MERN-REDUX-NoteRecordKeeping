import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <footer style={{width:'100%', position:'relative' , display:'flex', justifyContent:'center', bottom:0}} >
        <Container>
            <Row>
                <Col className='text-center py-3' >
                  Copyright &copy; Note Zipper
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer