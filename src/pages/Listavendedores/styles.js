import styled from "styled-components";


export const Container = styled.section`
    max_width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 0px 20px 20px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const BtnAcao = styled.section`
    margin: 25px 0px;
`;

export const ButtonSuccess = styled.button`
    background-color:#fff;
    color:#00FA9A;
    padding: 8px 12px;
    border: 1px solid #00FA9A;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    :hover{
        background-color: #00FA9A;
        color: #fff;
    }
`;

export const ButtonPrimary = styled.button`
    background-color:#fff;
    color:#0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const Titulo = styled.h1`
    color:#3e3e3e;
    font-size: 23px;
`;

export const Table = styled.table`
    width: 100%;
    th{
        background-color: #363636;
        color:#FFFAFA;
        padding: 10px;
    }
    td{
        background-color: #C0C0C0;
        color:#3e3e3e;
        padding: 8px;
    }
`;