/**
 * Demo Context
 */

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