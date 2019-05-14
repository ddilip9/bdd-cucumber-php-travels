package com.phptravels.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "feature", dryRun = false, monochrome = true,
		glue = { "com.phptravels.stepdefinitions" }, plugin = { "pretty", "html:target/cucumber-reports",
				"json:target/cucumber-reports/Cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/htmlreports/report.html" }, tags = {
						"@phptravels" })
public class PhpTravelsRunnerTest {

}
