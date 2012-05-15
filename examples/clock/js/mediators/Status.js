(function(window) {

var Status = function(view) {
  if(window._initable) this.initialize(view);
}

var p = Status.prototype = new Mediator();

	// A reference to the Clock Model
	p._model = null;

	p.Mediator_initialize = p.initialize;
	p.initialize = function(view) {
		this.Mediator_initialize(view);
		
		this.model = injector.getSingleton(example.models.Clock);
		
		this.addContextListener( 'clockNumChanged', this.onClockNumChanged, this );
	}
	
	p.onClockNumChanged = function( event ) {
		// Set the time within the view
		this._view.setNum( event.num );
	}
	
	p.Mediator_destroy = p.destroy;
	p.destroy = function() {
		// CLean up events
		this.removeContextListener( 'clockNumChanged', this.onClockNumChanged, this );

		// Make sure the super class cleans up also
		this.Mediator_destroy();
	}

window.example.mediators.Status = Status;
}(window));
