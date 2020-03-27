@SauceDemo
Feature: SauceDemo_Website
@TC01_Login_SauceDemo
Scenario Outline:Login in SauceDemo Website
Given the user launch the chrome application
When the user open the Sauce_demo Home page 
Then The user login using "<username>" and "<password>" with vaild details
Then close the browser

Examples: 

|username       	     |password	  |
|standard_user		     |secret_sauce|
|performance_glitch_user |secret_sauce|
|problem_user            |secret_sauce|

@TC02_InvalidLogin_SauceDemo
Scenario: Login in SauceDemo Website
Given the user launching the chrome application 
When the user opens the Sauce_demo Home page 
Then the user login using invalid username and password
Then Close the browser

@TC03_Add_to_cart
Scenario: Add products into the cart
Given launch the chrome application
When  open the Sauce_demo Home page
Then  user login the home page
Then Add to cart
Then Closing the browser


@TC04_Select_any_one_field_in_about
Scenario: Select  any one field in about
Given launching  the chrome application
When opens the Sauce_demo Home page
Then login  the home page
Then Select any field in about
Then close browser 
