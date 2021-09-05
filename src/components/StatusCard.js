import '../styles/StatusCard.css'
import { SmallAvatar } from '../images/avatars'
import {
  TweetCommentIcon,
  TweetRetweetIcon,
  TweetLikeIcon,
  TweetSendIcon,
} from '../images/svg/svgs'

export const StatusCard = ({ tweet }) => {
  const tweetDetail = tweet.tweet
  const userDetail = tweet.user
  console.log(tweet)
  return (
    <div className="status-card">
      <div className="left">
        <SmallAvatar width="48" image={userDetail.image} />
        <div className="pl-1">
          <div className="status-card-name">{userDetail.name}</div>
          <div className="status-card-handle">{userDetail.handle}</div>
        </div>
      </div>
      <div className="right">
        <div className="status-card-head"></div>
        <div className="status-card-body">
          <div className="status-card-content">
            <p className="m-0">{tweetDetail.text}</p>
          </div>
          {tweetDetail.image ? (
            <div className="status-card-image">
              <img src={tweetDetail.image} alt="" />
            </div>
          ) : null}
          <div className="status-card-info">
            <a className="translate">Translate Tweet</a>
            <div className="status-card-state">
              <div className="status-card-state-item">
                <span>7:24 PM · </span>
              </div>
              <div className="status-card-state-item">
                <span>Sep 6, 2021 · </span>
              </div>
              <div className="status-card-state-item">
                <span>Twitter for iPhone</span>
              </div>
            </div>
          </div>
          {tweetDetail.retweets || tweetDetail.likes ? (
            <div className="status-card-stats">
              <div className="status-card-stats-item">
                {tweetDetail.retweets ? (
                  <div className="status-card-stats-item">
                    <span className="status-card-stats-item-text">
                      {tweetDetail.retweets}
                    </span>
                    <span>Retweets</span>
                  </div>
                ) : null}
                {tweetDetail.likes ? (
                  <div className="status-card-stats-item">
                    <span className="status-card-stats-item-text">
                      {tweetDetail.likes}
                    </span>
                    <span>Likes</span>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="status-card-footer">
            <span className="flex-align-center">
              <TweetCommentIcon />
            </span>
            <span className="flex-align-center">
              <TweetRetweetIcon />
            </span>
            <span className="flex-align-center">
              <TweetLikeIcon />
            </span>
            <span className="flex-align-center">
              <TweetSendIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
