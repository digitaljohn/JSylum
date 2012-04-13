/**
 * Add Clock
 */
namespace.project.commands.addClock = function()
{
	$("#coreView").append("<h2 class='view-clock' data-view='clock'><span class='display'></span><a href='#' class='close'>X</a></h2>");
	
	mediatorMap.mediate();
	
}