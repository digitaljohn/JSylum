/**
 * Demo Context
 */


(function(window) {

var ExampleContext = function() {
  if(window.launched) this.initialize();
}

var p = ExampleContext.prototype = new window.Context();

	//p.view;

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
		
		// Adding views to the main view then start
		window.example.commands.setupViews();
		window.example.commands.startTimer();
	}

window.ExampleContext = ExampleContext;
}(window));


/*

example.Context = JSylum.Context.extend({

	init: function(){
		this._super();
		
		// Command Map
		this.eventBus.mapEvent('addDigitalClock', example.commands.addDigitalClock);
		this.eventBus.mapEvent('addAnalogClock', example.commands.addAnalogClock);
	
		// View Mediators
		this.mediatorMap.mapView(example.views.AnalogClock, example.mediators.Clock);
		this.mediatorMap.mapView(example.views.DigitalClock, example.mediators.Clock);
		this.mediatorMap.mapView(example.views.Tools, example.mediators.Tools);
		
		// Singleton Models
		JSylum.injector.mapSingleton(example.models.Clock);
		
		// Adding views to the main view then start
		example.commands.setupViews();
		example.commands.startTimer();
	}
	
});

*/