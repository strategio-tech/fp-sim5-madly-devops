package Display;

import base.BaseTests;
import org.testng.annotations.Test;
import pages.HomePage;

import static org.testng.Assert.assertEquals;

public class DisplayTest extends BaseTests {
    @Test
    public void testHeaderDisplay(){
        assertEquals(homepage.getHeaderText(),"Timey");
        assertEquals(homepage.getHeaderColor(),"#34be82");
    }
    @Test
    public void testCreateAnimation(){
        homepage.clickEventName();
        assertEquals(homepage.getTimeDisplay(),"flex");
    }
}
