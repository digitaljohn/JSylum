/**
 * Starts the clock ticker
 */ 
namespace.project.commands.startTimer = function() {
	var tick = function() {
		eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var model = injector.getSingleton(models.Clock);
	model.ticker = setInterval( tick, 1000 );
}