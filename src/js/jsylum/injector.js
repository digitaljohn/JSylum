/**
 * @author mr.doob / http://mrdoob.com/
 */

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
			if(singletons[singleton].type = type) return singletons[singleton].object;
		}
		
		return false;
	};
};