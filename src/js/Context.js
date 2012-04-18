/**
 * Demo Context
 */

namespace.Context = JSylum.Context.extend({

	init: function(){
		this._super();
		
		// Command Map
		this.eventBus.mapEvent( 'addDigitalClock', commands.addDigitalClock);
		this.eventBus.mapEvent( 'addAnalogClock', commands.addAnalogClock);
	
		// View Mediators
		this.mediatorMap.mapView(views.AnalogClock, mediators.Clock);
		this.mediatorMap.mapView(views.DigitalClock, mediators.Clock);
		this.mediatorMap.mapView(views.Tools, mediators.Tools);
		
		// Singleton Models
		injector.mapSingleton(models.Clock);
		
		// Adding views to the main view then start
		commands.setupViews();
		commands.startTimer();
	}
	
});