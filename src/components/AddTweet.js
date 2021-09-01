import React from 'react'
import { SmallAvatar } from '../images/avatars'
import {
  AddImageIcon,
  AddGifIcon,
  AddPollIcon,
  AddEmojiIcon,
} from '../images/svg/svgs'

export const AddTweet = () => {
  const profileImageUrl =
    'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg'

  return (
    <div className="new-tweet">
      <div className="left">
        <SmallAvatar width="48" image={profileImageUrl} />
      </div>
      <div className="right">
        <div className="flex-align-center">
          <span className="w-100">
            <input
              className="w-100"
              placeholder="What's happening?"
              type="text"
            />
          </span>
        </div>
        <div className="new-tweet-options">
          <div className="add-icons">
            <AddImageIcon />
            <AddGifIcon />
            <AddPollIcon />
            <AddEmojiIcon />
          </div>
          <div className="tweet">
            <div className="btn tweet-btn text-center">Tweet</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTweet
