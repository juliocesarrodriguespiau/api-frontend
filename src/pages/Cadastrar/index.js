import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  ConteudoForm, 
  ConteudoTitulo,
  Titulo,
  BtnAcao,
  ButtonInfo,
  AlertaSuccess, 
  AlertaDanger, 
  Form ,
  Label,
  Input,
  ButtonSuccess
} from './styles';

export const Cadastrar = () => {

  const [vendedor, setVendedor] = useState({
    nome: '',
    email: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const valorInput = e => setVendedor({ ...vendedor, [e.target.name]: e.target.value });

  const cadVendedor = async e => {
    e.preventDefault();
    //console.log(vendedor.nome);

    await fetch("http://localhost/api/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vendedor })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.erro)
        console.log(responseJson.mensagem)
        console.log(responseJson.type)
        if (responseJson.erro) {
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          });
        } else {
          setStatus({
            type: 'erro',
            mensagem: responseJson.mensagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Vendedor não cadastrado(via api), tente mais tarde!'
        });
      })
  }

  return (
    <Container>
      <ConteudoForm>
        <ConteudoTitulo>
          <Titulo>Cadastrar</Titulo>
          <BtnAcao>
            <Link to={"/"}>
              <ButtonInfo>Listar</ButtonInfo>
            </Link>
          </BtnAcao>
        </ConteudoTitulo>
          {status.type === 'erro' ? <AlertaSuccess>{status.mensagem}</AlertaSuccess> : ""}
          {status.type === 'success' ? <AlertaDanger>{status.mensagem}</AlertaDanger> : ""}
          <Form onSubmit={cadVendedor}>
            <Label>Título: </Label>
            <Input type='text' name='nome' placeholder='Nome do Vendedor' onChange={valorInput} /><br /><br />

            <Label>E-mail: </Label>
            <Input type='text' name='email' placeholder='Email do Vendedor' onChange={valorInput} /><br /><br />

            <ButtonSuccess type='submit'>Cadastrar</ButtonSuccess>
          </Form>
        </ConteudoForm>
    </Container>
  );
}
