
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.views.AnalogClock = function(container)
{
	
	this.container = container;
	
	var self = this;
	
	
	var value;

	var domElement = document.createElement("canvas");
	container.appendChild( domElement );
	
	domElement.width = 100;
	domElement.height = 100;
	
	var ctx = domElement.getContext("2d");
	
	
	// Close Button
	this.closeButton = document.createElement("button");
	this.closeButton.innerHTML = "X";
	container.appendChild( this.closeButton );
	
	
	var redraw = function()
	{
		var to = (Math.PI*1.5);
		var from = value * (Math.PI*2);
		from += to;
	
		// Clear
		ctx.clearRect(0, 0, 100, 100);
	
		// BG
		ctx.fillStyle = "#FF1C0A";
		ctx.fillRect(0, 0, 100, 100);
		ctx.closePath();
		
		// BG Circle
		ctx.fillStyle = "#00A308";
		ctx.beginPath();
		ctx.arc(50, 50, 50, from, to, true); 
		ctx.lineTo(50, 50);
		ctx.closePath();
		ctx.fill();
		
		
	}
	
	this.setTime = function(time)
	{
		value = time.getSeconds() / 60;
		redraw();
	}
	
	this.destroy = function()
	{
		self.container.removeChild(domElement);
		self.container.removeChild(self.closeButton);
	}
	
	
	JSylum.mediatorMap.mediate( this );
	

}