(function(window) {

var Clock = function() {
  if(window._initable) this.initialize();
}

var p = Clock.prototype = new Model();

	p._time = null;
	
	p.ticker = null;

	p._clockNum = 0;

	p.Model_initialize = p.initialize;
	p.initialize = function(){
		this.Model_initialize();
		
		// Store the current date
		this._time = new Date();
		
		// Listen for clock ticks
		this.addContextListener( 'tick', this.onTick, this);

		// Listen for clocks being added and removed
		this.addContextListener( 'clockAdded', this.onClockAdded, this);
		this.addContextListener( 'clockRemoved', this.onClockRemoved, this);
	},
	
	p.getTime = function(){
		// Return the current time
		return this._time;
	},
	
	p.setTime = function( time ){
		// Store the time
		this._time = time;

		// Dispatch a time changed event through the event bus for other items to pick up on
		this.dispatch( { type: 'timeChanged', time: this._time } );
	},
	
	p.onTick = function(event){
		// Set the time to a new date
		this.setTime( new Date() );
	}

	p.onClockAdded = function(event){
		this._clockNum++;
		this.dispatch( { type: 'clockNumChanged', num: this._clockNum } );
	}

	p.onClockRemoved = function(event){
		this._clockNum--;
		this.dispatch( { type: 'clockNumChanged', num: this._clockNum } );
	}

window.example.models.Clock = Clock;
}(window));
