(function(window) {

var DigitalClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = DigitalClock.prototype = new example.views.BaseClock();

	// Refernence to the heading tag
	p._domElement = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}
	
	p.BaseClock_draw = p.draw;
	p.draw = function(){
		this.BaseClock_draw();

		// Create a heading tag and add to the container
		this._domElement = document.createElement("h2");
		this._el.appendChild( this._domElement );
	}
	
	p.setTime = function(time)
	{
		// Format the numbers so they are zero padded
		var h = this._padNumber( time.getHours() );
		var m = this._padNumber( time.getMinutes() );
		var s = this._padNumber( time.getSeconds() );

		// Use the getText function to format the numbers to english time format
		this._domElement.innerHTML = this.getText("digital_format", h, m, s);
	}

	// Basic number padding function
	p._padNumber = function(n)
	{
		if(n<1) return "00";
		if(n<10) return "0"+n;

		return n;
	}

window.example.views.DigitalClock = DigitalClock;
}(window));
