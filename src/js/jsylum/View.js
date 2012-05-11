
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.View = Class.extend({

	init: function(parent){
		this.parent = parent;
		
		this.draw();
		
		JSylum.injector.getSingleton( MediatorMap ).mediate(this);
	},
	
	draw: function(){
		
	},

	redraw: function(){
		
	},
	
	destroy: function(){
	
	}
	
});
