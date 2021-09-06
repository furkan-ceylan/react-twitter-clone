import {
  BackIcon,
  NotificationIcon,
  MoreIcon,
  LocationIcon,
  HyperLinkIcon,
  Calendericon,
} from '../../images/svg/svgs'
import { useHistory } from 'react-router-dom'
import { SmallAvatar } from '../../images/avatars'

const ProfileHeader = () => {
  document.title = 'John Doe (@johndoe) / Twitter'
  const history = useHistory()
  return (
    <div>
      <div className="flex-align-center header">
        <div className="left">
          <div className="status-back p-0" onClick={() => history.goBack()}>
            <BackIcon />
          </div>
        </div>
        <div className="right">
          <h1 className="m-0">John Doe</h1>
          <p className="profile-tweet-count m-0">72.3k Tweets</p>
        </div>
      </div>
      <div className="banner-img">
        <img
          className="w-100"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1"
          alt="banner"
        />
      </div>
      <div className="profile-dp p-1 flex-space-between-row">
        <a className="profile-avatar">
          <SmallAvatar
            width="128"
            image="https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg"
          />
        </a>
        <button className="btn outlined-btn">Edit Profile</button>
        {/* <div className="follow-me">
          <MoreIcon />
          <NotificationIcon />
          <button className="btn follow-btn">Following</button>
        </div> */}
      </div>
      <div className="follow-me"></div>
      <div className="p-1">
        <div>
          <h1 className="m-0">John Doe</h1>
          <p className="profile-tweet-count m-0">@johndoe</p>
        </div>
        <div className="profile-description">
          <p>Welcome to my profile!</p>
        </div>
        <div className="profile-description-contact">
          <a className="location flex-align-center ">
            <LocationIcon />{' '}
            <span className="bold-dull-para pl-1">Istanbul</span>
          </a>

          <a className="location flex-align-center pl-1">
            <HyperLinkIcon />{' '}
            <span className="bold-dull-para pl-1">johndoe.com</span>
          </a>

          <a className="location flex-align-center pl-1">
            <Calendericon />{' '}
            <span className="bold-dull-para pl-1">Joined january, 2017</span>
          </a>
        </div>
        <div>
          <h2 className="inline-block pr-1">19</h2>
          <span className="bold-dull-para pr-1">Following</span>
          <h2 className="inline-block pl-1">82</h2>
          <span className="bold-dull-para pl-1">Followers</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
