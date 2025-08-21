import type {FC} from 'react';
import type { MovieCardProps } from '../types';

const MovieCard: FC<MovieCardProps> = (movie : MovieCardProps) => {

    const onFavoriteClick = () => console.log(`Favorite clicked for ${movie.title}`);

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.imageLink} alt={movie.title}/>
                <div className='movie-overlay'>
                    <button className='favorite-btn' onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.releaseYear}</p>
            </div>
        </div>
    );
};

export default MovieCard;