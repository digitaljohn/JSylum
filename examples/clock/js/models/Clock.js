(function(window) {

var Clock = function() {
  if(window._initable) this.initialize();
}

var p = Clock.prototype = new Model();

	p.Model_initialize = p.initialize;
	p.initialize = function(){
		this.Model_initialize();
		
		this.time = new Date();
		this.ticker = 0;
		
		this.addContextListener( 'tick', this.onTick, this);
		
	},
	
	p.getTime = function(){
		return this.time;
	},
	
	p.setTime = function( time ){
		this.time = time;
		this.dispatch( { type: 'timeChanged', time: this.time } );
	},
	
	p.onTick = function(event){
		this.setTime( new Date() );
	}

window.example.models.Clock = Clock;
}(window));
