$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Swaglabs.feature");
formatter.feature({
  "line": 2,
  "name": "SauceDemo_Website",
  "description": "",
  "id": "saucedemo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login in SauceDemo Website",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Login_SauceDemo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "saucedemo-website;login-in-saucedemo-website;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "saucedemo-website;login-in-saucedemo-website;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "saucedemo-website;login-in-saucedemo-website;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 15,
      "id": "saucedemo-website;login-in-saucedemo-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login in SauceDemo Website",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Login_SauceDemo"
    },
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"standard_user\" and \"secret_sauce\" with vaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 23861001800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 2884375400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 22
    },
    {
      "val": "secret_sauce",
      "offset": 42
    }
  ],
  "location": "Sauce_Demo_login_Stepdefinition.the_user_login_using_and_with_vaild_details(String,String)"
});
formatter.result({
  "duration": 15166865900,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 3464565600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login in SauceDemo Website",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Login_SauceDemo"
    },
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"performance_glitch_user\" and \"secret_sauce\" with vaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 11602974800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 2563749000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 22
    },
    {
      "val": "secret_sauce",
      "offset": 52
    }
  ],
  "location": "Sauce_Demo_login_Stepdefinition.the_user_login_using_and_with_vaild_details(String,String)"
});
formatter.result({
  "duration": 20363159800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 3564197800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login in SauceDemo Website",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Login_SauceDemo"
    },
    {
      "line": 1,
      "name": "@SauceDemo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user login using \"problem_user\" and \"secret_sauce\" with vaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 12171485000,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.the_user_open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 2540559600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 22
    },
    {
      "val": "secret_sauce",
      "offset": 41
    }
  ],
  "location": "Sauce_Demo_login_Stepdefinition.the_user_login_using_and_with_vaild_details(String,String)"
});
formatter.result({
  "duration": 10735949300,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_login_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 3116870500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login in SauceDemo Website",
  "description": "",
  "id": "saucedemo-website;login-in-saucedemo-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC02_InvalidLogin_SauceDemo"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the user launching the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user opens the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user login using invalid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_Invalidlogin_Stepdefinition.the_user_launching_the_chrome_application()"
});
formatter.result({
  "duration": 11962507600,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Invalidlogin_Stepdefinition.the_user_opens_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 3520550600,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Invalidlogin_Stepdefinition.the_user_login_using_invalid_username_and_password()"
});
formatter.result({
  "duration": 9685005700,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Invalidlogin_Stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 3114968000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add products into the cart",
  "description": "",
  "id": "saucedemo-website;add-products-into-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC03_Add_to_cart"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "open the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user login the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_Addcart_Stepdefinition.launch_the_chrome_application()"
});
formatter.result({
  "duration": 12042982200,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Addcart_Stepdefinition.open_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 2445302800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Addcart_Stepdefinition.user_login_the_home_page()"
});
formatter.result({
  "duration": 12316866800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Addcart_Stepdefinition.add_to_cart()"
});
formatter.result({
  "duration": 26738771000,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_Addcart_Stepdefinition.closing_the_browser()"
});
formatter.result({
  "duration": 3098027500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Select  any one field in about",
  "description": "",
  "id": "saucedemo-website;select--any-one-field-in-about",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@TC04_Select_any_one_field_in_about"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "launching  the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "opens the Sauce_demo Home page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "login  the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Select any field in about",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Sauce_Demo_companycareer_stepdefinition.launching_the_chrome_application()"
});
formatter.result({
  "duration": 11226392600,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_companycareer_stepdefinition.opens_the_Sauce_demo_Home_page()"
});
formatter.result({
  "duration": 3039946400,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_companycareer_stepdefinition.login_the_home_page()"
});
formatter.result({
  "duration": 9552591700,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_companycareer_stepdefinition.select_any_field_in_about()"
});
formatter.result({
  "duration": 23363957800,
  "status": "passed"
});
formatter.match({
  "location": "Sauce_Demo_companycareer_stepdefinition.close_browser()"
});
formatter.result({
  "duration": 3732764600,
  "status": "passed"
});
});