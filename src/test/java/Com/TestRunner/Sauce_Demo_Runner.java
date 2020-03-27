package Com.TestRunner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\resources\\Feature\\Swaglabs.feature",
		//plugin = {"pretty", "html:reports/cucumber-html-report"},
		//plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport"},
	    plugin = {"pretty","html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/cucumber-reports/report.html"},

		//tags = {"@TC01_Login_SauceDemo"},
		glue = {"Com.Stepdefinition"},
		monochrome = true
		)
public class Sauce_Demo_Runner 
{
	@AfterClass
   public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/test/resources/TestData/extend-config.xml");
    }
}