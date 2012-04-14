
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Tools = function( view ) {
	
	var self = this;

	this.view = view;
	this.addButton = $('.add_digital_clock', this.view);
	
	this.addButton.bind('click', function(){
		eventBus.dispatchEvent( { type: 'addDigitalClock' } );
	});
	
	this.destroy = function()
	{
		
	}
}
