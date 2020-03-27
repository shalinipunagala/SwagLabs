package Com.Stepdefinition;

import java.io.IOException;

import Com.Pages.Sauce_Demo_login_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sauce_Demo_login_Stepdefinition {
	
		
		Sauce_Demo_login_page step=new Sauce_Demo_login_page();
	
		
		@Given("^the user launch the chrome application$")
		public void the_user_launch_the_chrome_application()  {
		    step.launchChrome("chrome");
		    
		}

		@When("^the user open the Sauce_demo Home page$")
		public void the_user_open_the_Sauce_demo_Home_page()   {
			step.homepage();
		
		}

		@Then("^The user login using \"([^\"]*)\" and \"([^\"]*)\" with vaild details$")
		public void the_user_login_using_and_with_vaild_details(String arg1, String arg2) throws IOException, InterruptedException {
			step.signin(arg1,arg2,"src\\test\\resources\\Screenshot\\login.png");
		}

		@Then("^close the browser$")
		public void close_the_browser() throws InterruptedException  {
		    step.closebrowser();
			}

}

