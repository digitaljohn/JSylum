(function(window) {

var Tools = function(view) {
  if(window.launched) this.initialize(view);
}

var p = Tools.prototype = new window.Mediator();

	p.Mediator_initialize = p.initialize;
	p.initialize = function(view) {
		this.Mediator_initialize(view);
		
		var self = this;
		this._view.addDigitalButton.onclick = function()
		{
			self.dispatch( { type: 'addDigitalClock' } );
		}
	
		this._view.addAnalogButton.onclick = function()
		{
			self.dispatch( { type: 'addAnalogClock' } );
		}
	}

window.example.mediators.Tools = Tools;
}(window));
