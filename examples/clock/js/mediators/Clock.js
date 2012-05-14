(function(window) {

var Clock = function(view) {
  if(window._initable) this.initialize(view);
}

var p = Clock.prototype = new Mediator();

	p._model = null;

	p.Mediator_initialize = p.initialize;
	p.initialize = function(view) {
		this.Mediator_initialize(view);
		
		this.model = injector.getSingleton(example.models.Clock);
		
		this.addContextListener( 'timeChanged', this.onTimeChanged, this );
		
		this._view.closeButton.onclick = this.destroy.bind(this);
		
		this.onTimeChanged();
	}
	
	p.onTimeChanged = function( event ) {
		console.log('timeChanged mediator');
		this._view.setTime( this.model.time );
	}
	
	p.Mediator_destroy = p.destroy;
	p.destroy = function() {
		this.removeContextListener( 'timeChanged', this.onTimeChanged, this );
		this.Mediator_destroy();
	}

window.example.mediators.Clock = Clock;
}(window));
