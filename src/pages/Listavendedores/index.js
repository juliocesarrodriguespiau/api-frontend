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

export const Listavendedores = () => {

  const [data, setData] = useState([]);

  const getVendedores = async () => {
    //console.log("Listar Vendedores");
    fetch("http://localhost/api/index.php")
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
        <Titulo>Painel Geral de Vendedores</Titulo>
        <BtnAcao>
          <Link to={"/"}>
            <ButtonSuccess>Listar Vendas</ButtonSuccess>
          </Link>
        </BtnAcao>
      </ConteudoTitulo>
      <Table>
        <thead>
          <tr>
            <th>Nome Vendedor</th>
            <th>Email</th>
            <th>Id Vendedor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(vendedor => (
            <tr key={vendedor.id}>
              <td>{vendedor.nome}</td>
              <td>{vendedor.email}</td>
              <td>{vendedor.id_vendedor}</td>
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
