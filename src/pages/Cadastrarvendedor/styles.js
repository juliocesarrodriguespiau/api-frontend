import styled from "styled-components";

export const Container = styled.section`
    max_width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const BtnAcao = styled.section`
    margin: 25px 0px;
`;

export const ButtonInfo = styled.button`
    background-color:#fff;
    color:#0dcaf0;
    padding: 6px 9px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    :hover{
        background-color: #31d2f2;
        color: #fff;
    }
`;

export const Titulo = styled.h1`
    color:#3e3e3e;
    font-size: 23px;
`;

export const AlertaSuccess = styled.p`
    background-color:#00FA9A;
    color: #000080;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;

export const AlertaDanger = styled.p`
    background-color:#FA8072;
    color: #000080;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;

export const ConteudoForm = styled.section`
    max-width: 960px;
    padding: 10px 30px 30px;
`;

export const Form = styled.form`
    margin: 0px auto;
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
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
