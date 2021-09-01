import React from 'react'
import {
  Logo,
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookmarkIcon,
  ListsIcon,
  MoreIcon,
  MoreRoundedIcon,
  AvatarIcon,
} from '../images/svg/svgs'
import UserCard from './UserCard'

export const Sidebar = () => {
  return (
    <div className="flex-space-between">
      <div>
        <div className="side-nav-header">
          <Logo />
        </div>
        <div className="side-nav-items">
          <ul className="p-0">
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <HomeIcon />
                <span className="side-nav-text">Home</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <ExploreIcon />
                <span className="side-nav-text">Explore</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <NotificationIcon />
                <span className="side-nav-text">Notifications</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <MessageIcon />
                <span className="side-nav-text">Messages</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <BookmarkIcon />
                <span className="side-nav-text">Bookmarks</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <ListsIcon />
                <span className="side-nav-text">Lists</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <AvatarIcon />
                <span className="side-nav-text">Profile</span>
              </div>
            </li>
            <li className="side-nav-item flex-align-center">
              <div className="side-nav-item-holder">
                <MoreRoundedIcon />
                <span className="side-nav-text">More</span>
              </div>
            </li>
          </ul>
          <div className="btn tweet-btn text-center">Tweet</div>
        </div>
      </div>
      <div className="side-nav-item flex-align-center mb-1 side-profile-wrapper">
        <UserCard />
        <div>
          <MoreIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
