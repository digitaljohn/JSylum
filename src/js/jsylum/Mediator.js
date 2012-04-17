
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Mediator = JSylum.Base.extend({

	init: function(view){
		this._super();
		this.view = view;
	},
	
	destroy: function(){
		this.view.destroy();
	}
	
});
