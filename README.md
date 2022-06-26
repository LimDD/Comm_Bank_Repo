# Comm_Bank_Repo

Automation Regression Testing with COVID19 The Game

Test one:

Test one was a test to check the login funcionality of the website through an automation selenium-webdriver solution. This allowed two String varaibles (username and passowrd) to be populated at a code level and then reach out to the website: https://responsivefight.herokuapp.com/. The test was to auto-populate the username and password with the String varaibles and automate the login of a user to test for interface issues leading up to the 'Start Game' screen.

To test this scenario out, users will populate their credentials in the Strings provided, then they will run the script (Please ensure the browser selenium-webdriver is catered to your specific browser) and then run a command in the terminal (using Visual Studio Code this was 'node tests/one.js). The browser will pop up and automate the following scenario above.

Test Outcome: Successful, the credentials were able to be populated as the returned String in the JS code, and then automatically lock onto the login button provided by the current solution.

Test Outcome: Successful, if a user had populated these variables with the incorrect credentails, this would display the 'Username or Password Incorrect' prompt provided by the current solution.

Enhancement: If a user has entered in credentials that have not been picked up by the database (DB), or if the DB can not find a match on the user, the user would be redirected to the 'Register' page to create an account auto-populating the credentials with what they had initailly tried to log in with. 

Note: Please note that a user must have created and registered an account before testing this functionality, this does not cater to users who have not registered.

Test Two:

Test two was the screen followed after loggin into COVID19 The Game, users would have the only option to 'Start Game' and proceed into the questionaire. This  test was more for a internal test using automation to check the unexpected issue with proceeding into the game encountered previously (A bug was recommeneded).

Test Outcome: Successful, the user was able to proceed passed the 'Start Game' functionality into the next page which displayed a warning before proceeding through the game as per the current solution.

Note: This test was purely for my internal test as I had issues with the 'Start Game' button when I first attempted the test. I suspect this was a cache issue with the browser I was using so I had to clear my cache and grids on my browser to proceed. This test was to see the automation bypass this error.

Test Three:

Test three was user interface whilst in the game, if a user had proceeded through to this stage, they would be able to see the correct/incorrect answers being selected automatically and then the screen would redirect them back to the Home Page where they would need to re-enter their credentials (or follow test ones scenario). 

To test this scenario out, users would have needed to proceed through the previous two steps so that the credentials have been populated, and then they will be able to proceed through this test to see outcomes of the questionaire provided.

Test Outcome: Successful, the user was able to reach the first question once they had followed the prompts (Automation would have directed them), but the first question was unable to be displayed. No ID was able to be traced, therefore a button could not be automated through this scenario.

Test Outcome: Fail, due to automation regression testing, the HTTPS for this game broke as the page would no longer display the first question. This was only an issue in automation testing, upon testing manually (user interaction) this had proceeded as expected per the current solution.

Test Outcome: Failed, was unable to proceed passed the 'Start' by.ID window pop up to proceed through to the questions.

Test Four:

Test four was used to display the leaderboard which is provided once a user has completed the test. This page was a quick test to display the leaderboard and proceed through the page into the Home page for COVID19 THE GAME

Test outcome: Successful, Users were able to view their total score on the leaderboard.

Enhancement: Once a user has completed the game and has proceeded passed this board, they are no longer able to continue playing the game as there is a looping error. Enhancement to create a new set of questions which will allow the user to then be redirected into the game again (if they had selected 'Start Game') and then get a better score than the standard 2208 accumulated by the current solution.
