/**
 * Demo Context
 */


(function(window) {

var ExampleContext = function() {
  this.initialize();
}

var p = ExampleContext.prototype = new JSylum();

	p.view;

	p.Context_initialize = p.initialize;
	p.initialize = function() {
		this.Context_initialize();

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