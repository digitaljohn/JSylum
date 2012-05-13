
(function(window) {

var AnalogClock = function(parent) {
  if(window.launched) this.initialize(parent);
}

var p = AnalogClock.prototype = new window.example.views.BaseClock();

	p._domElement = null;
	p._ctx = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}


	p.BaseClock_draw = p.draw;
	p.draw = function() {
		this._domElement = document.createElement("canvas");
		this._parent.appendChild( this._domElement );
	
		this._domElement.width = 100;
		this._domElement.height = 100;
	
		this._ctx = this._domElement.getContext("2d");

		this.BaseClock_draw();
	}

	p.BaseClock_redraw = p.redraw;
	p.redraw = function(){
		this.BaseClock_redraw();

		var to = (Math.PI*1.5);
		var from = this.value * (Math.PI*2);
		from += to;
	
		// Clear
		this._ctx.clearRect(0, 0, 100, 100);
	
		// BG
		this._ctx.fillStyle = "#FF1C0A";
		this._ctx.fillRect(0, 0, 100, 100);
		this._ctx.closePath();
		
		// BG Circle
		this._ctx.fillStyle = "#00A308";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 50, from, to, true); 
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
	},
	
	p.setTime = function(time)
	{
		this.value = time.getSeconds() / 60;
		this.redraw();
	},

	p.BaseClock_destroy = p.destroy;
	p.destroy = function() {
		this._parent.removeChild(this._domElement);
		
		this.BaseClock_destroy();
	}

window.example.views.AnalogClock = AnalogClock;
}(window));
