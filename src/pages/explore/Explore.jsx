import React from 'react'
import Countainer from '../../layouts/Countainer'
import Sidebar from '../../components/sidebar/Sidebar'
import Trends from '../../components/Trends/Trends'
import Main from '../../layouts/Main'
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow'
import AsideTrends from '../../components/Trends/AsideTrends'

export default function Explore() {
  return (
        <Main>
          <Trends FromExplore={true} />
        </Main>
  )
}
