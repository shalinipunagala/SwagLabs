package Com.Stepdefinition;

import java.io.IOException;

import Com.Pages.Sauce_Demo_Invalid_login_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sauce_Demo_Invalidlogin_Stepdefinition {

	Sauce_Demo_Invalid_login_page step=new Sauce_Demo_Invalid_login_page(); 

	@Given("^the user launching the chrome application$")
	public void the_user_launching_the_chrome_application() {
		step.launchChrome("chrome");
	}

	@When("^the user opens the Sauce_demo Home page$")
	public void the_user_opens_the_Sauce_demo_Home_page() {
		step.homepage();
	}

	@Then("^the user login using invalid username and password$")
	public void the_user_login_using_invalid_username_and_password() throws IOException, InterruptedException {
		step.Invalidlogin();
		step.screenshot("src\\test\\resources\\Screenshot\\invalid_login.png");
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws InterruptedException  {
		step.closebrowser();
	}
}
