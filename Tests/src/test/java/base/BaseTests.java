package base;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.BeforeClass;
import pages.HomePage;

import static org.testng.Assert.assertEquals;

public class BaseTests {
    private ChromeDriver driver;
    protected HomePage homepage;
    @BeforeClass
    public void setup(){
        var driverExtension = ".exe";
        if(System.getenv("RUNNER_OS")!=null){
            driverExtension="-linux";
        };
        System.setProperty("webdriver.chrome.driver","resources/chromedriver"+driverExtension);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        var headless = Boolean.parseBoolean(System.getenv("HEADLESS_CHROME")) | false;
        options.setHeadless(headless);
        driver = new ChromeDriver(options);
        driver.get("https://63768cca14b17c0ba2094422--lucent-melba-4b5cf6.netlify.app/");
        homepage = new HomePage(driver);
    }
}
