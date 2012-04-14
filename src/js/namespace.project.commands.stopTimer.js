/**
 * Stops the clock ticker
 */
namespace.project.commands.stopTimer = function() {
	var model = injector.getSingleton(models.Clock);
	clearInterval( model.ticker );
}