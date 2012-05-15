(function(window) {

var Tools = function(view) {
  if(window._initable) this.initialize(view);
}

var p = Tools.prototype = new Mediator();

	p.Mediator_initialize = p.initialize;
	p.initialize = function(view) {
		this.Mediator_initialize(view);
		
		// Store a reference to the scope "this"
		var _this = this;

		this._view.addDigitalButton.onclick = function()
		{
			// Dispatch an event through the bus
			_this.dispatch( { type: 'addDigitalClock' } );
		}
	
		this._view.addAnalogButton.onclick = function()
		{
			// Dispatch an event through the bus
			_this.dispatch( { type: 'addAnalogClock' } );
		}
	}

window.example.mediators.Tools = Tools;
}(window));
