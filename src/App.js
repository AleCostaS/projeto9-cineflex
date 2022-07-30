import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import GlobalStyle from './components/globalStyle';
import axios from 'axios';
import Menu from "./components/Menu";
import Movies from "./components/Movies";
import Session from "./components/Session";
import Seats from "./components/Seats";
import Sucess from "./components/Sucess";
import { Fragment } from "react/cjs/react.production.min";

export default function App() {
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState({});
    
    useEffect(() => {
		const requisition = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

        requisition.then(answer => {
            setMovies(answer.data);
        });
	}, []);

    return (
        <Fragment>
            <GlobalStyle />
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Movies movies={movies}/>}/>
                        <Route path="/sessoes/:movieId" element={<Session />}/>
                        <Route path="/assentos/:sessionId" element={<Seats setMessage={(e) => setMessage(e)} />}/>
                        <Route path="/sucesso/" element={<Sucess movies={movies} message={message}/>}/>
                    </Routes>
                </BrowserRouter>
        </Fragment>
    );
}