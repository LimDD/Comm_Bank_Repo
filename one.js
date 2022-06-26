//write a const variable to access the selenium webdriver for testing
const {Builder, By, Key, logging, WebElement} = require ("selenium-webdriver");

//describe block to check the pass rate of the test
//Test One
describe("Login with your warrior name", function(){
   //it block 
   it("Successful, Login with your warrior name was found", async function(){
    //Enter in user credentials in the following String variables below.
    var username = "chris.lim";
    var password = "lim123";
    
    //Enter in the site you are wanting to target
    var site = "https://responsivefight.herokuapp.com/";
    
    //Launch the firefox browser using the variable driver
    let driver = await new Builder().forBrowser("firefox").build();

    //Navigate to the COVID19 The Game Home Page
    await driver.get(site)
    await driver.manage().window().maximize();

    //User creation
    if(username != "" && password != ""){
        await driver.findElement(By.id("login")).click();

        //Enter user credentials to log into COVID19 THE GAME
        await driver.findElement(By.id("worrior_username")).sendKeys(username);
        await driver.findElement(By.id("worrior_pwd")).sendKeys(password);
        
        await driver.findElement(By.id("warrior")).click();
        //Proceeding through the game into the question section of COVID19 The Game
        //Test Two
        describe("Continue your Journey", function(){
            it("Successful, Continue your Journey was found", async function(){
                
                //Enter in the site you are wanting to target
                var site = "https://responsivefight.herokuapp.com/covid";

                //Navigate to the COVID19 The Game Home Page
                await driver.get(site)

                //proceeding through the site into the COVID19 The Game
                await driver.findElement(By.id("news")).click();
                
                //Entering the game and begin answering questions
                describe("Enter At your own risk", function(){
                    it("Successful, Enter at your own risk? was found", async function(){
                        
                        //Enter in the site you are wanting to target
                        var site = "https://responsivefight.herokuapp.com/news";

                        //Navigate to the COVID19 The Game Home Page
                        await driver.get(site) 
                    });

                });
            });
        });
    }
    else{
        await driver.findElement(By.id("rego")).click();

        //If username is not blank, store user name from above varaible, and set password to default
            if(username != ""){
                await driver.findElement(By.id("uname")).sendKeys(username);
                await driver.findElement(By.id("pwd")).sendKeys("default");
                await driver.findElement(By.id("psw-repeat")).sendKeys("default");
                await driver.findElement(By.id("signupbtn")).click();

                describe("Continue your Journey", function(){
                    it("Successful, Continue your Journey was found", function(){
                    });
                });
            }
        //If password is not blank, store user name from above varaible, and set username to default
            else if(password !=""){
                await driver.findElement(By.id("uname")).sendKeys("default");
                await driver.findElement(By.id("pwd")).sendKeys(password);
                await driver.findElement(By.id("psw-repeat")).sendKeys(password);
                await driver.findElement(By.id("signupbtn")).click();

                describe("Continue your Journey", function(){
                    it("Successful, Continue your Journey was found", function(){
                    });
                });
            }
            else{
                await driver.findElement(By.class("cancelbtn")).click();
            }
        }
   }); 
});




