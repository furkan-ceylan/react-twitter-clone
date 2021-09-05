import { useEffect } from 'react'
import { StatusCard } from '../components/StatusCard'
import { BackIcon } from '../images/svg/svgs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Status = ({ match }) => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const tweetId = match.params.id
  const tweet = useSelector((state) =>
    state.store.find((tweet) => tweet.id == tweetId)
  )
  return (
    <div className="status-all">
      <div className="status">
        <Link to="/">
          <div className="status-back p-0">
            <BackIcon />
          </div>
        </Link>
        <h1>Tweet</h1>
      </div>
      <div className="tweets">
        <StatusCard tweet={tweet} />
      </div>
    </div>
  )
}

export default Status
