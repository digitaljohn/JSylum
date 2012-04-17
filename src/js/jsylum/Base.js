
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Base = Class.extend({

	addContextListener: function(type, listener, scope){
		JSylum.eventBus.addEventListener( type, listener, scope);
	},
	
	removeContextListener: function(type, listener, scope){
		JSylum.eventBus.removeEventListener( type, listener, scope);
	},
	
	dispatch: function(event){
		JSylum.eventBus.dispatchEvent( event );
	},
	
	getSingleton: function(type){
		return JSylum.injector.getSingleton(type);
	}
	
});
