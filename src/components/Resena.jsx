import React from 'react'

export default function Resena({resena}) {

    const puntaje = resena.calificacion
    console.log(puntaje)
    let start = new Array(puntaje)
    start.fill(2,0)

  return (
                <div className='resena_desc'> 
                    <h5>{resena.userCreacion}</h5>
                    <p id={resena.id}>{resena.descripcion}</p> 
                    <div className='star'>
                        {start.map((item)=> <h5>⭐</h5>)} 
                    </div>
                    
                </div>
  )
}
