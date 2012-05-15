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

		// You should get the hand oof views by now... if not re-read the other ones
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = this.getText("add_digital");
		this._el.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = this.getText("add_analog");
		this._el.appendChild( this.addAnalogButton );
	}

window.example.views.Tools = Tools;
}(window));
