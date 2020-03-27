package Com.Stepdefinition;

import java.io.IOException;

import Com.Pages.Sauce_Demo_companycareer_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sauce_Demo_companycareer_stepdefinition {
 
	Sauce_Demo_companycareer_page step =new Sauce_Demo_companycareer_page();
	
	@Given("^launching  the chrome application$")
	public void launching_the_chrome_application() {
	 step.launchChrome("chrome");	
	}

	@When("^opens the Sauce_demo Home page$")
	public void opens_the_Sauce_demo_Home_page() {
		step.homepage();
	}

	@Then("^login  the home page$")
	public void login_the_home_page() throws IOException, InterruptedException {
		step.login();
	}

	@Then("^Select any field in about$")
	public void select_any_field_in_about() throws InterruptedException, IOException {
		step.About_company_career();
		step.screenshot("src\\test\\resources\\Screenshot\\company_career.png");
	}

	@Then("^close browser$")
	public void close_browser() throws InterruptedException {
	    step.closebrowser();
	}

}
