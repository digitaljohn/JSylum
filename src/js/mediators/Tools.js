
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.mediators.Tools = function( view ) {
	
	var self = this;

	this.view = view;
	
	this.view.addDigitalButton.onclick = function()
	{
		JSylum.eventBus.dispatchEvent( { type: 'addDigitalClock' } );
	}
	
	this.view.addAnalogButton.onclick = function()
	{
		JSylum.eventBus.dispatchEvent( { type: 'addAnalogClock' } );
	}
}
