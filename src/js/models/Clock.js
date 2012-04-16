
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
namespace.models.Clock = function() {
	var self = this;

	this.time = new Date();
	this.ticker = 0;
	
	this.getTime = function()
	{
		return self.time;
	}
	
	this.setTime = function( time )
	{
		this.time = time;
		JSylum.eventBus.dispatchEvent( { type: 'timeChanged', time: this.time } );
	}
	
	this.onTick = function( event )
	{
		self.setTime( new Date() );
	}
	
	JSylum.eventBus.addEventListener( 'tick', this.onTick);
}