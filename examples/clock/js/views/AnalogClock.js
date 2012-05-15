(function(window) {

// This is a canvas based view. If we were to do really complex canvas drawings, we would likely use EaselJS!

var AnalogClock = function(parent) {
  if(window._initable) this.initialize(parent);
}

var p = AnalogClock.prototype = new example.views.BaseClock();

	p._canvas = null;

	p.BaseClock_initialize = p.initialize;
	p.initialize = function(parent) {
		this.BaseClock_initialize(parent);
	}

	p.BaseClock_draw = p.draw;
	p.draw = function() {
		this.BaseClock_draw();

		// Create the canvas
		this._canvas = document.createElement("canvas");

		// Add the canvas to the container (_el is a new DIV by default)
		this._el.appendChild( this._canvas );
	
		// Set the size
		this._canvas.width = 100;
		this._canvas.height = 100;
	}

	p.BaseClock_redraw = p.redraw;
	p.redraw = function(){
		this.BaseClock_redraw();
		
		var toSeconds = (Math.PI*1.5);
		var fromSeconds = (this.value.getSeconds() / 60) * (Math.PI*2);
		fromSeconds += toSeconds;
		
		var toMins = (Math.PI*1.5);
		var fromMins = (this.value.getMinutes() / 60) * (Math.PI*2)
		fromMins += toMins;
		
		var hours = this.value.getHours();
		if(hours>12) hours-=12;
		var toHours = (Math.PI*1.5);
		var fromHours = (hours / 12) * (Math.PI*2);
		fromHours += toHours;

		// Store a reference to the graphics context
		var ctx = this._canvas.getContext("2d");

		// Clear
		ctx.clearRect(0, 0, 100, 100);
		
		// BG Circle
		ctx.fillStyle = "#555";
		ctx.beginPath();
		ctx.arc(50, 50, 50, 0, Math.PI*2, true);
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();


		// Hours
		ctx.fillStyle = "#00aeff";
		ctx.beginPath();
		ctx.arc(50, 50, 45, fromSeconds, toSeconds, true); 
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();


		// BG Circle
		ctx.fillStyle = "#555";
		ctx.beginPath();
		ctx.arc(50, 50, 35, 0, Math.PI*2, true);
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();
		
	
		// Minutes
		ctx.fillStyle = "#baff00";
		ctx.beginPath();
		ctx.arc(50, 50, 30, fromMins, toMins, true); 
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();

		// BG Circle
		ctx.fillStyle = "#555";
		ctx.beginPath();
		ctx.arc(50, 50, 20, 0, Math.PI*2, true);
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();
		
		// Minutes
		ctx.fillStyle = "#ff0066";
		ctx.beginPath();
		ctx.arc(50, 50, 15, fromHours, toHours, true); 
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();
	}
	
	p.setTime = function(time)
	{
		// Store the new time and redraw!
		this.value = time;
		this.redraw();
	}

window.example.views.AnalogClock = AnalogClock;
}(window));
