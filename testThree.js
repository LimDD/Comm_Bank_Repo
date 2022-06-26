//write a const variable to access the selenium webdriver for testing
const {Builder, By, Key, logging, WebElement} = require ("selenium-webdriver");
//Function used to house all test code.

    describe("No Second Chances!", function(){ 
        it("Failed, No Second Chances! was found", async function(){
                //Enter in the site you are wanting to target
            var site = "https://responsivefight.herokuapp.com/news";
            
            //Launch the firefox browser using the variable driver
            let driver = await new Builder().forBrowser("firefox").build();

            //Navigate to the COVID19 The Game Home Page
            await driver.get(site)
            await driver.findElement(By.id("start")).click();
            //Bug unable to proceed after start button, can not load next page through automation.
            await driver.findElement(By.id("answer_1")).click();
            await driver.findElement(By.id("continue")).click();
            await driver.findElement(By.id("answer_2")).click();
        });
    });
