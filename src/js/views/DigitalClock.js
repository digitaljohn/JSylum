
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
namespace.views.DigitalClock = namespace.views.BaseClock.extend({

	init: function(container){
		this._super(container);
	},
	
	draw: function(){
		this.domElement = document.createElement("h2");
		this.container.appendChild( this.domElement );
		
		this._super();
	},
	
	setTime: function(time)
	{
		this.domElement.innerHTML = time;
	},
	
	destroy: function(){
		this.container.removeChild(this.domElement);
		
		return this._super();
	}
	
});