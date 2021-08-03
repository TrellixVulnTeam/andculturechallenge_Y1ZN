# Andculture Challenge Submission
This project was created to indicate proficiency in react, express, bootstrap, scss, and mongoose. This project was created as an alternative to [Andculture Development Challenge](https://github.com/AndcultureCode/challenge-node-react) due to technical difficulties preventing connection establishment between the react project and MongoDB Atlas. Despite being an alternative, this project should exhibit similar levels of proficiency of the technologies mentioned above. This project meets all the base goals of [Andculture Development Challenge](https://github.com/AndcultureCode/challenge-node-react).

## Backend Setup

The backend has its own list of dependencies that require proper function, including express, dotenv, cors, mongoose and nodemon. The pakage.json should ensure the installation of all the dependencies but if it fails, make sure the dependencies are installed. Once the dependencies are installed make sure to run
`nodemon server.js` 
to start the backend server.

The MongoDB URI is made public despite it being a possible threat to the project. This decision was made for the following reason:
- Allows testers to test with working data without the need of setting up their own MongoDB instance.

## Frontend Setup

once the backend has started, you can start the frontend with `npm start`. If that fails, make sure that all the dependencies listed in package.json are properly installed.

##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
