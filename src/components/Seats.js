import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Seats () {
    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [session, setSession] = useState([]);
    const [hour, setHour] = useState([]);

    useEffect(() => {
		const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        requisition.then(answer => {
            setSeats(answer.data.seats);
            setMovie(answer.data.movie);
            setSession(answer.data.day);
            setHour(answer.data.name);
        });
	}, []);

    return (
        <>
            <Title>
                Selecione o(s) assento(s)
            </Title>

            <Content>
                {seats.map(seat => {
                    console.log(seat);
                    return (
                        <>
                            {seat.isAvailable ? (
                                    <Seat>
                                        <p>{seat.name}</p>
                                    </Seat>
                            ) : (
                                    <Noseat>
                                        <p>{seat.name}</p>
                                    </Noseat>
                            )}
                        </>
                    );
                })}
            </Content>
                
            <Options>
                <Seat></Seat>
                <Noseat></Noseat>
            </Options>
            
            <Bottom>
                <Posters>
                    <img src={movie.posterURL} alt=''></img>    
                </Posters>
                <Info>
                    <p>{movie.title}</p>
                    <p>{session.weekday} - {hour}</p>
                </Info>
            </Bottom>
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

const Info = styled.div`
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin-left: 30px;
        margin-bottom: 10px;
    }
`;

const Seat = styled.div`
    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    margin-right: 2%;
    margin-bottom: 4%;
    border: 1px solid #808F9D;
    border-radius: 12px;

    display: flex;
    flex-direction: center;
    align-items: center;

    p {
        margin-left: 6px;
    }
`;

const Noseat = styled.div`
    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    margin-right: 2%;
    margin-bottom: 4%;
    border: 1px solid #F7C52B;
    border-radius: 12px;

    display: flex;
    flex-direction: center;
    align-items: center;

    p {
        margin-left: 6px;
    }
`;

const Content = styled.div`
    height: 250px;
    margin: 0 24px;
    
    display: flex;
    flex-wrap: wrap;
`;

const Options = styled.div`
    height: 100px
`;