/**
 * Stops the clock ticker
 */
namespace.commands.stopTimer = function() {
	var model = JSylum.injector.getSingleton(models.Clock);
	clearInterval( model.ticker );
}