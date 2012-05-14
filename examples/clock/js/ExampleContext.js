/**
 * Demo Context
 */


(function(window) {

var ExampleContext = function() {
  if(window.launched) this.initialize();
}

var p = ExampleContext.prototype = new window.Context();

	p.Context_initialize = p.initialize;
	p.initialize = function() {
		window.console.log("ExampleContext::initialize");

		this.Context_initialize();

		this._eventBus.mapEvent('addDigitalClock', window.example.commands.addDigitalClock);
		this._eventBus.mapEvent('addAnalogClock', window.example.commands.addAnalogClock);
	
		// View Mediators
		this._mediatorMap.mapView(window.example.views.AnalogClock, window.example.mediators.Clock);
		this._mediatorMap.mapView(window.example.views.DigitalClock, window.example.mediators.Clock);
		this._mediatorMap.mapView(window.example.views.Tools, window.example.mediators.Tools);
		
		// Singleton Models
		window.injector.mapSingleton(window.example.models.Clock);
		
		// Run the setup command
		window.example.commands.setup();
	}

window.ExampleContext = ExampleContext;
}(window));
