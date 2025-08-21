import type {FC, FormEvent} from 'react';
import { useState } from 'react';
import type { MovieCardProps } from '../types';
import MovieCard from '../components/MovieCard';

const Home : FC = () => {
    
    const movies : Array<MovieCardProps> = [
        {
            id: 0,
            title: 'Shrek',
            imageLink: 'https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg',
            releaseYear: 2001
        },
        {
            id: 1,
            title: 'Shrek 2',
            imageLink: 'https://www.originalfilmart.com/cdn/shop/products/shrek_2_2004_original_film_art_5000x.jpg',
            releaseYear: 2004
        },
        {
            id: 2,
            title: 'Shrek the Third',
            imageLink: 'https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_FMjpg_UX1000_.jpg',
            releaseYear: 2007
        },
        {
            id: 3,
            title: 'Shrek Forever After',
            imageLink: 'https://image.tmdb.org/t/p/original/rpYob8ExrssbsBdlFux7WnslmG8.jpg',
            releaseYear: 2010
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = (e : FormEvent) => {
        e.preventDefault();
        alert(`Search query: ${searchQuery}`);
    }

    return(
        <div className='home'>

            <form className='search-form' onSubmit={e => handleSearch(e)}>
                <input className='search-input' type='text' placeholder='Search for movies...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                <button type='submit'>🔍</button>
            </form>

            <div  className='movie-grid'>
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        imageLink={movie.imageLink}
                        releaseYear={movie.releaseYear}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;