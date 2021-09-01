import React from 'react'
import AddTweet from '../components/AddTweet'
import '../styles/Main.css'

const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <h1>Home</h1>
      </div>
      <AddTweet />
      <div className="tweets">{/* <TweetList /> */}</div>
    </div>
  )
}

export default Home
