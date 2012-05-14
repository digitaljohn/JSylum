(function(window) {

var AnalogClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = AnalogClock.prototype = new example.views.BaseClock();

	p._canvas = null;
	p._ctx = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}

	p.BaseClock_draw = p.draw;
	p.draw = function() {
		this.BaseClock_draw();

		this._canvas = document.createElement("canvas");
		this._el.appendChild( this._canvas );
	
		this._canvas.width = 100;
		this._canvas.height = 100;
	
		this._ctx = this._canvas.getContext("2d");
	}

	p.BaseClock_redraw = p.redraw;
	p.redraw = function(){
		this.BaseClock_redraw();

		var to = (Math.PI*1.5);
		var from = this.value * (Math.PI*2);
		from += to;
	
		// Clear
		this._ctx.clearRect(0, 0, 100, 100);
		
		// BG Circle
		this._ctx.fillStyle = "#555";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 50, 0, Math.PI*2, true);
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();

		// Arc
		this._ctx.fillStyle = "#FFF";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 45, from, to, true); 
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
	}
	
	p.setTime = function(time)
	{
		this.value = time.getSeconds() / 60;
		this.redraw();
	}

window.example.views.AnalogClock = AnalogClock;
}(window));
