
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
namespace.views.DigitalClock = JSylum.View.extend({

	init: function(container){
		this._super(container);
		
		this.domElement = document.createElement("h2");
		this.container.appendChild( this.domElement );
	
	
		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this.container.appendChild( this.closeButton );
		
		this.mediate();
	},
	
	setTime: function(time)
	{
		this.domElement.innerHTML = time;
	},
	
	destroy: function(){
		this.container.removeChild(this.domElement);
		this.container.removeChild(this.closeButton);
		
		
		return this._super();
		
	}
	
});