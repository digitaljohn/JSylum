
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Context = JSylum.Base.extend({

	init: function(){
		JSylum.injector = new Injector();
		JSylum.injector.mapSingleton( MediatorMap );
		JSylum.injector.mapSingleton( EventBus );
		
		this._super();
	}
	
});
