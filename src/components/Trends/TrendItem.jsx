import React from 'react'

export default function TrendItem({type,title,count,isArabic}) { 
  const nameClass=`hashtag__title ${isArabic && 'hashtag__title__end' }`
  return ( 
    <div className="trends__hashtag hover">
      <span className='hashtag__gray'>{type}</span>
      <span className={nameClass}>{title}</span>
      <span className='hashtag__gray'>{count} Tweets</span>
  </div>
  )
}
