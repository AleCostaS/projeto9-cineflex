import { useParams } from "react-router-dom";

export default function Session ({ movie }) {
    const { movieId } = useParams();

    return (
        <div className='Menu'>
           <img src={movie[movieId -1].posterURL}/>
        </div>
    );
}