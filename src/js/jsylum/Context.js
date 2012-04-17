
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Context = JSylum.Base.extend({

	init: function(){
		injector = new Injector();
		injector.mapSingleton( MediatorMap );
		injector.mapSingleton( EventBus );
		
		this._super();
	}
	
});
