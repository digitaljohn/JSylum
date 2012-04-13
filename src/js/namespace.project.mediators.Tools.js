
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Tools = function( view ) {
	var self = this;

	this.view = view;
	this._addButton = $('.add_digital_clock', this.view);
	
	this._addButton.bind('click', function(){
		eventBus.dispatchEvent( { type: 'addDigitalClock' } );
	});
}
