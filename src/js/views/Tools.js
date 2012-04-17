
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
namespace.views.Tools = JSylum.View.extend({

	init: function(container){
		this._super(container);
		
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Digital";
		container.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Analog";
		container.appendChild( this.addAnalogButton );
		
		this.mediate();
	},
	
	destroy: function(){
		this.container.removeChild(this.addDigitalButton);
		this.container.removeChild(this.addAnalogButton);
		
		return this._super();
	}
	
});
