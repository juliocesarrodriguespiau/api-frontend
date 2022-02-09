import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
  Container,
  ConteudoTitulo,
  BtnAcao,
  ButtonSuccess,
  Table, 
  Titulo,
  ButtonPrimary
} from './styles';

export const Home = () => {

  const [data, setData] = useState([]);

  const getVendedores = async () => {
    //console.log("Listar Vendedores");
    fetch("http://localhost/api/api/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      //console.log(responseJson),
      setData(responseJson.records)
    ));
  }

  useEffect(() => {
    getVendedores();
  },[])

  return (
    <Container>
      <ConteudoTitulo>
        <Titulo>Painel Geral de Vendas</Titulo>
        <BtnAcao> 
          <Link to={"/cadastrar"}>
            <ButtonSuccess>Cadastrar Venda</ButtonSuccess>
          </Link>
        </BtnAcao>
        <BtnAcao>
          <Link to={"/cadastrarvendedor"}>
            <ButtonSuccess>Cadastrar Vendedor</ButtonSuccess>
          </Link>
        </BtnAcao>
        <BtnAcao>
          <Link to={"/listavendedores"}>
            <ButtonSuccess>Listar Vendedores</ButtonSuccess>
          </Link>
        </BtnAcao>
      </ConteudoTitulo>
      <Table>
        <thead>
          <tr>
            <th>Id Venda</th>
            <th>Nome Vendedor</th>
            <th>Email</th>
            {/* <th>Id Vendedor</th> */}
            <th>Descrição Venda</th>
            {/* <th>Comissão Vendedor</th> */}
            <th>Valor da Venda</th>
            <th>Data Venda</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(vendedor => (
            <tr key={vendedor.id}>
              <td>{vendedor.id}</td>
              <td>{vendedor.nome}</td>
              <td>{vendedor.email}</td>
              {/* <td>{vendedor.id_vendedor}</td> */}
              <td>{vendedor.descricao_venda}</td>
              {/* <td>{vendedor.comissao}</td> */}
              <td>{vendedor.valor_venda}</td>
              <td>{vendedor.data_venda}</td>
              <td>
                <Link to={"/visualizar/" + vendedor.id}>
                  <ButtonPrimary>Detalhes</ButtonPrimary>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
