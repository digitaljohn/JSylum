(function(window) {

var Tools = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = Tools.prototype = new View();

	p.addDigitalButton = null;
	p.addAnalogButton = null;

	p.View_initialize = p.initialize;
	p.initialize = function(parent){
		this.View_initialize(parent);
	}
	
	p.View_draw = p.draw;
	p.draw = function(){
		this.View_draw();

		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Add Digital Clock";
		this._el.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Add Analog Clock";
		this._el.appendChild( this.addAnalogButton );
	}

window.example.views.Tools = Tools;
}(window));
