import React, { useState } from 'react'
import './Empty.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Countainer from '../../layouts/Countainer'
import Main from '../../layouts/Main' 
import AsideTrends from '../../components/Trends/AsideTrends'

export default function Bookmarks() {
  const [Logged, setLogged] = useState()
  return (
    <Countainer>
      <Sidebar/>
        <Main> 
          <div className='text-blue'>
              {/* Ur Code here  */}
          </div>
        </Main>
      <AsideTrends/>
    </Countainer>
  )
}
