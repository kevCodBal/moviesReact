import React from 'react'
import Navbar from './Navbar';

export default function All({children}) {
  return (
    <div >
        <Navbar/>
        {children}
    </div>
  )
}
