import React from 'react'

export default function SuggestionUser({name,username,avatar}) {
  return (
    <div className="suggestions">
        <div className="suggestion__user hover">
          <div className="suggestion__content">
            <div className="avatar">
               <img src={avatar} alt=""  />
            </div>
            <div className="suggestion__info">
                <span className='name ellipsis'>{name}</span>
                <span className='username ellipsis'>@{username}</span>
              </div>
          </div>
          <button className="button__follow">Follow</button>
        </div>
      </div>
  )
}
