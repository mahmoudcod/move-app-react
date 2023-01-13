import {useState, useEffect } from "react";
import './app.css';
import searchIcon from './searchicon.svg';
import MovieCard from "./movieCard.jsx"; 


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7'

const  App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data =  await response.json();
    setMovies(data.Search);
  }
  const movie = {
    "Title": "Superman II",
    "Year": "1980",
    "imdbID": "tt0081573",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

  useEffect(() =>{
    searchMovie('superman');
  }, []);

  return (
    <div className="app">
      <h1>Moviland</h1>
      <div className="search">
        <input 
        placeholder="Search for movies " 
        value= {searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
      <img 
      src={searchIcon} 
      alt="Search"
      onClick={()=> searchMovie(searchTerm)}
      />

       </div>
      {
        movies?.length > 0 
        ?(
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>movie not found</h2>
          </div>
        )
        
      }
      

      </div>
  );
}

export default App;
