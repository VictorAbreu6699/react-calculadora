import { useState } from 'react';
import './calculadora.css';
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import calculadoraService from './services/calculadora.service';

function Calculadora() {
  const [calcular, concatenarNumero, SOMA, MULTIPLICACAO, SUBTRACAO, DIVISAO] = calculadoraService()

  const [txtNumeros, setTxtNumeros] = useState('0')
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState(null)
  const [operacao, setOperacao] = useState(null)

  function adicionarNumero(num){
    let resultado

    if (operacao == null) {
      resultado = concatenarNumero(num1, num)
      setNum1(resultado)
    } else {
      resultado = concatenarNumero(num2, num)
      setNum2(resultado)
    }

    setTxtNumeros(resultado)    
  }

  function definirOperacao(op){
    // define a operação caso nao exista
    if (operacao === null) {
      setOperacao(op)
      return
    }    

    //caso a operação estiver definida e num 2 selecionado, realiza o calculo da operação
    if (num2 !== null) {
      const resultado = calcular(parseFloat(num1),parseFloat(num2), op);
      setOperacao(op)
      setNum1(resultado.toString())
      setNum2(null)
      setTxtNumeros(resultado.toString())
    }

  }

  function acaoCalcular(){
    if (num2 === null) {
      return  
    }
    const resultado = calcular(parseFloat(num1), parseFloat(num2), operacao)
    setTxtNumeros(resultado.toString())

  }

  function limpar(){
    setNum1('0')
    setNum2(null)
    setTxtNumeros('0')
    setOperacao(null)
  }

  return (
    <Container>      
      <div className='p-2' style={{
            background: '#007bff',
            height: '250px',
            width: '400px',            
          }}>
        <Row>
          <Col xs="3">              
            <Button variant='danger'
            onClick={limpar}
            >
              C
            </Button>
          </Col>          
          <Col xs="9">              
            <Form.Control type='text'
            name='txtNumeros'
            className='text-end'
            readOnly="readonly"
            value={txtNumeros}  />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(7)}
            >
              7
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(8)}
            >
              8
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(9)}
            >
              9
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
            onClick={() => definirOperacao('/')}
            >
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(4)}
            >
              4
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(5)}
            >
              5
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(6)}
            >
              6
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
            onClick={() => definirOperacao('*')}
            >
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(1)}
            >
              1
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(2)}
            >
              2
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(3)}
            >
              3
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
            onClick={() => definirOperacao('-')}
            >
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero(0)}
            >
              0
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={() => adicionarNumero('.')}
            >
              .
            </Button>
          </Col>
          <Col>
            <Button variant='light'
            onClick={acaoCalcular}
            >
              =
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
            onClick={() => definirOperacao('+')}
            >
              +
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Calculadora;
