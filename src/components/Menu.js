import styled from 'styled-components';

export default function Menu () {
    return (
        <Upper>
            CINEFLEX
        </Upper>
    );
}

const Upper = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 2;
`;