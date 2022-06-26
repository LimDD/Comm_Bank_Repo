//write a const variable to access the selenium webdriver for testing
const {Builder, By, Key, logging, WebElement} = require ("selenium-webdriver");
//Function used to house all test code.
describe("COVID-19 THE GAME - LEADERBOARD", function(){
    it("Successful, COVID-19 THE GAME - LEADERBOARD was found ", async function(){   
        
        //Enter in the site you are wanting to target
        var site = "https://responsivefight.herokuapp.com/leaderboard";
        
        //Launch the firefox browser using the variable driver
        let driver = await new Builder().forBrowser("firefox").build();
    
        //Navigate to the COVID19 The Game Home Page
        await driver.get(site)
        await driver.manage().window().maximize();
    
        //Proceed out of the leaderboard into the home page
        await driver.findElement(By.id("leaderboard_link")).click();
        //Bug unable to proceed after start button, can not load next page through automation.
    });
});