package FunctionalityTest;

import base.BaseTests;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;


public class CreationTest extends BaseTests {
    @Test //Enterting an Event name and ensuring value is registered.
    public void testEventName(){
        homepage.clickEventName();
        homepage.enterEventName();
        assertEquals(homepage.getEventText(),"Party");
    }
    //Entering event date and time. Checking if Timer is displayed properly.
    @Test(dependsOnMethods = {"testEventName"})
    public void testEventDate(){
        homepage.enterEventDate();
        homepage.enterEventTime();
        assertEquals(homepage.getTimeDisplay(),"flex");
    }
    //Adding event and validating timer is computed
    @Test(dependsOnMethods = {"testEventDate"})
    public void createTimerTest(){
        homepage.clickAddButton();
        assertTrue(homepage.getSeconds()>=0);
    }
    @Test(dependsOnMethods = {"createTimerTest"})
    public void deleteTimerTest(){
        int containersBefore = homepage.getTimerContainers();
        homepage.clickDeleteButton();
        int containersAfter = homepage.getTimerContainers();
        assertTrue(containersBefore>containersAfter, "Container has not been removed successfully");
    }
}
