import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigate,  useParams } from 'react-router-dom';
import AddResena from '../components/AddResena';
import All from '../components/All';
import Resena from '../components/Resena';
import { moviescontext } from '../context/MoviesContext';
import './css/details.css'

export default function Details() {
  let star
  const {id} = useParams()
  const [resena, setResena] = useState([])

  const {movies,  reviews,  addReview, loading}= useContext(moviescontext)
  const comentario = useRef()
  const rating = useRef()

  const movie = movies.filter(movie=>movie._id===id)[0]

  useEffect(()=>{
    fetch(`http://localhost:4000/mov/resena/${id}`)
    .then(resp=>resp.json())
    .then(data=>{
      setResena(data)
      console.log(data)
      const puntaje = resena.calificacion 
      console.log(`puntake: ${puntaje}`)
      star = new Array(puntaje)
      console.log(`puntake: ${star}`)
      star.fill(2,0)
    })
    
  },[])

  if(!movie && !loading ){
    return <Navigate  to={"/notfound"}/>
  }
  
    const add = ()=>{
      let comment = comentario.current.value 
      let stars = rating.current.value 
      addReview(movie, stars, comment)
    }

  return loading?<p>Loading...</p>:
      <All >
            <div className='page_datails'>
              <div className='details_movie_page'>

                  <div className='container_img'>
                      <div className='card_datails'>
                          <img src={movie.img} alt=""  className='img_revies'/>
                        </div>
                  </div>

                  <div className='container_informacion'>
                      <div className='informacion_a'>
                        <h1 className='title_movie'>{movie.titulo}</h1>
                        <h3>{movie.estreno}</h3>
                      </div>

                      <h3 className='title_director'> {movie.director}</h3>

                      <div className='descripcion_movie'>
                            <p>
                              {movie.descripcion}
                            </p>
                      </div>

                  </div>

                  <div className='resena'>

                      <div className='container_res'>
                        <h2 className='title_resena'>Resenas</h2>
                          
                              {
                                  resena?
                                  resena.map(resena => <Resena  resena= {resena}/>)
                                  :<h5>No hay resenas</h5>
                              }
                          <AddResena/>
                      </div>
                  </div>
            </div>
        </div>
          
      </All>
      
}
