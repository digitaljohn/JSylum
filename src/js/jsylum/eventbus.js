/**
 * @author mr.doob / http://mrdoob.com/
 */

var EventBus = function ()
{
	var listeners = {};

	this.addEventListener = function(type, listener)
	{
		if(listeners[ type ] == undefined)
		{
			listeners[ type ] = [];
		}

		if(listeners[ type ].indexOf( listener ) === -1)
		{
			listeners[ type ].push( listener );
		}

	};

	this.dispatchEvent = function( event )
	{
		for(var listener in listeners[ event.type ])
		{
			listeners[ event.type ][ listener ]( event );
		}
	};

	this.removeEventListener = function( type, listener )
	{
		var index = listeners[ type ].indexOf( listener );

		if ( index !== - 1 )
		{
			listeners[ type ].splice( index, 1 );
		}
	};
	
	// TODO: Needs completing for single fire
	this.mapEvent = function( type, listener, singleFire )
	{
		this.addEventListener( type, listener );
	}
};