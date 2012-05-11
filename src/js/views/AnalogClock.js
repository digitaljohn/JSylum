
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.AnalogClock = example.views.BaseClock.extend({

	init: function(container){
		this._super(container);
	},
	
	draw: function(){
		this.domElement = document.createElement("canvas");
		this.parent.appendChild( this.domElement );
	
		this.domElement.width = 100;
		this.domElement.height = 100;
	
		this.ctx = this.domElement.getContext("2d");
		
		this._super();
	},
	
	redraw: function(){
		this._super();

		var to = (Math.PI*1.5);
		var from = this.value * (Math.PI*2);
		from += to;
	
		// Clear
		this.ctx.clearRect(0, 0, 100, 100);
	
		// BG
		this.ctx.fillStyle = "#FF1C0A";
		this.ctx.fillRect(0, 0, 100, 100);
		this.ctx.closePath();
		
		// BG Circle
		this.ctx.fillStyle = "#00A308";
		this.ctx.beginPath();
		this.ctx.arc(50, 50, 50, from, to, true); 
		this.ctx.lineTo(50, 50);
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	setTime: function(time)
	{
		this.value = time.getSeconds() / 60;
		this.redraw();
	},
	
	destroy: function(){
		this.parent.removeChild(this.domElement);
		
		return this._super();
	}
	
});