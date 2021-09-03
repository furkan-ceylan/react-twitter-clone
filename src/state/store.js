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
            'https://pbs.twimg.com/profile_images/1059888693945630720/yex0Gcbi_bigger.jpg',
          handle: '@johndoe',
        },
        tweet: {
          text:
            'On World Health Day, 2020, "we reaffirm our commitment to do our part to stop the spread of this virus, care for the sick, and protect the health and well-being of our fellow Americans."',
          image:
            'https://pbs.twimg.com/card_img/1246823270524973058/IbkZhS3u?format=jpg&name=small',
          time: '10m',
          retweets: '320',
          likes: '1k',
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
            'https://pbs.twimg.com/profile_images/1059888693945630720/yex0Gcbi_bigger.jpg',
          handle: '@johndoe',
        },
        tweet: {
          text: 'Hello everyone.',
          image:
            'https://pbs.twimg.com/card_img/1246823270524973058/IbkZhS3u?format=jpg&name=small',
          time: '10m',
          retweets: '320',
          likes: '1k',
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
