# Countdown-Timer-App
Web app built with MERN

Countdown timer web app where you can name an event, select a date and time for that event, choose a custom background color and then add that event to your list of current events.
The timer component will then count down until you're event's time has arrived, confetti will then pop!

Multiple timers can be added at once and timers can be deleted whenever. Default background color is a shade of white.


### React 
React has been used for the frontend, with the use of react hooks to update the countdown timer and background colors, as well as display all countdown timers dynamically on the screen.
Application has been broken up into multiple components.

### Express and Node JS 
Used Express and Mongoose to connect the frontend to our mongoDB database and define API functionality. Through the use of axios, we are able to fetch all timers, delete timers and add timers.
With node, I was able to create a timer schema for the mongo instance.

### MongoDB
Used mongoose to connect to mongoDB and store all info about our timedEvents. Data is retrieved from database whenever we're fetching all our timedEvents or deleting one.
New Events are saved into our TimerDB.

## How to configure locally
### 1. Clone this git repository 
 ```
 git clone https://github.com/Mohebullah98/Countdown-Timer-App.git
 ```
### 2. Install dependencies with npm inside the project directory
 ```
 npm install
 ```
### 3. Run the react app
 ```
 npm start
 ```
### 4. Open in browser at: http://localhost:3000/

