/**
 * Stops the clock ticker
 */
namespace.project.commands.stopTimer = function() {
	var m = injector.getSingleton(models.Clock);
	clearInterval( m.ticker );
}