import React, { useContext } from 'react';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import All from '../components/All'
import { moviescontext } from '../context/MoviesContext';

export default function Home() {

    const {movies} = useContext(moviescontext)

    const movieCiencia = movies.filter(movie=>movie.genero==='Ciencia Ficcion')
    const movieComedia = movies.filter(movie=>movie.genero==='Comedia')

    
  return <All >
    {console.log(movies)}
      <Slider/>
        <Movies movies={movieCiencia } category={"Ciencia Ficcion"} />
        <Movies movies={movieComedia} category={"Comedia"} />
  </All>;

  

}
