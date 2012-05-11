
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
 
example.models.Clock = JSylum.Model.extend({

	init: function(){
		this._super();
		
		this.time = new Date();
		this.ticker = 0;
		
		this.addContextListener( 'tick', this.onTick, this);
		
	},
	
	getTime: function(){
		return this.time;
	},
	
	setTime: function( time ){
		this.time = time;
		this.dispatch( { type: 'timeChanged', time: this.time } );
	},
	
	onTick: function(event){
		this.setTime( new Date() );
	}
	
});
