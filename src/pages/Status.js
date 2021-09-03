import React from 'react'
import { StatusCard } from '../components/StatusCard'
import { BackIcon } from '../images/svg/svgs'
import { Link } from 'react-router-dom'

const Status = ({ match }) => {
  const tweetId = match.params.id
  return (
    <div>
      <div className="status">
        <Link to="/">
          <button className="btn p-0">
            <BackIcon />
          </button>
        </Link>
        <h1>Tweet</h1>
      </div>
      <div className="tweets">
        <StatusCard tweet={getTweet(tweetId)} />
      </div>
    </div>
  )
}

export default Status
