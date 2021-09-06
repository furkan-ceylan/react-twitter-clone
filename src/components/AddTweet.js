import { useState } from 'react'
import { SmallAvatar } from '../images/avatars'
import {
  AddImageIcon,
  AddGifIcon,
  AddPollIcon,
  AddEmojiIcon,
} from '../images/svg/svgs'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index.js'
import { bindActionCreators } from 'redux'

export const AddTweet = () => {
  const profileImageUrl =
    'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg'

  let [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setTweetData((prevState) => ({
      ...prevState,
      text: value,
    }))
  }
  const [tweetData, setTweetData] = useState({
    image: '',
    time: '1m',
    retweets: 0,
    likes: 0,
    comments: [],
  })

  const dispatch = useDispatch()
  const { addTweet } = bindActionCreators(actionCreators, dispatch)
  const handleSubmit = () => {
    setLoading(true)
    addTweet(tweetData)
    setLoading(false)
    setTweetData((prevState) => ({
      ...prevState,
      text: '',
    }))
  }

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
              onChange={handleChange}
              value={tweetData.text}
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
          <div className="tweet" onClick={handleSubmit}>
            {loading ? (
              <button
                disabled
                className="btn tweet-btn text-center btn-disabled"
              >
                Loading
              </button>
            ) : (
              <button
                disabled={!tweetData.text}
                className={
                  tweetData.text
                    ? 'btn tweet-btn text-center'
                    : 'btn tweet-btn text-center btn-disabled'
                }
              >
                Tweet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTweet
