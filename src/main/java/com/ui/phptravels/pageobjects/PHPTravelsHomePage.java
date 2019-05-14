package com.ui.phptravels.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.phptravels.uiframework.BasePage;

public class PHPTravelsHomePage extends BasePage {

	public PHPTravelsHomePage(WebDriver driver) {
		super(driver);
	}

	@FindBy(xpath = "//*[@id='primaryContact_name']")
	public static WebElement contactNameTextField;

	@FindBy(xpath = "//span[@class='select2-chosen' and text()='Search by Hotel or City Name']")
	public static WebElement cityNameField;
 
	@FindBy(xpath = "//*[@id='select2-drop']/div/input")
	public static WebElement cityNameTextField;

	@FindBy(xpath = "//*[@id='dpd1']/div/input")
	public static WebElement checkInDateTextFeild;

	@FindBy(xpath = "//*[@id='dpd2']/div/input")
	public static WebElement checkOutDateTextFeild;

	@FindBy(xpath = "//*[@id='travellersInput']")
	public static WebElement peopleInfoTextFeild;

	@FindBy(xpath = "//*[@id='hotels']/form/div[5]/button")
	public static WebElement searchButton;

	@FindBy(xpath = "//*[@id='select2-drop']/ul/li/ul/li[1]")
	//*[@id='select2-drop']/ul/li/ul/li[1]
	public static WebElement selectLocation;

 
}
