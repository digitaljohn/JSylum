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

		// You should get the hand of views by now... if not re-read the other ones
		this.label = document.createElement("h3");
		this._el.appendChild( this.label );

		this.setNum(0);
	}

	p.setNum = function(num)
	{
		this.label.innerHTML = this.getText("status", num);
	}

window.example.views.Status = Status;
}(window));
