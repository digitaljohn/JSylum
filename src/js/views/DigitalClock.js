
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.DigitalClock = example.views.BaseClock.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		this.domElement = document.createElement("h2");
		this.parent.appendChild( this.domElement );
		
		this._super();
	},
	
	setTime: function(time)
	{
		this.domElement.innerHTML = time;
	},
	
	destroy: function(){
		this.parent.removeChild(this.domElement);
		
		return this._super();
	}
	
});