
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

(function(window) {

var Context = function() {
  this.initialize();
}

var p = Context.prototype = new JSylum();

	p.JSylum_initialize = p.initialize;
	p.initialize = function(parent) {
		// HMMM
		JSylum.injector = new Injector();
		JSylum.injector.mapSingleton( MediatorMap );
		JSylum.injector.mapSingleton( EventBus );

		// DOwn here?
		this.JSylum_initialize();
	}

window.Context = Context;
}(window));



/*
 
 
JSylum.Context = JSylum.Base.extend({

	init: function(){
		JSylum.injector = new Injector();
		JSylum.injector.mapSingleton( MediatorMap );
		JSylum.injector.mapSingleton( EventBus );
		
		this._super();
	}
	
});

*/