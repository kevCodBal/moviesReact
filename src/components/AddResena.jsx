import React, { useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'

export default function AddResena() {
    
    const {id}= useParams()    
    console.log("hola desde addresena")
    console.log(id)
    const comentario = useRef()
    const rating = useRef()

    const {user } = useContext(userContext)

    let date = new Date()
    const fecha = date.toISOString().split('T')[0]

    const add = ()=>{
        let comment = comentario.current.value 
        let stars = rating.current.value 
        
        fetch('http://localhost:4000/mov/resena',{
            method: "POST",
            credentials: 'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                descripcion: comment,
                fechaCreacion: fecha,
                calificacion: stars,
                idPelicula: id
            })
        }).then(res=>res.json())
        .then(resena=>{
            console.log(resena)

        }).catch(error=>console.log(error))


        comentario=""
        rating=""
      }

  return (
    <div className='container_res2'>
        {!user.logged?<h4>Loguearse para anadir resenena</h4>:
            <h4>Anadir Resena</h4>
        }
        
            <input ref={comentario} type="text"  placeholder='Add resena' className='inputReview'/>
                <h4>Estrellas</h4>
                    <select ref={rating}  className='inputReviewa'>
                        <option value={1}>⭐</option>
                        <option value={2}>⭐⭐</option>
                        <option value={3}>⭐⭐⭐</option>
                        <option value={4}>⭐⭐⭐⭐</option>
                        <option value={5}>⭐⭐⭐⭐⭐</option>
                    </select>
            <button onClick={add}>Agregar Review</button>
    </div>
  )
}
