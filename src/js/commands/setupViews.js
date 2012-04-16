/**
 * Setups the initial views
 */
namespace.commands.setupViews = function()
{
	commands.addDigitalClock();
	commands.addAnalogClock();
	
	var tools = new views.Tools( document.getElementById("tools") );
}
