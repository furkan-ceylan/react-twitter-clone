import React from 'react'
import { SmallAvatar } from '../images/avatars'

const UserCard = () => {
  const profileImageUrl =
    'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg'
  return (
    <div className="side-nav-item-holder side-profile">
      <SmallAvatar width="30px" image={profileImageUrl} />
      <div className="side-profile-text">
        <span className="side-profile-name">username</span>
        <span className="side-handle-name">@handle</span>
      </div>
    </div>
  )
}

export default UserCard
