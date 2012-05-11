
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 

(function(window) {

var Mediator = function() {
  this.initialize();
}

var p = Mediator.prototype = new JSylum();

	p.view;

	p.JSylum_initialize = p.initialize;
	p.initialize = function(parent) {
		this.JSylum_initialize();

		this.view = view;
	}

	p.destroy = function() {
		this.view.destroy();
	}

window.Mediator = Mediator;
}(window));

 /*
JSylum.Mediator = JSylum.Base.extend({

	init: function(view){
		this._super();
		this.view = view;
	},
	
	destroy: function(){
		this.view.destroy();
	}
	
});
*/
