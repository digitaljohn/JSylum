
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.views.DigitalClock = function(container)
{
	
	this.container = container;
	var self = this;
	
	
	var domElement = document.createElement("h2");
	container.appendChild( domElement );
	
	this.closeButton = document.createElement("button");
	this.closeButton.innerHTML = "X";
	container.appendChild( this.closeButton );
	
	
	this.setTime = function(time)
	{
		domElement.innerHTML = time;
	}
	
	this.destroy = function()
	{
		self.container.removeChild(domElement);
		self.container.removeChild(self.closeButton);
	}
	
	JSylum.mediatorMap.mediate( this );

}