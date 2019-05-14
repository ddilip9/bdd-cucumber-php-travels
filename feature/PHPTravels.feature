@phptravels
Feature: PHP Travels verifying Hotel rating's


@verifyHotelRatingsInMelbourne
Scenario Outline: This scenario is used to verify the ratings of hotels present in Melbourne and Validate them
# Landing page
	Given User will launch Landing page using Landing page URL "<LandingURL>"
	Then User will enter "<location>" in to Location search form field
	And User will enter checkIn date "<checkIn>" in to Check in input form field
	And User will enter checkOut date "<checkOut>" in to Check Out input form field
	And User will enter Number of occupancies "<occupancies>" in to Occupancies input form field
	Then User will Click on search button and wait for search results
	And User will capture the ratings of the hotel and quits the hotel
	Then User will Click on the first hotel on displayed results

	
Examples:
	|LandingURL					|location  |checkIn	   |checkOut     |occupancies      |
	|https://www.phptravels.net |Melbourne |01/06/2019 |07/06/2019   |2 Adults 2 Child |
	