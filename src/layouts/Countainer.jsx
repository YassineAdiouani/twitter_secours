import React from 'react' 
import './countainer.css'
import Sidebar from '../components/sidebar/Sidebar'

export default function Countainer({children}) {
  return (
    <div className='countainer'>
        {children}
    </div>
  )
}
