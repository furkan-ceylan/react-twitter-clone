export const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return [...state, action.payload]
    case 'REMOVE_TWEET':
      return state.filter((tweet) => tweet.id !== action.payload)
    default:
      return state
  }
}
