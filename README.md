# Front End Test
An AngularJS focused take home test for Front-end Developers.

## Instructions
+ Clone this repo
+ Complete this exercise and submit either a zip of the solution or a link to a new repo
+ Please incorporate the included `angular.min.js` (Angular 1.5.8) framework into your solution. All other choices of libraries, frameworks, etc. are up to you.

## Requirements
+ Solution should be responsive
+ Use the the included `weather.json` file as your datasource (sample data from [Yahoo's Weather API](https://developer.yahoo.com/weather/))
+ Show the "current" conditions for New York:
  + Location (ie. New York, NY, USA)
  + Current weather description (ie. sunny)
  + Current temperature
  + Today's high temperature
  + Today's low temperature
+ Allow the user to toggle more data in the current conditions area:
    + Wind Speed
    + Humidity
    + Pressure
    + Sunrise/Sunset Time
+ Show the 7 Day forecast as a multi-line chart (use any charting library you would like but it should be incorporated as an Angular Directive)
  + Y axis should show the High and Low temperature as separate lines
  + X axis should show 7 days (starting with the "current" day)
  + The chart should have a tool tip that when activated shows:
    + Day of the week
    + High temperature
    + Low temperature
    + Weather description (ie. Breezy)
+ __Bonus:__ Was this too easy? Want to make it a real app? Use the [Yahoo's Weather API](https://developer.yahoo.com/weather/) or [Open Weather API](https://openweathermap.org/api) with the default location set to New York, NY, and allow the user to change the location by zip code.

## My (Justin Thomas) Notes On Project
+ I opted to use the WorldWeatherOnline Weather API since Yahoo's API is no longer stable and OpenWeatherMap's daily forecast is only available under their subscription based APIs. Anyone can sign up for a premium key that is free for about 2 months, so I'd advise future candidates to get one for this project.
+ I used Charts.js and Angular Charts to create the multi-line graph of the forecast data
+ Overall most of the time on this project was spent on styling, searching/messing around with weather APIs, and learning the ins and outs of Charts.js (though there's still a lot more for me to learn).
+ The actual creation and wiring of components, controllers, routes, and services was pretty straightforward. Regardless, this project was a good opportunity for me to practice design.
+ Speaking of components, I made the line graph section a component rather than a directive since there was no need to use link functions to modify the DOM and/or add event listeners.
+ First time using Bootstrap (usually used MaterializeCSS for my projects). Wasn't a bad experience using it, however it's specialized tags and attributes makes its components/css a bit restrictive.
+ I used Angular 1.5.8 as provided in the zip file. While the actual file is not in the repo, the package.json and yarn.lock files both list it as a dependency.
+ Project is just an Angular front-end, so you'll have to run "python -m SimpleHTTPServer" to get it started.
