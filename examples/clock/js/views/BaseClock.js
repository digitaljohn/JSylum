(function(window) {

var BaseClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = BaseClock.prototype = new View();

	p._elType = "li";

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
		this._el.appendChild( this.closeButton );
	}

window.example.views.BaseClock = BaseClock;
}(window));
