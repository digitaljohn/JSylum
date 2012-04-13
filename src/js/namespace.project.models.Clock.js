
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
namespace.project.models.Clock = function() {
	var self = this;

	this.time = new Date();
	this.ticker = 0;
	
	this.onTick = function( event )
	{
		self.setTime( new Date() );
	}
	
	eventBus.addEventListener( 'tick', this.onTick);
}

/**
 * @return {Date} The current time.
 */
namespace.project.models.Clock.prototype.getTime = function() {
	return this.time;
}

/**
 * @param {Date} time The current time
 */
namespace.project.models.Clock.prototype.setTime = function( time ) {
	this.time = time;
	eventBus.dispatchEvent( { type: 'timeChanged', time: this.time } );
}