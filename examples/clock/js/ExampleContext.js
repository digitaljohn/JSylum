(function(window) {

var ExampleContext = function() {
	this.initialize();
}

var p = ExampleContext.prototype = new window.Context();

	p.Context_initialize = p.initialize;
	p.initialize = function() {
		this.Context_initialize();

		// Map Events to Commands
		this._eventBus.mapEvent('addDigitalClock', example.commands.addDigitalClock);
		this._eventBus.mapEvent('addAnalogClock', example.commands.addAnalogClock);
	
		// Map Views to their Mediators
		this._mediatorMap.mapView(example.views.AnalogClock, example.mediators.Clock);
		this._mediatorMap.mapView(example.views.DigitalClock, example.mediators.Clock);
		this._mediatorMap.mapView(example.views.Tools, example.mediators.Tools);
		this._mediatorMap.mapView(example.views.Status, example.mediators.Status);
		
		// Define any Singleton instances
		injector.mapSingleton(example.models.Clock);

		// Set the current language, this could be handled in another way, e.g. grab lang from URL param?
		lang.setContent(example.i18n);
		
		// Run the setup command and wonderful things happen!
		example.commands.setup();
	}

window.ExampleContext = ExampleContext;
}(window));
