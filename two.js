//write a const variable to access the selenium webdriver for testing
const {Builder, By, Key, logging, WebElement} = require ("selenium-webdriver");
//Function used to house all test code.
async function example(){

    //Enter in the site you are wanting to target
    var site = "https://responsivefight.herokuapp.com/covid";
    
    //Launch the firefox browser using the variable driver
    let driver = await new Builder().forBrowser("firefox").build();

    //Navigate to the COVID19 The Game Home Page
    await driver.get(site)
    await driver.manage().window().maximize();

    //User creation
    await driver.findElement(By.id("news")).click();
    
    //close the browser
    //await driver.quit();
}
example()
