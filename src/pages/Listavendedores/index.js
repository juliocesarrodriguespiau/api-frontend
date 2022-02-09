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

  const getListaVendedores = async () => {
    //console.log("Listar Vendedores");
    fetch("http://localhost/api/listavendedores.php")
    .then((response) => response.json())
    .then((responseJson) => (
      //console.log(responseJson),
      setData(responseJson.records)
    ));
  }

  useEffect(() => {
    getListaVendedores();
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
            <th>Id Vendedor</th>
            <th>Nome Vendedor</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(vendedor => (
            // <tr key={vendedor.id}>
            <tr key={vendedor.id}>
              <td>{vendedor.id_vendedor}</td>
              <td>{vendedor.nome}</td>
              <td>{vendedor.email}</td>
              <td>
                <Link to={"/consolidadovendedor/" + vendedor.id_vendedor}>
                  <ButtonPrimary>Consolidado Vendedor</ButtonPrimary>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
