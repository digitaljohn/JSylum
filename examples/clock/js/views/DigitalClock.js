(function(window) {

var DigitalClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = DigitalClock.prototype = new example.views.BaseClock();

	p._domElement = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}
	
	p.BaseClock_draw = p.draw;
	p.draw = function(){
		this.BaseClock_draw();

		this._domElement = document.createElement("h2");
		this._el.appendChild( this._domElement );
	}
	
	p.setTime = function(time)
	{
		var h = this._padNumber( time.getHours() );
		var m = this._padNumber( time.getMinutes() );
		var s = this._padNumber( time.getSeconds() );

		this._domElement.innerHTML = h + ":" + m + ":" + s;
	}

	p._padNumber = function(n)
	{
		if(n<1) return "00";
		if(n<10) return "0"+n;

		return n;
	}

window.example.views.DigitalClock = DigitalClock;
}(window));
