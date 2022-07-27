import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "./components/Menu";
import Movies from "./components/Movies";

export default function App() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
		const requisition = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        requisition.then(answer => {
            setMovies(answer.data);
        });
	}, []);

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Movies movies={movies}/>}/>
            </Routes>
        </BrowserRouter>
    );
}