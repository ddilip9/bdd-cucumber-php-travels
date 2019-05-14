/**
 * 
 */
package com.phptravels.stepdefinitions;

import java.util.List;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import com.phptravels.uiframework.HybridDriver;
import com.ui.phptravels.pageobjects.PHPTravelsHomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * @author
 *
 */

public class PHPTravelsTests extends HybridDriver {

	@BeforeClass
	public void beforeClass() {

		try {
			driver = setDriver();
		} catch (Exception e) {
			System.out.println("Error....." + e.getMessage());
		}
	}

	@Given("^User will launch Landing page using Landing page URL \"([^\"]*)\"$")
	public void user_will_launch_Landing_page_using_Landing_page_URL(String url) throws Throwable {
		driver = setDriver();
		new PHPTravelsHomePage(driver);

		launchURL(url);
	}

	@Then("^User will enter \"([^\"]*)\" in to Location search form field$")
	public void user_will_enter_in_to_Location_search_form_field(String location) throws Throwable {

		clickElement(PHPTravelsHomePage.cityNameField);
		enterValue(PHPTravelsHomePage.cityNameTextField, location);
		explicitWaitForDisplayed(PHPTravelsHomePage.selectLocation, 3000);

		Actions actions = new Actions(driver);
		WebElement subMenu = driver.findElement(By.xpath("//*[@id='select2-drop']/ul/li/ul/li[1]"));
		actions.moveToElement(subMenu);
		actions.click().build().perform();
	}

	@Then("^User will enter checkIn date \"([^\"]*)\" in to Check in input form field$")
	public void user_will_enter_checkIn_date_in_to_Check_in_input_form_field(String checkInDate) throws Throwable {
		enterValue(PHPTravelsHomePage.checkInDateTextFeild, checkInDate);
	}

	@Then("^User will enter checkOut date \"([^\"]*)\" in to Check Out input form field$")
	public void user_will_enter_checkOut_date_in_to_Check_Out_input_form_field(String checkOutDate) throws Throwable {
		enterValue(PHPTravelsHomePage.checkOutDateTextFeild, checkOutDate);
	}

	@Then("^User will enter Number of occupancies \"([^\"]*)\" in to Occupancies input form field$")
	public void user_will_enter_Number_of_occupancies_in_to_Occupancies_input_form_field(String peopleInfo)
			throws Throwable {
		PHPTravelsHomePage.peopleInfoTextFeild.clear();
		enterValue(PHPTravelsHomePage.peopleInfoTextFeild, peopleInfo);

	}

	@Then("^User will Click on search button and wait for search results$")
	public void user_will_Click_on_search_button_and_wait_for_search_results() throws Throwable {
		clickElement(PHPTravelsHomePage.searchButton);
	}

	@Then("^User will capture the ratings of the hotel and quits the hotel$")
	public void user_will_capture_the_ratings_of_the_hotel_and_quits_the_hotel() throws Throwable {

		List<WebElement> hotelNames = driver.findElements(
				By.xpath(" //h4[contains(@class, 'RTL go-text')]/following::i[contains(@class, 'star fa fa-star')]"));

		int totalCount = hotelNames.size();

		int withOutRatings = 0;
		int withRatings = 0;
		for (int i = 1; i <= 5; i++) {

			boolean result = driver.findElement(By.xpath(
					"(//h4[contains(@class, 'RTL go-text')]/following::i[@class= 'star fa fa-star'])[" + i + "]"))
					.isDisplayed();

			if (result) {
				withRatings++;
			} else {
				withOutRatings++;
			}
		}

		System.out.println("Hotel ratings without star - >" + withOutRatings);
		System.out.println("Hotel ratings with star - >" + withRatings);

	}

	@Then("^User will Click on the first hotel on displayed results$")
	public void user_will_Click_on_the_first_hotel_on_displayed_results() throws Throwable {

		List<WebElement> enabledButtons = driver
				.findElements(By.xpath("//button[@class='btn btn-primary br25 loader loader btn-block']"));
		if (!enabledButtons.isEmpty()) {
			enabledButtons.get(0).click();
		}
		closeWindow();
	}
}
