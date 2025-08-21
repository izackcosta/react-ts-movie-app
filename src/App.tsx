import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard title='Shrek' imageLink='https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg'
      releaseYear={2001}/>
      <MovieCard title='Shrek 2' imageLink='https://www.originalfilmart.com/cdn/shop/products/shrek_2_2004_original_film_art_5000x.jpg?v=1551894581'
      releaseYear={2004}/>
    </>
  )
}

export default App
