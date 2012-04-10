
/**
 * View component of the Model View Controller implementation
 * @param {*} model The model for this view
 * @param {*} controller The controller for this view
 * @param {Object} dom References to DOM objects used in this view
 * @constructor
 */
namespace.project.Mediator = function( bus, view ) {
	
	this._bus = bus;
	this._view = view;
	
	var self = this;
	
	this._bus.addEventListener( 'timeChanged', function( event )
	{
		self._view.html(namespace.project.Mediator.TIME_PREFIX+event.time);
	} );
	
	
}

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.Mediator.TIME_PREFIX = "The Time Is: ";
