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
		
		//var hours = this.value.getHours() ;
		
		
		var toSeconds = (Math.PI*1.5);
		var fromSeconds = (this.value.getSeconds() / 60) * (Math.PI*2);
		fromSeconds += toSeconds;
		
		var toMins = (Math.PI*1.5);
		var fromMins = (this.value.getMinutes() / 60) * (Math.PI*2)
		fromMins += toMins;
		console.log(fromMins)
		
		var toHours = (Math.PI*1.5);
		var fromHours = (this.value.getHours() / 12) * (Math.PI*2);
		fromHours += toHours;
		console.log(this.value.getMinutes());
		// Clear
		this._ctx.clearRect(0, 0, 100, 100);
		
		// BG Circle
		this._ctx.fillStyle = "#555";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 50, 0, Math.PI*2, true);
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();



		// Hours
		this._ctx.fillStyle = "#00aeff";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 45, fromSeconds, toSeconds, true); 
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
		//seconds Fill
		this._ctx.fillStyle = "#555";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 35, 0, Math.PI*2, true);
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
		
		
		// Minutes
		this._ctx.fillStyle = "#baff00";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 30, fromMins, toMins, true); 
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
		//Minutes Fill
		this._ctx.fillStyle = "#555";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 20, 0, Math.PI*2, true);
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
		
		// Minutes
		this._ctx.fillStyle = "#ff0066";
		this._ctx.beginPath();
		this._ctx.arc(50, 50, 15, fromHours, toHours, true); 
		this._ctx.lineTo(50, 50);
		this._ctx.closePath();
		this._ctx.fill();
		//Hours Fill

		
	

	
	}
	
	p.setTime = function(time)
	{

		this.value = time;//
		this.redraw();
	}

window.example.views.AnalogClock = AnalogClock;
}(window));
