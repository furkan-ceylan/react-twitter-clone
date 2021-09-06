import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileDetail from '../components/profile/ProfileDetail'
import '../styles/Profile.css'

const Profile = () => {
  window.scroll(0, 0)
  return (
    <div className="profile">
      <div className="profile-head">
        <ProfileHeader />
      </div>
      <div className="profile-details">
        <ProfileDetail />
      </div>
    </div>
  )
}

export default Profile
