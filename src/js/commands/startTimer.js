/**
 * Starts the clock ticker
 */ 
example.commands.startTimer = function() {
	var eventBus = JSylum.injector.getSingleton(EventBus);
	
	var tick = function() {
		eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var model = JSylum.injector.getSingleton(example.models.Clock);
	model.ticker = setInterval( tick, 1000 );
}