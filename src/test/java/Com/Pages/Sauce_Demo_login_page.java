package Com.Pages;


import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class Sauce_Demo_login_page
{
	WebDriver driver;
	
	By user= By.id("user-name");
	By Pass=By.id("password");
	By login=By.xpath("//*[@id=\"login_button_container\"]/div/form/input[3]");
    
	By logout=By.xpath("//*[@id=\"menu_button_container\"]/div/div[3]/div/button");
    By clicklogout=By.xpath("//*[@id=\"logout_sidebar_link\"]");
    
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


//login and logout the home page
	public void signin(String username,String password,String path) throws IOException, InterruptedException
	{   
		
		      driver.findElement(user).sendKeys(username);
		      Thread.sleep(2000);
		      driver.findElement(Pass).sendKeys(password);
		      Thread.sleep(2000);
		      driver.findElement(login).click();
		      Thread.sleep(2000);
		
//taking screenshot   
		      TakesScreenshot ts=(TakesScreenshot)driver;
		  	  File src=ts.getScreenshotAs(OutputType.FILE);
		  	  FileUtils.copyFile(src,new File(path));
		  	  driver.findElement(logout).click();
		      Thread.sleep(2000);
		      driver.findElement(clicklogout).click();				
		      
	}
	

//closing browser
	public void closebrowser() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.close();
	}


}
