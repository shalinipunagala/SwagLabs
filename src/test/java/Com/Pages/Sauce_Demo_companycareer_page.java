package Com.Pages;




import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import Com.Excel.Excel_utility;

public class Sauce_Demo_companycareer_page  {

	WebDriver driver;
	By username= By.id("user-name");
	By password=By.id("password");
	By login=By.xpath("//*[@id=\"login_button_container\"]/div/form/input[3]");
    By option=By.xpath("//*[@id=\"menu_button_container\"]/div/div[3]/div/button");
	By About=By.id("about_sidebar_link");
	By company=By.linkText("Company");
	By career=By.linkText("Careers");

	
//Launch the required browser
		public void launchChrome(String browser) {
			try {
				if (browser.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Driver\\chromedriver.exe");
					driver = new ChromeDriver();
				}
				else if (browser.equalsIgnoreCase("firefox")) {
					System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\Driver\\geckodriver.exe");
						driver = new FirefoxDriver();
					} 
				else if (browser.equalsIgnoreCase("internetexplorer")) {
						System.setProperty("webdriver.ie.driver", "src\\test\\resources\\Driver\\IEDriverServer.exe");
						driver = new InternetExplorerDriver();
					}
					driver.manage().window().maximize();
					driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

				} catch (WebDriverException e) {
					System.out.println("browser cant be launched");
				}
			}

 //launching homepage
		public void homepage()
		{
			driver.get("https://www.saucedemo.com/");
			System.out.println(driver.getTitle());
		}
		
//login into home page		
		public void login() throws IOException, InterruptedException
		{
			Excel_utility excel= new Excel_utility();
			
			driver.findElement(username).sendKeys(excel.excel_username(1));
			Thread.sleep(2000);
		    driver.findElement(password).sendKeys(excel.excel_password(1));
		    Thread.sleep(2000);
		    driver.findElement(login).click();
		}
		
//checking company career field		
		public void About_company_career() throws InterruptedException
		{
			driver.findElement(option).click();
			Thread.sleep(2000);
			driver.findElement(About).click();
			Thread.sleep(2000);
			driver.findElement(company).click();
			Thread.sleep(2000);
			driver.findElement(career).click();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollBy(0,1000)");
			Thread.sleep(2000);
		}
		
//taking screenshot		
		public void screenshot(String path) throws IOException, InterruptedException
		{
		   TakesScreenshot ts=(TakesScreenshot)driver;
		   File src=ts.getScreenshotAs(OutputType.FILE);
		   FileUtils.copyFile(src,new File(path));					
    	}

//closing browser
		public void closebrowser() throws InterruptedException
		{
			Thread.sleep(3000);
			driver.close();
		}

}
