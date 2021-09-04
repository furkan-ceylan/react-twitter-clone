import { createStore, applyMiddleware } from 'redux'
import { tweetReducer } from './reducers/tweetReducer'
import thunk from 'redux-thunk'

export const store = createStore(
  tweetReducer,
  {
    store: [
      {
        id: 1,
        user: {
          name: 'John Doe',
          image:
            'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg',
          handle: '@johndoe',
        },
        tweet: {
          text: 'This is my second Tweet',
          image: '',
          time: '10m',
          retweets: '75',
          likes: '512',
          comments: [
            {
              id: 1,
              name: '@johndoe',
              text: 'Hello World',
            },
          ],
        },
      },
      {
        id: 2,
        user: {
          name: 'John Doe',
          image:
            'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg',
          handle: '@johndoe',
        },
        tweet: {
          text: 'Hello everyone.',
          image:
            'https://pbs.twimg.com/profile_images/1384273229498384388/5hQ2wv3H_400x400.jpg',
          time: '10m',
          retweets: '8',
          likes: '126',
          comments: [
            {
              id: 1,
              name: '@johndoe',
              text: 'Hello World',
            },
          ],
        },
      },
    ],
  },
  applyMiddleware(thunk)
)
