/**
 * Generic onReady function called from all pages.
 */

namespace.Context = JSylum.Context.extend({

	init: function(){
		this._super();
		
		// Singleton Models
		injector.mapSingleton(models.Clock);	
	
		// View Mediators
		this.mediatorMap.mapView(views.AnalogClock, mediators.Clock);
		this.mediatorMap.mapView(views.DigitalClock, mediators.Clock);
		this.mediatorMap.mapView(views.Tools, mediators.Tools);
		
		// Command Map
		this.commandMap.mapEvent( 'addDigitalClock', commands.addDigitalClock);
		this.commandMap.mapEvent( 'addAnalogClock', commands.addAnalogClock);
		
		// Adding views to the main view then start
		commands.setupViews();
		commands.startTimer();
	}
	
});