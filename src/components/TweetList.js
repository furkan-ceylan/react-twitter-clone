import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import TweetCard from './TweetCard'

const TweetList = () => {
  const { tweets } = useContext(GlobalContext)

  return (
    <>
      {/* {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))} */}
    </>
  )
}

export default TweetList
