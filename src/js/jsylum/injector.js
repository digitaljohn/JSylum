/**
 * @author mr.doob / http://mrdoob.com/
 */

(function(window) {

var Injector = function() {
  this.initialize();
}

var p = Injector.prototype;

	p._singletons = [];

	p.initialize = function() {

	}

	p.mapSingleton = function(type)
	{
		this._singletons.push( {type:type, object:new type()} );
	};

	p.getSingleton = function( type )
	{
		for(var singleton in _singletons)
		{
			if(_singletons[singleton].type === type) return _singletons[singleton].object;
		}
		
		return false;
	};

	

window.Injector = Injector;
}(window));

/*



var Injector = function ()
{
	var singletons = [];

	this.mapSingleton = function(type)
	{
		singletons.push( {type:type, object:new type()} );
	};

	this.getSingleton = function( type )
	{
		for(var singleton in singletons)
		{
			if(singletons[singleton].type === type) return singletons[singleton].object;
		}
		
		return false;
	};
};

*/