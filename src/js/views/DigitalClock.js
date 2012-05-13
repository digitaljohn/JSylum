(function(window) {

var DigitalClock = function(parent) {
  if(window.launched) this.initialize(parent);
}

var p = DigitalClock.prototype = new window.example.views.BaseClock();

	p._domElement = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}
	
	p.BaseClock_draw = p.draw;
	p.draw = function(){
		this._domElement = document.createElement("h2");
		this._parent.appendChild( this._domElement );
		
		this.BaseClock_draw();
	}
	
	p.setTime = function(time)
	{
		this._domElement.innerHTML = time;
	}
	
	p.BaseClock_destroy = p.destroy;
	p.destroy = function(){
		this._parent.removeChild(this._domElement);
		
		this.BaseClock_destroy();
	}

window.example.views.DigitalClock = DigitalClock;
}(window));
