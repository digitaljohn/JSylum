
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
namespace.mediators.Tools = JSylum.Mediator.extend({

	init: function(view){
		this._super(view);
		
		var self = this;
		this.view.addDigitalButton.onclick = function()
		{
			self.dispatch( { type: 'addDigitalClock' } );
		}
	
		this.view.addAnalogButton.onclick = function()
		{
			self.dispatch( { type: 'addAnalogClock' } );
		}
	},
	
});