(function(window) {

var Clock = function(view) {
  if(window._initable) this.initialize(view);
}

var p = Clock.prototype = new Mediator();

	// A reference to the Clock Model
	p._model = null;

	p.Mediator_initialize = p.initialize;
	p.initialize = function(view) {
		this.Mediator_initialize(view);
		
		// Get and store the Clock Model within this class
		this.model = injector.getSingleton(example.models.Clock);
		
		// Listen for "timeChanged" event then run the "onTimeChanged" function in "this" scope
		this.addContextListener( 'timeChanged', this.onTimeChanged, this );
		
		// Bind the close button click to the destroy function
		this._view.closeButton.onclick = this.destroy.bind(this);
		
		// Run onTimeChanged so the clock shows the correct time and does not need to wait for the next time change
		this.onTimeChanged();

		this.dispatch( { type: 'clockAdded' } );
	}
	
	p.onTimeChanged = function( event ) {
		console.log('timeChanged mediator');

		// Set the time within the view
		this._view.setTime( this.model.getTime() );
	}
	
	p.Mediator_destroy = p.destroy;
	p.destroy = function() {
		// CLean up events
		this.removeContextListener( 'timeChanged', this.onTimeChanged, this );

		this.dispatch( { type: 'clockRemoved' } );

		// Make sure the super class cleans up also
		this.Mediator_destroy();
	}

window.example.mediators.Clock = Clock;
}(window));
