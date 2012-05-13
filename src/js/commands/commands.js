(function(window) {

	window.example.commands.setupViews = function()
	{
		window.example.commands.addDigitalClock();
		window.example.commands.addAnalogClock();
		
		var tools = new window.example.views.Tools( document.getElementById("tools") );
	}

	window.example.commands.addDigitalClock = function() {
		var clock = new window.example.views.DigitalClock( document.getElementById("coreView") );
	}

	window.example.commands.addAnalogClock = function() {
		var clock = new window.example.views.AnalogClock( document.getElementById("coreView") );
	}

	window.example.commands.startTimer = function() {
		var eventBus = window.injector.getSingleton( window.EventBus );
		
		var tick = function() {
			eventBus.dispatchEvent( { type: 'tick' } );
		}
		
		var model = window.injector.getSingleton(window.example.models.Clock);
		model.ticker = setInterval( tick, 1000 );
	}

	window.example.commands.stopTimer = function() {
		var model = window.injector.getSingleton(window.example.models.Clock);
		clearInterval( model.ticker );
	}

}(window));