export const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      const id = 3
      const addTweet = {
        id: id,
        user: {
          name: 'John Doe',
          image:
            'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg',
          handle: '@johndoe',
        },
        tweet: action.payload,
      }
      return {
        ...state,
        store: [addTweet, ...state.store],
      }
    case 'REMOVE_TWEET':
      return state.filter((tweet) => tweet.id !== action.payload)
    default:
      return state
  }
}
