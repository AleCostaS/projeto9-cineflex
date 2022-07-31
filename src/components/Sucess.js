import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Sucess ({ object }) {
    console.log(object);
    return (
        <>
            <Title>
                Pedido feito
                com sucesso!
            </Title>

            <Content>
                <h1>Filme e sessão</h1>
                <p></p>
            </Content>
        </>
    );
};

const Title = styled.div`
    margin-top: 67px;
    height: 110px;
    font-family: 'Roboto';
    color: #247A6B;
    font-weight: 700;
    font-size: 22px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    margin-left: 10%;

    h1 {
        font-family: 'Roboto';
        font-size: 22px;
        font-weight: 700;
        color: #293845;
        margin-top: 20px;
    }
`;