
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
namespace.project.Model = function( bus, data ) {
	
	var self = this;
	
	this._bus = bus;
	
	this._data = data || {};
	
	
	this.onTick = function( event )
	{
		self.setTime( new Date() );
	}
	
	
	
	this._bus.addEventListener( 'tick', this.onTick);
	
}

/**
 * @return {Date} The current time.
 */
namespace.project.Model.prototype.getTime = function() {
	return this._data.time;
}

/**
 * @param {Date} time The current time
 */
namespace.project.Model.prototype.setTime = function( time ) {
	this._data.time = time;
	this._bus.dispatchEvent( { type: 'timeChanged', time: this._data.time } );
}