
# LoginChallenge

## Getting Started / simple use case

Login with any user name and Non-empty password,
Drag image to other location (x)
Logoff
Login with other user
Drag image to other location (y)
the App will remember the location for each user..

### Prerequisites

npm
browser with localstorage support

### Installing

1. Clone
2. cd /LoginChallenge
3. run npm install 

## Running the tests

1. cd /LoginChallenge
2. npm run tests
3. npm run storybook or simply npm-start


## Running the App

1. cd /LoginChallenge
2. npm start
3. Open chrome with the url localhost:3000

## CSS

I used css modules for local scoping off css classes.
You can read about it here:
https://css-tricks.com/css-modules-part-1-need/

## Built With
react-scripts (create-react-app)




## Stuff I Used
Story Book
Create react app
Local Storage
Session Storage
Css Modules
HTML5 Drag and Drop API

## Whats next

### Medium priority

Refactor the welcome page - by using smaller components for example error / messages

Use react-router for future scale

### Low priority

Consider using some ui lib like material-ui

Design the welcome page (UX-Wise) using css flex

Hard code some images urls  - userName mapping, so the app can show different picture for each user

## Folder Structure

```
  ├── build    # Compiled files (alternatively `dist`)
  ├── docs                    # Documentation files (alternatively `doc`)
  ├── src                     # Source files 
    ├── components (functional components)
    ├── containers (controlled components)
    ├── Services (AP, storage menagment)
    ├── stories (for testing components)
  ├── App.js                    # The root component
  └── README.md
  
  ```








