package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.Color;

public class HomePage {
    private ChromeDriver driver;
    public HomePage(ChromeDriver driver){
        this.driver=driver;
    }
    private By headerText =By.tagName("header");
    private By eventName = By.name("eventName");
    private By eventDate = By.name("eventDate");
    private By eventTime = By.name("eventTime");
    private By addButton = By.cssSelector(".MuiFab-root");
    private By containerButton = By.cssSelector(".noteContainer button");//("button[style='font-size:40px']");
    private By notecontainer = By.className("noteContainer");
    private By secondsText = By.cssSelector(".seconds");
    //private By color = By.cssSelector(".color");
    public String getHeaderText(){
        return driver.findElement(headerText).getText();
    }
    public String getHeaderColor(){
        String rgba= driver.findElement(headerText).getCssValue("background-color");
        String hex = Color.fromString(rgba).asHex();
        return hex;
    }
    public String getTimeDisplay(){
        return driver.findElement(eventTime).getCssValue("display");
    }
    public void clickEventName(){
        driver.findElement(eventName).click();
    }
    public void clickEventTime(){
        driver.findElement(eventTime).click();
    }
    public void enterEventName(){
        entertext("Party",eventName);
    }
    public void enterEventDate(){
        entertext("05202023",eventDate);
    }
    public void enterEventTime(){
        entertext("0900PM",eventTime);
    }
    public void clickAddButton(){
        driver.findElement(addButton).click();
    }
    public void clickDeleteButton(){
        driver.findElement(containerButton).click();
    }
    public void entertext(String text, By by){
        driver.findElement(by).sendKeys(text);
    }
    public String getEventText(){
        return driver.findElement(eventName).getAttribute("value");
    }
    public int getSeconds(){
        return Integer.parseInt(driver.findElement(secondsText).getText());
    }
    public int getTimerContainers(){
        return driver.findElements(notecontainer).size();
    }

}
