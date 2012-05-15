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

		this.title = document.createElement("h1");
		this.title.innerHTML = this.getText("title");
		this._el.appendChild( this.title );
		
		this.description = document.createElement("h2");
		this.description.innerHTML = this.getText("description");
		this._el.appendChild( this.description );
	}

window.example.views.Header = Header;
}(window));
