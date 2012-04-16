
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.views.Tools = function(container)
{

	this.container = container;
	var self = this;
	
	this.addDigitalButton = document.createElement("button");
	this.addDigitalButton.innerHTML = "Digital";
	container.appendChild( this.addDigitalButton );
	
	this.addAnalogButton = document.createElement("button");
	this.addAnalogButton.innerHTML = "Analog";
	container.appendChild( this.addAnalogButton );
	
	
	JSylum.mediatorMap.mediate( this );
	
	this.destroy = function()
	{
		this.container.removeChild(this.addDigitalButton);
		this.container.removeChild(this.addAnalogButton);
	}

}