import React from 'react';
import { Link } from 'react-router-dom';
import './css/Movie.css'

export default function Movie({movie}) {

  return <div  className='container_movie_card'>
      <img src={movie.img} alt="" className='movie_image' />
      <h3  className='title_movie'>{movie.titulo}</h3>
    <Link to={'/details/'+movie._id} ><button className='btn-movie'>Ir</button> </Link>  

  </div>
  
 
}

{/* <img className='movie_image' src={movie.img} alt="" />
                <div className='info_movie'>
                    <div className='icon'>
                        <Link>
                          ver
                        </Link>
                    </div>
                </div> */}