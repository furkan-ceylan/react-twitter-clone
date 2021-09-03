export const addTweet = (tweet) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_TWEET', payload: tweet })
  }
}
