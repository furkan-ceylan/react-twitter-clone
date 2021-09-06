import TweetCard from './TweetCard'
import { useSelector } from 'react-redux'

const TweetList = () => {
  const tweets = useSelector((state) => state.store)
  console.log(tweets)
  return (
    <div>
      {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))}
    </div>
  )
}

export default TweetList
