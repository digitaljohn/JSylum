
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
namespace.views.BaseClock = JSylum.View.extend({

	init: function(container){
		this._super(container);
	},
	
	draw: function(){
		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this.container.appendChild( this.closeButton );
		
		this._super();
	},
	
	destroy: function(){
		this.container.removeChild(this.closeButton);
		
		return this._super();
		
	}
	
});