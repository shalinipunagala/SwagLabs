package Com.Stepdefinition;

import java.io.IOException;

import Com.Pages.Sauce_Demo_addtocart_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sauce_Demo_Addcart_Stepdefinition {
	Sauce_Demo_addtocart_page step =new Sauce_Demo_addtocart_page();
	@Given("^launch the chrome application$")
	public void launch_the_chrome_application() {
		step.launchChrome("chrome");
	}

	@When("^open the Sauce_demo Home page$")
	public void open_the_Sauce_demo_Home_page() {
		step.homepage();
	}

	@Then("^user login the home page$")
	public void user_login_the_home_page() throws IOException, InterruptedException {
		step.login();
	}

	@Then("^Add to cart$")
	public void add_to_cart() throws InterruptedException, IOException  {
	    step.addcart();
	   step.screenshot("src\\test\\resources\\Screenshot\\addcart.png");
	}

	@Then("^Closing the browser$")
	public void closing_the_browser() throws InterruptedException {
		step.closebrowser();
	}

}
