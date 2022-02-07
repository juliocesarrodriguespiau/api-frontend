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
        <Titulo>Listar Vendedores</Titulo>
        <BtnAcao>
          <Link to={"/cadastrar"}>
            <ButtonSuccess>Cadastrar Vendedor</ButtonSuccess>
          </Link>
        </BtnAcao>
      </ConteudoTitulo>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome Vendedor</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(vendedor => (
            <tr key={vendedor.id}>
              <td>{vendedor.id}</td>
              <td>{vendedor.nome}</td>
              <td>{vendedor.email}</td>
              <td>
                <Link to={"/visualizar/" + vendedor.id}>
                  <ButtonPrimary>Detalhes</ButtonPrimary>
                </Link>
                Editar Apagar
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
