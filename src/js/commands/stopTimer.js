/**
 * Stops the clock ticker
 */
example.commands.stopTimer = function() {
	var model = JSylum.injector.getSingleton(example.models.Clock);
	clearInterval( model.ticker );
}