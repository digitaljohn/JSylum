
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Tools = function( v ) {
	var self = this;

	this.view = v;
	
	var addButton = $('.add_digital_clock', v);
	
	addButton.bind('click', function(){
		eventBus.dispatchEvent( { type: 'addDigitalClock' } );
	});
}
