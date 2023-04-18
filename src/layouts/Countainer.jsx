import React from 'react' 
import './countainer.css'

export default function Countainer({children}) {
  return (
    <div className='countainer'>
        {children}
    </div>
  )
}
