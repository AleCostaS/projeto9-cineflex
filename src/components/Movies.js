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
                            <img src={movie.posterURL} ></img>
                            <div className='movieTitle'>{movie.title}</div>
                        </>
                        
                    );
                })}
            </div>
        </>
    );
}