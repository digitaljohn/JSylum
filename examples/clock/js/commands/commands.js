(function(window) {

	var c = {};

	c.setup = function()
	{
		example.commands.setupViews();
		example.commands.startTimer();
	}

	c.setupViews = function()
	{
		var header = new example.views.Header( document.getElementById("header") );

		example.commands.addAnalogClock();
		example.commands.addDigitalClock();
		
		var tools = new example.views.Tools( document.getElementById("tools") );
	}

	c.addDigitalClock = function() {
		var clock = new example.views.DigitalClock( document.getElementById("clocks") );
	}

	c.addAnalogClock = function() {
		var clock = new example.views.AnalogClock( document.getElementById("clocks") );
	}

	c.startTimer = function() {
		var eventBus = injector.getSingleton( EventBus );
		
		var tick = function() {
			eventBus.dispatchEvent( { type: 'tick' } );
		}
		
		var model = injector.getSingleton(example.models.Clock);
		model.ticker = setInterval( tick, 1000 );
	}

	c.stopTimer = function() {
		var model = injector.getSingleton(example.models.Clock);
		clearInterval( model.ticker );
	}

window.example.commands = c;
}(window));