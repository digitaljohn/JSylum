
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
namespace.views.Tools = JSylum.View.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Digital";
		this.parent.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Analog";
		this.parent.appendChild( this.addAnalogButton );
		
		this._super();
	},
	
	destroy: function(){
		this.parent.removeChild(this.addDigitalButton);
		this.parent.removeChild(this.addAnalogButton);
		
		return this._super();
	}
	
});
