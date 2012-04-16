/**
 * Starts the clock ticker
 */ 
namespace.commands.startTimer = function() {
	var tick = function() {
		JSylum.eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var model = JSylum.injector.getSingleton(models.Clock);
	model.ticker = setInterval( tick, 1000 );
}