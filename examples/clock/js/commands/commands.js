(function(window) {

	var c = {};

	// Main Application setup function, called from the Context
	c.setup = function()
	{
		// Run a couple of commands
		example.commands.setupViews();
		example.commands.startTimer();
	}

	// Create the initial Views
	c.setupViews = function()
	{
		// Create a Header View and pass in a reference to where it should be placed
		var header = new example.views.Header( document.getElementById("header") );

		// Create the Tools View pass in a reference to where it should be placed
		var tools = new example.views.Tools( document.getElementById("tools") );

		// Create the Status View pass in a reference to where it should be placed
		var status = new example.views.Status( document.getElementById("status") );

		// Create two clocks
		example.commands.addAnalogClock();
		example.commands.addDigitalClock();
	}

	// Adds a Digital Clock to the clocks div
	c.addDigitalClock = function() {
		var clock = new example.views.DigitalClock( document.getElementById("clocks") );
	}

	// Adds a Analog Clock to the clocks div
	c.addAnalogClock = function() {
		var clock = new example.views.AnalogClock( document.getElementById("clocks") );
	}


	// Starts the clock ticking
	c.startTimer = function() {
		// Get the event bus from the injector
		var eventBus = injector.getSingleton( EventBus );
		
		// Create a tick function that dispatches an event through the event bus
		var tick = function() {
			eventBus.dispatchEvent( { type: 'tick' } );
		}
		
		// Store a reference to the 'interval' so we can stop it later
		var model = injector.getSingleton(example.models.Clock);
		model.ticker = setInterval( tick, 1000 );
	}

	// Stop the clock from ticking
	c.stopTimer = function() {
		var model = injector.getSingleton(example.models.Clock);
		clearInterval( model.ticker );
	}

window.example.commands = c;
}(window));