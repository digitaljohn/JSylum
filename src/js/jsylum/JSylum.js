
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

(function(window) {

var JSylum = function() {
  //this.initialize();
}

var p = JSylum.prototype;

	p._mediatorMap;
	p._eventBus;

	//p.Base_initialize = p.initialize;
	p.initialize = function() {
		this._mediatorMap = window.injector.getSingleton( MediatorMap );
		this._eventBus = window.injector.getSingleton( EventBus );
	}

	p.addContextListener = function(type, listener, scope){
		
		this._eventBus.addEventListener( type, listener, scope);
	},
	
	p.removeContextListener = function(type, listener, scope){
		this._eventBus.removeEventListener( type, listener, scope);
	},
	
	p.dispatch = function(event){
		this._eventBus.dispatchEvent( event );
	},
	
	p.getSingleton = function(type){
		return window.injector.getSingleton(type);
	}

	

window.JSylum = JSylum;
}(window));



/*



var JSylum = {};
 
JSylum.Base = Class.extend({

	init: function(){
		this.mediatorMap = JSylum.injector.getSingleton( MediatorMap );
		this.eventBus = JSylum.injector.getSingleton( EventBus );
	},

	addContextListener: function(type, listener, scope){
		
		this.eventBus.addEventListener( type, listener, scope);
	},
	
	removeContextListener: function(type, listener, scope){
		this.eventBus.removeEventListener( type, listener, scope);
	},
	
	dispatch: function(event){
		this.eventBus.dispatchEvent( event );
	},
	
	getSingleton: function(type){
		return JSylum.injector.getSingleton(type);
	}
	
});


*/