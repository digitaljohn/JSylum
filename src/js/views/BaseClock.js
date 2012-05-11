
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

(function(window) {

var BaseClock = function() {
  this.initialize();
}

var p = BaseClock.prototype = new View();

	p.parent;

	p.View_initialize = p.initialize;
	p.initialize = function(parent) {
		p.View_initialize(parent);
	}

	p.draw = function() {
		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this.parent.appendChild( this.closeButton );
		
		this._super();
	}

	p.destroy = function() {
		this.parent.removeChild(this.closeButton);
		
		return this._super();
	}

window.BaseClock = BaseClock;
}(window));

/*
 
example.views.BaseClock = JSylum.View.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this.parent.appendChild( this.closeButton );
		
		this._super();
	},
	
	destroy: function(){
		this.parent.removeChild(this.closeButton);
		
		return this._super();
		
	}
	
});

*/