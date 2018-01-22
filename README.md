## GETTING STARTED ##
`npm i` - install dependencies

`npm start` - runs local server

GO: http://localhost:3000


## Notes: ##
Welcome to GiphySurfRrrrr.

I started with the create-react-app (https://github.com/facebookincubator/create-react-app) as my bootstrapping library and then included different libraries to form the app structure.

When you navigate to http://localhost:3000 you will see the trending gifs at that time.

When you enter in a search term in the input field the corresponding image search results appear. The browser address also updates to reflect the current search term. 

Search terms entered within the input field are recorded in memory and appear as a pill below the input field. As per requirements, clicking on the search term pills results in performing a giphy search with the respective search term.

It is also possible to jump to a search result page directly by navigating to `http://localhost:3000/search/{search term}`. 

When no results are found, a random image fetched from the giphy's random api is displayed.


## Technical Explanations: ##
`react-redux` - https://redux.js.org/docs/basics/UsageWithReact.html
Used for state control. Redux allows the app to cleanly manage state within React through reduceers. Only reducers are able to update the app state. Reducers are placed in the `/src/reducers`

`redux-saga` - https://redux-saga.js.org/docs/api/
Used redux saga to have a clean separation of code responsibilities for the business logic and management of the app state. Redux Saga also allows me to leverage generator functions to cut down on using promises as well as other async handling methods. Sagas are placed in the `/src/sagas` folder

`react-waypoint` - https://github.com/brigade/react-waypoint
Used for infinite scroll functionality

`/src/actions` - Actions are responsible communicating with react-redux and redux-saga. It is similar to a pub/sub approach where events (in this case the action names) are dispatched and the subscriptions contained in react-redux/react-saga run their functions when they are triggered.

`/src/apis` - Generic definition of api urls as well as ajax handlers

`/src/containers` - ReactJS containers

`/config` - Config file

`/public` - Public files served by the server

## TODO: ##
Since I updated the directory structure a bit to my preferences the built in testing framework in react-scripts no longer work. I would have to convert react-scripts to use webpack or some type of compiler as well as implement a testing framework.

