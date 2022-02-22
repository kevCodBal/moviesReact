import React, { useContext, useRef } from 'react'
import All from '../components/All'
import { userContext } from '../context/UserContext'
import './css/login.css'

export default function Login() {


    const {user, setUser}= useContext(userContext)
    
    const password = useRef()
    const email = useRef()

    const singnOut = ()=>{
        
         fetch('http://localhost:4000/mov/auth/logout',{
             method: "POST",
             credentials: 'include',
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                
             })
 
         }).then(res=>res.json())
         .then(user=>{
             console.log(user)
             setUser({logged:false})
         }).catch(error=>setUser({logged:false}))
         
     }

    const singnIn = ()=>{
       let passwordF = password.current.value 
       let emailF = email.current.value
        console.log(passwordF, emailF)

        fetch('http://localhost:4000/mov/auth/login',{
            method: "POST",
            credentials: 'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                correo:emailF,
                contrasena: passwordF
            })

        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true, name:user.nombre})
        }).catch(error=>setUser({logged:false}))
        
    }

  return (
    <All>
        <div className='containerLoginA'>
        {user.logged?<h1>{"Bienvenido "+ user.name}</h1>:

            <div className='ContainerLogin'>
                <p className='heading'>Login </p>
                <div className='boxLogin'>
                    <p>Email</p>
                    <div>
                        <input ref={email} type="text" name='email' placeholder='Ingrese su Email'/>
                    </div>
                </div>

                <div className='boxLogin'>
                    <p>Password</p>
                    <div>
                        <input ref={password} type="password" name='password' placeholder='Ingrese su password' />
                    </div>
                </div>

                <button onClick={singnIn} className='loginBtn'>Login</button>
            </div>
        }
            {
                user.logged?
            <button  onClick={singnOut} className='cerarS'>Cerrar Sesion</button>: <h1></h1>
            }
        </div>
        
    Login</All>
  )
}


//tzuzulcode@gmail.com
//12345