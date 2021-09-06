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
  const tweetDetail = tweet.tweet
  const userDetail = tweet.user

  return (
    <div className="tweet-card">
      <Link to={'/profile'}>
        <div className="left">
          <SmallAvatar width="48" image={userDetail.image} />
        </div>
      </Link>
      <div className="right">
        <div className="tweet-card-head">
          <Link to={'/profile'}>
            <span className="tweet-card-name">{userDetail.name}</span>
            <span className="tweet-card-handle">{userDetail.handle}</span>
          </Link>
          <span className="tweet-card-time"> · {tweetDetail.time}</span>
        </div>
        <Link to={`/status/${tweet.id}`}>
          <div className="tweet-card-body">
            <div className="tweet-card-content">
              <p className="m-0">{tweetDetail.text}</p>
            </div>
            {tweetDetail.image ? (
              <div className="tweet-card-image">
                <img src={tweetDetail.image} alt="" />
              </div>
            ) : null}
            <div className="tweet-card-footer">
              <span className="tweet-card-footer-comment flex-align-center">
                <TweetCommentIcon />{' '}
                {tweetDetail.comments.length > 0 ? (
                  <span className="tweet-card-icon-text text-comments">
                    {tweetDetail.comments.length}
                  </span>
                ) : null}
              </span>
              <span className="tweet-card-footer-retweet flex-align-center">
                <TweetRetweetIcon />
                {tweetDetail.retweets ? (
                  <span className="tweet-card-icon-text text-retweets">
                    {tweetDetail.retweets}
                  </span>
                ) : null}
              </span>
              <span className="tweet-card-footer-like flex-align-center">
                <TweetLikeIcon />
                {tweetDetail.likes.length > 0 ? (
                  <span className="tweet-card-icon-text text-likes">
                    {tweetDetail.likes}
                  </span>
                ) : null}
              </span>
              <span className="tweet-card-footer-comment flex-align-center">
                <TweetSendIcon />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TweetCard
