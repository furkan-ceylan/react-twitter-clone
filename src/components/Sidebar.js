import React from 'react'
import {
  Logo,
  HomeIcon,
  FilledHomeIcon,
  ExploreIcon,
  FilledExploreIcon,
  NotificationIcon,
  FilledNotificationIcon,
  MessageIcon,
  FilledMessageIcon,
  BookmarkIcon,
  FilledBookmarkIcon,
  ListsIcon,
  FilledListsIcon,
  MoreIcon,
  MoreRoundedIcon,
  AvatarIcon,
  FilledAvatarIcon,
} from '../images/svg/svgs'
import UserCard from './UserCard'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isExplore = location.pathname === '/explore'
  const isNotification = location.pathname === '/notifications'
  const isMessages = location.pathname === '/messages'
  const isBookmarks = location.pathname === '/bookmarks'
  const isLists = location.pathname === '/lists'
  const isProfile = location.pathname.includes('/profile')

  return (
    <div className="flex-space-between sidebar">
      <div>
        <div className="side-nav-header">
          <Logo />
        </div>
        <div className="side-nav-items">
          <ul className="p-0">
            <Link to="/">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isHome ? <FilledHomeIcon /> : <HomeIcon />}
                  <span
                    className={
                      isHome ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Home
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/explore">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isExplore ? <FilledExploreIcon /> : <ExploreIcon />}
                  <span
                    className={
                      isExplore ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Explore
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/notifications">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isNotification ? (
                    <FilledNotificationIcon />
                  ) : (
                    <NotificationIcon />
                  )}
                  <span
                    className={
                      isNotification
                        ? 'side-nav-text text-bold'
                        : 'side-nav-text'
                    }
                  >
                    Notifications
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/messages">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isMessages ? <FilledMessageIcon /> : <MessageIcon />}
                  <span
                    className={
                      isMessages ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Messages
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/bookmarks">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isBookmarks ? <FilledBookmarkIcon /> : <BookmarkIcon />}
                  <span
                    className={
                      isBookmarks ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Bookmarks
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/lists">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isLists ? <FilledListsIcon /> : <ListsIcon />}
                  <span
                    className={
                      isLists ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Lists
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/profile">
              <li className="side-nav-item flex-align-center">
                <div className="side-nav-item-holder">
                  {isProfile ? <FilledAvatarIcon /> : <AvatarIcon />}
                  <span
                    className={
                      isProfile ? 'side-nav-text text-bold' : 'side-nav-text'
                    }
                  >
                    Profile
                  </span>
                </div>
              </li>
            </Link>
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
      <div className="profile-card side-nav-item flex-align-center mb-1 side-profile-wrapper">
        <UserCard />
        <div>
          <MoreIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
