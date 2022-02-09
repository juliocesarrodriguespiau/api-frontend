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

export const Consolidadovendedor = (props) => {

    let { id_vendedor } = useParams();
    //let { nome } = useParams();
    //let { email } = useParams();
    // console.log(id);
    // console.log(nome);
    // const [data, setData] = useState({
    //     nome: '',
    //     email: ''
    // });
    const [vendedor, setData] = useState([]);

    useEffect(() => {
        const getVendedor = async () => {
            await fetch("http://localhost/api/api/consolidadovendedor.php?id_vendedor=" + id_vendedor)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setData(responseJson.vendedor);
                    console.log(responseJson.vendedor);
                });
        }
        getVendedor();
    }, [id_vendedor]);

    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Visualizar Consolidado por Vendedor</Titulo>
                <BtnAcao>
                    <Link to={"/"}>
                        <ButtonInfo>Listar Vendas</ButtonInfo>
                    </Link>
                </BtnAcao>
            </ConteudoTitulo>
            <ConteudoVendedor>Id Venda: {vendedor.id}</ConteudoVendedor>
            <ConteudoVendedor>Nome Vendedor: {vendedor.nome}</ConteudoVendedor>
            <ConteudoVendedor>E-mail: {vendedor.email}</ConteudoVendedor>
            <ConteudoVendedor>Id Vendedor: {vendedor.id_vendedor}</ConteudoVendedor>
            <ConteudoVendedor>Descrição Venda: {vendedor.descricao_venda}</ConteudoVendedor>
            <ConteudoVendedor>Comissão Vendedor: {vendedor.comissao}</ConteudoVendedor>
            <ConteudoVendedor>Valor da Venda: {vendedor.valor_venda}</ConteudoVendedor>
            <ConteudoVendedor>Data Venda: {vendedor.data_venda}</ConteudoVendedor>
        </Container>
    );
}