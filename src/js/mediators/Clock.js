
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.mediators.Clock = JSylum.Mediator.extend({

	init: function(view){
		this._super(view);
		
		this.model = this.getSingleton(example.models.Clock);
		
		this.addContextListener( 'timeChanged', this.onTimeChanged, this );
		
		this.view.closeButton.onclick = this.destroy.bind(this);
		
		this.onTimeChanged();
	},
	
	onTimeChanged: function( event ){
		window.console.log('timeChanged mediator');
		this.view.setTime( this.model.time );
	},
	
	destroy: function(){
		this.removeContextListener( 'timeChanged', this.onTimeChanged, this );
		
		return this._super();
	}
	
});