<div align = "center"> 
<h1> Countdown Timer App </h1>
 <h4> Mern Stack Application </h4>
</div>

<div align = "center">
Countdown timer web app where you can name an event, select a date and time for that event, choose a custom background color and then add that event to your list of current events. The timer component will then count down until you're event's time has arrived, confetti will then pop! Multiple timers can be added at once and timers can be deleted whenever. Default background color is a shade of white.
</div>

## Table of Contents
1. Built With 
2. Optimizations 
3. Dependencies 
4. Prerequisities
5. Local installation 

## Built With 
* Node.js 
* Express
* React.js
* Mongoose 
* JavaScript 

## Optimizations 
Users will be able to edit timers

## Prerequisities 
<h3> React </h3>
React has been used for the frontend, with the use of react hooks to update the countdown timer and background colors, as well as display all countdown timers dynamically on the screen.
Application has been broken up into multiple components.

[React Documentation](https://reactjs.org/docs/introducing-jsx.html)

<h3> Express and Node JS </h3>
Used Express and Mongoose to connect the frontend to our mongoDB database and define API functionality. Through the use of axios, we are able to fetch all timers, delete timers and add timers.
With node, I was able to create a timer schema for the mongo instance.

[Steps to install node](https://nodejs.org/en/) 

<h3> MongoDB </h3>
Used mongoose to connect to mongoDB and store all info about our timedEvents. Data is retrieved from database whenever we're fetching all our timedEvents or deleting one.
New Events are saved into our TimerDB.

[Mongodatase Documentation](https://www.mongodb.com/docs/)

## Local Installation 
###  Clone this git repository 
 ```
 git clone https://github.com/strategio-tech/fp-sim6-madly-devops.git
 ```
### Install dependencies with npm inside the project directory
 ```
 npm install
 ```
### Run the react app
 ```
 npm run start
 ```
### 4. Open in browswer at specified local host 
```
 http://localhost:3000/
 ```

