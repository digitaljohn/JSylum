
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

(function(window) {

var View = function() {
  this.initialize();
}

var p = View.prototype;

	p.parent;

	p.initialize = function(parent) {
		this.parent = parent;

		this.draw();

		window.injector.getSingleton( MediatorMap ).mediate(this);
	}

	p.draw = function() {

	}

	p.redraw = function() {

	}

	p.destroy = function() {

	}

window.View = View;
}(window));
