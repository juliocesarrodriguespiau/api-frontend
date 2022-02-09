import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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

  const cadVenda = async e => {
    e.preventDefault();
    console.log(vendedor.nome);

    await fetch("http://localhost/api/api/cadastrar.php", {
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
            type: 'erro',
            mensagem: responseJson.mensagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Venda cadastrada(via api)!'
        });
      })
  }

  return (
    <Container>
      <ConteudoForm>
        <ConteudoTitulo>
          <Titulo>Cadastrar Venda</Titulo>
          <BtnAcao>
            <Link to={"/"}>
              <ButtonInfo>Listar Vendas</ButtonInfo>
            </Link>
          </BtnAcao>
        </ConteudoTitulo>
          {status.type === 'erro' ? <AlertaSuccess>{status.mensagem}</AlertaSuccess> : ""}
          {status.type === 'success' ? <AlertaDanger>{status.mensagem}</AlertaDanger> : ""}
          <Form onSubmit={cadVenda}>
            <Label>Nome do Vendedor: </Label>
            <Input type='text' name='nome' placeholder='Nome do Vendedor' onChange={valorInput} /><br /><br />

            <Label>E-mail: </Label>
            <Input type='text' name='email' placeholder='Email do Vendedor' onChange={valorInput} /><br /><br />

            <Label>Id Vendedor: </Label>
            <Input type='text' name='id_vendedor' placeholder='ID Vendedor' onChange={valorInput} /><br /><br />

            <Label>Descrição Venda: </Label>
            <Input type='text' name='descricao_venda' placeholder='Descrição Venda' onChange={valorInput} /><br /><br />

            {/* <Label>Comissão Vendedor: </Label>
            <Input type='text' name='comissao' placeholder='Comissão do Vendedor' onChange={valorInput} /><br /><br /> */}

            <Label>Valor da Venda: </Label>
            <Input type='text' name='valor_venda' placeholder='Valor Venda' onChange={valorInput} /><br /><br />

            <Label>Data Venda: </Label>
            <Input type='text' name='data_venda' placeholder='Data Venda' onChange={valorInput} /><br /><br />

            <ButtonSuccess type='submit'>Cadastrar</ButtonSuccess>
          </Form>
        </ConteudoForm>
    </Container>
  );
}
