import { Link } from "react-router-dom";

export default function Movies ({ movies }) {
    return (
        <>
            <div className='title'>
                Selecione o filme
            </div>
            <div className='filmes'>
                {movies.map( movie => {
                    return (
                        <>
                            <Link to={'/sessoes/'+movie.id}>
                                <img src={movie.posterURL} ></img>
                                <div className='movieTitle'>{movie.title}</div>
                            </Link>
                        </>
                        
                    );
                })}
            </div>
        </>
    );
}