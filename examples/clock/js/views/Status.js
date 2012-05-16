(function(window) {

var Status = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = Status.prototype = new View();

	p.label = null;

	p.View_initialize = p.initialize;
	p.initialize = function(parent){
		this.View_initialize(parent);
	}
	
	p.View_draw = p.draw;
	p.draw = function(){
		this.View_draw();

		// Create a heading element and add it to the container
		this.label = document.createElement("h3");
		this._el.appendChild( this.label );

		// Set its default number to 0
		this.setNum(0);
	}

	p.setNum = function(num)
	{
		// Get the text from the language file
		this.label.innerHTML = this.getText("status", num);
	}

window.example.views.Status = Status;
}(window));
