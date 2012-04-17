
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.View = Class.extend({

	init: function(container){
		this.container = container;
	},
	
	mediate: function(){
		JSylum.mediatorMap.mediate( this );
	},
	
	destroy: function(){
	
	}
	
});
