import React from 'react'
import './WhoToFollow.css'
import SuggestionUser from './SuggestionUser'
export default function Suggestions() {
  return (
    <div className="whotofollow bg-gray">
      <header className='trends__header'>
        <span className='trends__title'>Who to follow</span>
      </header>
      <SuggestionUser name='Erling Haaland' username='ErlingHaaland' avatar='https://pbs.twimg.com/profile_images/1547935226550046720/m0yzCdOe_normal.jpg'/>
      <SuggestionUser name='Manchester United' username='ManchesterUnited' avatar='https://pbs.twimg.com/profile_images/1622866928434806784/29U-nXuq_normal.jpg'/> 
    </div>
  )
}
