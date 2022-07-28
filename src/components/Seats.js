import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";

export default function Seats ({ movie }) {
    const { sessionId } = useParams();
    console.log(sessionId)
    return (
        <>
            <Title>
                Selecione o(s) assento(s)
            </Title>

            {/* <Bottom>
                <Posters>
                    <img src={movie[movieId -1].posterURL} alt=''></img>    
                </Posters>
                <p>{movie[movieId -1].title}</p>
            </Bottom> */}
        </>
    );
}
const Title = styled.div`
    margin-top: 67px;
    height: 110px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Bottom = styled.div`
    width: 100vw;
    height: 167px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;

    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0;
    z-index: 2;

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin-left: 30px
    }
`;

const Posters = styled.div`
    float: left;
    background-color: #FFFFFF;
    margin-left: 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        height: 120px;
        padding: 7px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        position: relative;
    }
`;