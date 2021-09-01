import React from 'react'
import UserCard from './UserCard'
import { SearchIcon, SettingsIcon, MoreIcon } from '../images/svg/svgs'

const RightSidebar = () => {
  return (
    <div>
      <div className="right-side-search">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="right-side-content">
        <div className="right-side-trends">
          <div className="right-side-trends-header">
            <h1>Trends for you</h1>
            <SettingsIcon />
          </div>
          <div className="right-side-trends-content">
            <div className="right-side-trends-item">
              <div className="right-side-trends-item-content">
                <span>Trending in Turkey</span>
                <soan className="right-side-trends-item-header">#trending</soan>
                <span>4,721 Tweets</span>
              </div>
              <div className="right-side-trends-item-more">
                <MoreIcon />
              </div>
            </div>
          </div>
          <div className="right-side-trends-content">
            <div className="right-side-trends-item">
              <div className="right-side-trends-item-content">
                <span>Trending in Turkey</span>
                <soan className="right-side-trends-item-header">#trending</soan>
                <span>4,721 Tweets</span>
              </div>
              <div className="right-side-trends-item-more">
                <MoreIcon />
              </div>
            </div>
          </div>
          <div className="right-side-trends-content">
            <div className="right-side-trends-item">
              <div className="right-side-trends-item-content">
                <span>Trending in Turkey</span>
                <soan className="right-side-trends-item-header">#trending</soan>
                <span>4,721 Tweets</span>
              </div>
              <div className="right-side-trends-item-more">
                <MoreIcon />
              </div>
            </div>
          </div>
          <div className="right-side-trends-content">
            <div className="right-side-trends-item">
              <div className="right-side-trends-item-content">
                <span>Trending in Turkey</span>
                <soan className="right-side-trends-item-header">#trending</soan>
                <span>4,721 Tweets</span>
              </div>
              <div className="right-side-trends-item-more">
                <MoreIcon />
              </div>
            </div>
          </div>
          <div className="right-side-trends-content">
            <div className="right-side-trends-item">
              <a>Show more</a>
            </div>
          </div>
        </div>
        <div className="right-side-who-follow-content">
          <div className="right-side-who-follow-header">
            <h1>Who to follow</h1>
          </div>
          <div className="who-follow">
            <UserCard />
            <button className="btn follow-btn">Follow</button>
          </div>
          <div className="who-follow">
            <UserCard />
            <button className="btn follow-btn">Follow</button>
          </div>
          <div className="who-follow">
            <UserCard />
            <button className="btn follow-btn">Follow</button>
          </div>
        </div>
        <div className="right-side-content-footer">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Imprint</span>
          <span>Ads Info</span>
          <span>More...</span>
          <span>2021 Twitter. Inc.</span>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
