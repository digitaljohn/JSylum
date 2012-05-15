/**
 * Demo Context
 */


(function(window) {

var ExampleContext = function() {
	this.initialize();
}

var p = ExampleContext.prototype = new window.Context();

	p.Context_initialize = p.initialize;
	p.initialize = function() {
		this.Context_initialize();

		this._eventBus.mapEvent('addDigitalClock', example.commands.addDigitalClock);
		this._eventBus.mapEvent('addAnalogClock', example.commands.addAnalogClock);
	
		// View Mediators
		this._mediatorMap.mapView(example.views.AnalogClock, example.mediators.Clock);
		this._mediatorMap.mapView(example.views.DigitalClock, example.mediators.Clock);
		this._mediatorMap.mapView(example.views.Tools, example.mediators.Tools);
		
		// Singleton Models
		injector.mapSingleton(example.models.Clock);

		lang.setContent(example.i18n);
		
		// Run the setup command
		example.commands.setup();
	}

window.ExampleContext = ExampleContext;
}(window));
