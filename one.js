//write a const variable to access the selenium webdriver for testing
const {Builder, By, Key, logging, WebElement} = require ("selenium-webdriver");
//Function used to house all test code.
async function example(){
    var username = "chris.lim";
    var password = "lim123";
    //Launch the firefox browser using the variable driver
    let driver = await new Builder().forBrowser("firefox").build();

    //Navigate to the COVID19 The Game Home Page
    await driver.get("https://responsivefight.herokuapp.com/")
    await driver.manage().window().maximize();

    //User creation
    await driver.findElement(By.id("login")).click();

    //enter user credentials to log into COVID19 THE GAME
    await driver.findElement(By.id("worrior_username")).sendKeys(username);
    await driver.findElement(By.id("worrior_pwd")).sendKeys(password);
    await driver.findElement(By.id("warrior")).click();
    await driver.findElement(By.id("start")).click();
    //close the browser
    //await driver.quit();
}
example()

