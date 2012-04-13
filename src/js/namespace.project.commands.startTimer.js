/**
 * Starts the clock ticker
 */ 
namespace.project.commands.startTimer = function() {
	var tick = function() {
		eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var m = injector.getSingleton(models.Clock);
	
	m.ticker = setInterval( tick, 1000 );
	
	tick();
}