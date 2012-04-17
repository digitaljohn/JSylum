/**
 * @author mr.doob / http://mrdoob.com/
 */

var EventBus = function ()
{
	var listeners = {};

/**
     * Registers an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.addEventListener = function ( type, listener, ctx ) {
        var obj = {callback: listener, context: ctx};
        var exists = false;
        var events;

        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }

        events = listeners[ type ];

        for (var i = 0; i < events.length; i++) {

            if (events[i].callback === listener && events[i].context === ctx) {
                exists = true;
                break;
            }

        }

        if ( exists === false ) {
            listeners[ type ].push(obj);
        }

    };

    /**
     * Dispatches an event
     *
     * @param {Object} event The event
     * @param {String} event.type The event type
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.dispatchEvent = function ( event ) {
        var events = listeners[ event.type ];

        if (typeof events !== 'undefined') {
            for ( var i = 0; i < events.length; i++ ) {
                events[i].callback.call( events[i].context, event );
            }
        }

    };

    /**
     * Removes an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.removeEventListener = function ( type, listener, ctx) {
        var index;
        var events = listeners[type];

        if (typeof events !== 'undefined') {
            for (var i = 0; i < events.length; i++) {
                if (events[i].callback === listener && events[i].context === ctx) {
                   index = i;
                   break;
                }
            }

            if ( index !== - 1 ) {
                listeners[ type ].splice( index, 1 );
            }
        }

    };

	
	// TODO: Needs completing for single fire
	this.mapEvent = function( type, listener, ctx, singleFire )
	{
		this.addEventListener( type, listener, ctx );
	}
};