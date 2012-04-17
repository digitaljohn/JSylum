/**
 * Starts the clock ticker
 */ 
namespace.commands.startTimer = function() {
	var eventBus = injector.getSingleton(EventBus);
	
	var tick = function() {
		eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var model = injector.getSingleton(models.Clock);
	model.ticker = setInterval( tick, 1000 );
}