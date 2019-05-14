$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PHPTravels.feature");
formatter.feature({
  "line": 2,
  "name": "PHP Travels verifying Hotel rating\u0027s",
  "description": "",
  "id": "php-travels-verifying-hotel-rating\u0027s",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@phptravels"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "This scenario is used to verify the ratings of hotels present in Melbourne and Validate them",
  "description": "",
  "id": "php-travels-verifying-hotel-rating\u0027s;this-scenario-is-used-to-verify-the-ratings-of-hotels-present-in-melbourne-and-validate-them",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@verifyHotelRatingsInMelbourne"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# Landing page"
    }
  ],
  "line": 8,
  "name": "User will launch Landing page using Landing page URL \"\u003cLandingURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User will enter \"\u003clocation\u003e\" in to Location search form field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User will enter checkIn date \"\u003ccheckIn\u003e\" in to Check in input form field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will enter checkOut date \"\u003ccheckOut\u003e\" in to Check Out input form field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User will enter Number of occupancies \"\u003coccupancies\u003e\" in to Occupancies input form field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User will Click on search button and wait for search results",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User will capture the ratings of the hotel and quits the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will Click on the first hotel on displayed results",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "php-travels-verifying-hotel-rating\u0027s;this-scenario-is-used-to-verify-the-ratings-of-hotels-present-in-melbourne-and-validate-them;",
  "rows": [
    {
      "cells": [
        "LandingURL",
        "location",
        "checkIn",
        "checkOut",
        "occupancies"
      ],
      "line": 19,
      "id": "php-travels-verifying-hotel-rating\u0027s;this-scenario-is-used-to-verify-the-ratings-of-hotels-present-in-melbourne-and-validate-them;;1"
    },
    {
      "cells": [
        "https://www.phptravels.net",
        "Melbourne",
        "01/06/2019",
        "07/06/2019",
        "2 Adults 2 Child"
      ],
      "line": 20,
      "id": "php-travels-verifying-hotel-rating\u0027s;this-scenario-is-used-to-verify-the-ratings-of-hotels-present-in-melbourne-and-validate-them;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "This scenario is used to verify the ratings of hotels present in Melbourne and Validate them",
  "description": "",
  "id": "php-travels-verifying-hotel-rating\u0027s;this-scenario-is-used-to-verify-the-ratings-of-hotels-present-in-melbourne-and-validate-them;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@verifyHotelRatingsInMelbourne"
    },
    {
      "line": 1,
      "name": "@phptravels"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# Landing page"
    }
  ],
  "line": 8,
  "name": "User will launch Landing page using Landing page URL \"https://www.phptravels.net\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User will enter \"Melbourne\" in to Location search form field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User will enter checkIn date \"01/06/2019\" in to Check in input form field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will enter checkOut date \"07/06/2019\" in to Check Out input form field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User will enter Number of occupancies \"2 Adults 2 Child\" in to Occupancies input form field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User will Click on search button and wait for search results",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User will capture the ratings of the hotel and quits the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will Click on the first hotel on displayed results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net",
      "offset": 54
    }
  ],
  "location": "PHPTravelsTests.user_will_launch_Landing_page_using_Landing_page_URL(String)"
});
formatter.result({
  "duration": 11076952926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne",
      "offset": 17
    }
  ],
  "location": "PHPTravelsTests.user_will_enter_in_to_Location_search_form_field(String)"
});
formatter.result({
  "duration": 2482853689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/06/2019",
      "offset": 30
    }
  ],
  "location": "PHPTravelsTests.user_will_enter_checkIn_date_in_to_Check_in_input_form_field(String)"
});
formatter.result({
  "duration": 228733009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/06/2019",
      "offset": 31
    }
  ],
  "location": "PHPTravelsTests.user_will_enter_checkOut_date_in_to_Check_Out_input_form_field(String)"
});
formatter.result({
  "duration": 264180692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Adults 2 Child",
      "offset": 39
    }
  ],
  "location": "PHPTravelsTests.user_will_enter_Number_of_occupancies_in_to_Occupancies_input_form_field(String)"
});
formatter.result({
  "duration": 284458222,
  "status": "passed"
});
formatter.match({
  "location": "PHPTravelsTests.user_will_Click_on_search_button_and_wait_for_search_results()"
});
formatter.result({
  "duration": 58468295806,
  "status": "passed"
});
formatter.match({
  "location": "PHPTravelsTests.user_will_capture_the_ratings_of_the_hotel_and_quits_the_hotel()"
});
formatter.result({
  "duration": 185164365,
  "status": "passed"
});
formatter.match({
  "location": "PHPTravelsTests.user_will_Click_on_the_first_hotel_on_displayed_results()"
});
formatter.result({
  "duration": 7565306384,
  "status": "passed"
});
});