import React from 'react'
import Trends from './Trends'
import WhoToFollow from '../WhoToFollow/WhoToFollow'

export default function AsideTrends({children}) {
  return (
    <div className='AsideTrends'>
        <Trends/>
        <WhoToFollow/>
    </div>
  )
}
