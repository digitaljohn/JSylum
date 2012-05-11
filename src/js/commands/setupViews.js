/**
 * Setups the initial views
 */
example.commands.setupViews = function()
{
	example.commands.addDigitalClock();
	example.commands.addAnalogClock();
	
	var tools = new example.views.Tools( document.getElementById("tools") );
}
