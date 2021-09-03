import React from 'react'
import '../styles/TweetCard.css'
import { SmallAvatar } from '../images/avatars'
import {
  TweetCommentIcon,
  TweetRetweetIcon,
  TweetLikeIcon,
  TweetSendIcon,
} from '../images/svg/svgs'
import { Link } from 'react-router-dom'

const TweetCard = ({ tweet }) => {
  console.log(tweet.user)
  return (
    <Link to={`/status/${tweet.id}`}>
      <div className="tweet-card">
        <div className="left">
          <SmallAvatar width="48" image={tweet.user.image} />
        </div>
        <div className="right">
          <div className="tweet-card-head">
            <span className="tweet-card-name">{tweet.user.name}</span>

            <span className="tweet-card-handle">{tweet.user.handle}</span>

            <span className="tweet-card-time"> - {tweet.tweet.time}</span>
          </div>
          <div className="tweet-card-body">
            <div className="tweet-card-content">
              <p className="m-0">{tweet.tweet.text}</p>
            </div>
            <div className="tweet-card-image">
              <img src={tweet.tweet.image} alt="" />
            </div>
            <div className="tweet-card-footer">
              <span className="flex-align-center">
                <TweetCommentIcon />{' '}
                <span className="tweet-cars-icon">
                  {tweet.tweet.comments.length}
                </span>
              </span>
              <span className="flex-align-center">
                <TweetRetweetIcon />
                <span className="tweet-cars-icon">{tweet.tweet.retweets}</span>
              </span>
              <span className="flex-align-center">
                <TweetLikeIcon />
                <span className="tweet-cars-icon">{tweet.tweet.likes}</span>
              </span>
              <span className="flex-align-center">
                <TweetSendIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TweetCard
