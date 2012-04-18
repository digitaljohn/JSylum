
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

JSylum = {};
 
JSylum.Base = Class.extend({

	init: function(){
		this.mediatorMap = injector.getSingleton( MediatorMap );
		this.eventBus = injector.getSingleton( EventBus );
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
		return injector.getSingleton(type);
	}
	
});
