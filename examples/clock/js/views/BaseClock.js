(function(window) {

var BaseClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = BaseClock.prototype = new View();

	// The base container is a list item, so set the type
	p._elType = "li";

	// Reference to the close button
	p.closeButton = null;

	p.View_initialize = p.initialize;
	p.initialize = function(parent) {
		this.View_initialize(parent);
	}

	p.View_draw = p.draw;
	p.draw = function() {
		this.View_draw();

		// Create the close button
		this.closeButton = document.createElement("button");

		// Set the content
		this.closeButton.innerHTML = "X";

		// Add ti to the list item container
		this._el.appendChild( this.closeButton );
	}

window.example.views.BaseClock = BaseClock;
}(window));
