import { StatusCard } from '../components/StatusCard'
import { BackIcon } from '../images/svg/svgs'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Status = ({ match }) => {
  window.scroll(0, 0)
  const history = useHistory()

  const tweetId = match.params.id
  const tweet = useSelector((state) =>
    state.store.find((tweet) => tweet.id == tweetId)
  )
  return (
    <div className="status-all">
      <div className="status">
        <div className="status-back p-0" onClick={() => history.goBack()}>
          <BackIcon />
        </div>
        <h1>Tweet</h1>
      </div>
      <div className="tweets">
        <StatusCard tweet={tweet} />
      </div>
    </div>
  )
}

export default Status
