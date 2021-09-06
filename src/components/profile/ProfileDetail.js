import { useState } from 'react'
import TweetList from '../TweetList'

const ProfileDetail = () => {
  const [category, setCategory] = useState(1)

  return (
    <div>
      <div className="profile-category">
        <div
          className={category === 1 ? 'profile-category-active' : null}
          onClick={() => setCategory(1)}
        >
          <span>Tweets</span>
        </div>
        <div
          className={category === 2 ? 'profile-category-active' : null}
          onClick={() => setCategory(2)}
        >
          <span>Tweets & replies</span>
        </div>
        <div
          className={category === 3 ? 'profile-category-active' : null}
          onClick={() => setCategory(3)}
        >
          <span>Media</span>
        </div>
        <div
          className={category === 4 ? 'profile-category-active' : null}
          onClick={() => setCategory(4)}
        >
          <span>Likes</span>
        </div>
      </div>
      <div className="profile-detail">
        {category === 1 && (
          <div className="profile-detail-item">
            <div className="profile-detail-item-content">
              <TweetList />
            </div>
          </div>
        )}
        {category === 2 && (
          <div className="profile-detail-item">
            <div className="profile-detail-item-title">
              <span>Tweets & replies</span>
            </div>
            <div className="profile-detail-item-content"></div>
          </div>
        )}
        {category === 3 && (
          <div className="profile-detail-item">
            <div className="profile-detail-item-title">
              <span>Media</span>
            </div>
            <div className="profile-detail-item-content"></div>
          </div>
        )}
        {category === 4 && (
          <div className="profile-detail-item">
            <div className="profile-detail-item-title">
              <span>Likes</span>
            </div>
            <div className="profile-detail-item-content"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileDetail
