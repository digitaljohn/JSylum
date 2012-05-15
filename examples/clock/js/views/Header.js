(function(window) {

var Header = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = Header.prototype = new View();

	p.title = null;
	p.description = null;
	
	p.View_draw = p.draw;
	p.draw = function(){
		this.View_draw();

		// Create the heading tiem
		this.title = document.createElement("h1");

		// Grab the translation from the config
		this.title.innerHTML = this.getText("title");

		// Add it to the container
		this._el.appendChild( this.title );
		
		// As above pretty much
		this.description = document.createElement("h2");
		this.description.innerHTML = this.getText("description");
		this._el.appendChild( this.description );
	}

window.example.views.Header = Header;
}(window));
