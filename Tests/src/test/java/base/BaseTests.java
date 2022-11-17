package base;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import pages.HomePage;

import static org.testng.Assert.assertEquals;

public class BaseTests {
    private ChromeDriver driver;
    protected HomePage homepage;
    @BeforeClass
    public void setup(){
        System.setProperty("webdriver.chrome.driver","resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/");
        homepage = new HomePage(driver);
    }
}
