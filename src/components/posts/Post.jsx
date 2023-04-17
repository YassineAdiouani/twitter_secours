import React from 'react'
import './Post.css';
import { VerifyIcon } from '../Icons/PostIcons';
import ThreePoints from '../Icons/ThreePoints';

export default function Post({
    profile_avatar,usename,tagname,verify,title,tweet
}) {
    return (
        <section className="post__section">
            <div className="post__avatar">
                <img src="https://cdn.discordapp.com/avatars/787349101414187059/79e57a3f1d0fa6dbca1607cc95930f34.webp?size=32" alt="profile_avatar" />
            </div>
            <div className="post__body">
                <div className="post__headerText">
                    <h3> <a href="#"> {usename} </a> {' '} 
                        <small> 
                            {verify && <span className="valid"><VerifyIcon /></span> }{' '}
                            {tagname}
                        </small>
                    </h3>
                    <div className="post__option">
                        <ThreePoints />
                    </div>
                </div>
                <div className="post__description">
                    {title && <p> {title} </p>}
                </div>
                { tweet && <img src={tweet} alt="tweet__post" /> }
                <div className="post__footer">
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                </div>
            </div>
        </section>
    )
}
