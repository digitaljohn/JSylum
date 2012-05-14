(function(window) {

var Tools = function(parent) {
  this.tools = "TOOLSV";
  if(window.launched) this.initialize(parent);
}

var p = Tools.prototype = new window.View();

	p.addDigitalButton = null;
	p.addAnalogButton = null;

	p.View_initialize = p.initialize;
	p.initialize = function(parent){
		this.View_initialize(parent);
	}
	
	p.View_draw = p.draw;
	p.draw = function(){
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Digital";
		this._parent.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Analog";
		this._parent.appendChild( this.addAnalogButton );
		
		this.View_draw();
	}
	
	p.View_destroy = p.destroy;
	p.destroy = function(){
		this._parent.removeChild(this.addDigitalButton);
		this._parent.removeChild(this.addAnalogButton);
		
		this.View_destroy();
	}

window.example.views.Tools = Tools;
}(window));
