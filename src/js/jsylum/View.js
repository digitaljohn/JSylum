
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.View = Class.extend({

	init: function(container){
		this.container = container;
		
		this.draw();
		
		injector.getSingleton( MediatorMap ).mediate(this);
	},
	
	draw: function(){
		
	},
	
	destroy: function(){
	
	}
	
});
