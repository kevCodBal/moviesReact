import React from 'react';
import Movie from './Movie';
import './css/Movies.css'

export default function Movies({movies,category}) {
  console.log("categoriaMovie")
  console.log(category)

  return <div className='container_movieA'>
          
            <h2>{category}</h2>
        <div className='container_movies'>
            
              {
            movies.map((movie)=> <Movie key={movie._id} movie={movie}/>)
             }
       </div>;
  </div> 
}
