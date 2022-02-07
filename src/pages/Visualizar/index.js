import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { 
    Container, 
    Titulo, 
    ButtonInfo, 
    BtnAcao, 
    ConteudoTitulo,
    ConteudoVendedor
} from "./styles";

export const Visualizar = (props) => {

    let { id } = useParams();
    let { nome } = useParams();
    let { email } = useParams();
    // console.log(id);
    // console.log(nome);
    // const [data, setData] = useState({
    //     nome: '',
    //     email: ''
    // });
    const [vendedor, setData] = useState([]);

    useEffect(() => {
        const getVendedor = async () => {
            await fetch("http://localhost/api/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setData(responseJson.vendedor);
                    console.log(responseJson.vendedor);
                });
        }
        getVendedor();
    }, [id]);
    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Detalhes Vendedor</Titulo>
                <BtnAcao>
                    <Link to={"/"}>
                        <ButtonInfo>Listar Vendedores</ButtonInfo>
                    </Link>
                </BtnAcao>
            </ConteudoTitulo>
            <ConteudoVendedor>Id: {vendedor.id}</ConteudoVendedor>
            <ConteudoVendedor>Nome: {vendedor.nome}</ConteudoVendedor>
            <ConteudoVendedor>E-mail: {vendedor.email}</ConteudoVendedor>
        </Container>
    );
}