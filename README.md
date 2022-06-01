User Stories
============= 
	1.As a user, I would like to be able to use the app even if I’m not connected to the internet.
		1.Scenario One: Show cached data when there’s no internet connection
			* Given the user wants to use the app offline
			* When the user uses the app
			* Then the app uses any cached data to show any details on event
		2.Scenario Two: Show error when user changes the settings (city, time range)
			* Given there is no internet connection
			* When the user attempts to change settings
			* Then display error mess

	2.As a user I should be able to see an organized chart of dates and times for upcoming events

		1.Scenario One: Show a chart with the number of upcoming events in each city
			* Given user wants to see number of upcoming events
			* When user clicks on chart
			* Then chart gives them number of upcoming events per city

	3.As a user I want to be able to click on an event so that I will be able to expand the event and see more detail about that event.

		1.Scenario One: An event element is collapsed by default
			* Given user is on the main page
			* When nothing is being clicked
			* Then event details will remain collapsed
		2.Scenario Two: User can expand an event to see its details
			* Given user wants more details on event
			* When user clicks event
			* Then event expands for more details
		3.Scenario Three: User can collapse an event to hide its details
			* Given user wants to hide expanded details
			* When user clicks event again
			* Then event details collapse

	4.As a user I should be able to choose the number of events that I want to see so that I can manage the number of events on my screen

		1.Scenario One: When user hasn’t specified a number, 32 is the default number
			* Given user did not choose even number
			* When user searches for events near location
			* Then 32 events will be listed
		2.Scenario Two: User can change the number of events they want to see
			* Given user would like to choose number of events
			* When user clicks to enter new quantity 
			* Then user will be able to change number of events listed
