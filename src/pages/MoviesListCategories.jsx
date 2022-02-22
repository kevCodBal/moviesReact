import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import All from '../components/All'
import Movies from '../components/Movies'
import { moviescontext } from '../context/MoviesContext'

export default function MoviesListCategories() {

    const {category} = useParams()
    console.log(category)

  const {movies,  reviews,  addReview, loading}= useContext(moviescontext)

  const movieCategorie = movies.filter(movie=>movie.genero===category)

  console.log("----------Movies Categories")
  console.log(movieCategorie)
  return (
    <All>
        <Movies movies={movieCategorie} category={category} />
    </All>
  )
}
