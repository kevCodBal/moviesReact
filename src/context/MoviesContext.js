import React, { createContext, useEffect, useReducer, useState} from 'react';
import moviesReducer, { moviesInicitialState } from '../reducers/moviesReducer'
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviescontext = createContext()
 


export default function MoviesContext({children}) {
  
  
  const [movies, setMovies]= useReducer(moviesReducer, moviesInicitialState)
 // const [reviews, setReviews] = useState([])
  const [reviews, dispatchReviews] = useReducer(reviewsReducer, reviewsInitialState)
  const [loading, setLoading]= useState(true)

  
  const addReview = (movie, stars, comment)=>{
    setMovies({type:'addStars', movie, stars})
    dispatchReviews({type:'addReview', idMovie:movie._id, comment})
    //setReviews([...reviews,{id:reviews.length, idMovie:movie.id, comment}])
  }


  const addapiReview = (data)=>{
    dispatchReviews({type: 'addapiReview', data})
  }

  useEffect(()=>{
    fetch("http://localhost:4000/mov/peliculas/")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setMovies({type:"addMovies", movies:data})
      setLoading(false)
    })
    .catch(error=>setLoading(false))
  },[])
    
  return <moviescontext.Provider value={{loading,movies:movies.movies, addReview, reviews:reviews.reviews}}>
        {children}

  </moviescontext.Provider>
}
