
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserContext'
import './css/Navbar.css'



export default function () {
  const {user, serUser} = useContext(userContext)
  return (
    <>
    <div className='container'>
        <div className='wraper'>
            <div className='left'>
                  <Link  style={{textDecoration: 'none'}} to={"/"}><p className='menuItem'>Logo</p> </Link>  
            </div>

            <div className='center'>
                    <div className='button_categorie'>
                     <Link style={{textDecoration: 'none'}} to={'/movies/Ciencia Ficcion'}><p className='menuItem'>Peliculas</p></Link>   
                    
                    </div>
                    <div className='button_categorie'>
                        <Link   style={{textDecoration: 'none'}} to={'/movies/Comedia'}><p className='menuItem'>Populares</p> </Link> 
                    </div>
                    
            </div>

            <div className='rigth'>
              {
                user.logged?<Link to={'/login'} style={{textDecoration: 'none'}}><p className='menuItem'>{user.name}</p> </Link> :
                <Link to={'/login'} style={{textDecoration: 'none'}}><p className='menuItem'>Login</p> </Link>  
              }
            </div>
        </div>

    </div>
    </>
  )
}
