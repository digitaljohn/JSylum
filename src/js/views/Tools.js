
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
namespace.views.Tools = JSylum.View.extend({

	init: function(container){
		this._super(container);
	},
	
	draw: function(){
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Digital";
		this.container.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Analog";
		this.container.appendChild( this.addAnalogButton );
		
		this._super();
	},
	
	destroy: function(){
		this.container.removeChild(this.addDigitalButton);
		this.container.removeChild(this.addAnalogButton);
		
		return this._super();
	}
	
});
