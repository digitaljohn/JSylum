
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

(function(window) {

var BaseClock = function(parent) {
  if(window.launched) this.initialize(parent);
}

var p = BaseClock.prototype = new window.View();

	p.closeButton = null;

	p.View_initialize = p.initialize;
	p.initialize = function(parent) {
		this.View_initialize(parent);
	}

	p.View_draw = p.draw;
	p.draw = function() {
		this.View_draw();

		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this._parent.appendChild( this.closeButton );
	}

	p.View_destroy = p.destroy;
	p.destroy = function() {
		this._parent.removeChild(this.closeButton);

		this.View_destroy();
	}

window.example.views.BaseClock = BaseClock;
}(window));
