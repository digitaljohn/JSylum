/*
* EventBus
* Visit http://jsylum.digitaljohn.co.uk/ for documentation, updates and examples.
*
* Copyright (c) 2012 DigitalJohn.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function(window) {

/**
* The core event bus & dispatcher for a JSylum project.
*
* @class EventBus
* @constructor
**/
var EventBus = function() {

}

var p = EventBus.prototype;

    /**
     * @property _mediatorMap
     * @protected
     * @type {!Object}
     * @default {}
     **/
    p._listeners = {};

    /**
     * Registers an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     */
    p.addEventListener = function ( type, listener, ctx ) {
        var obj = {callback: listener, context: ctx};
        var exists = false;
        var events;

        if ( this._listeners[ type ] === undefined ) {
            this._listeners[ type ] = [];
        }

        events = this._listeners[ type ];

        for (var i = 0; i < events.length; i++) {

            if (events[i].callback === listener && events[i].context === ctx) {
                exists = true;
                break;
            }

        }

        if ( exists === false ) {
            this._listeners[ type ].push(obj);
        }
    }

    /**
     * Dispatches an event
     *
     * @param {!Object} event The event type
     */
    p.dispatchEvent = function ( event ) {
        var events = this._listeners[ event.type ];

        if (typeof events !== 'undefined') {
            for ( var i = 0; i < events.length; i++ ) {
                events[i].callback.call( events[i].context, event );
            }
        }
    }

    /**
     * Removes an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     */
    p.removeEventListener = function ( type, listener, ctx) {
        var index;
        var events = this._listeners[type];

        if (typeof events !== 'undefined') {
            for (var i = 0; i < events.length; i++) {
                if (events[i].callback === listener && events[i].context === ctx) {
                   index = i;
                   break;
                }
            }

            if ( index !== - 1 ) {
                this._listeners[ type ].splice( index, 1 );
            }
        }
    }

    /**
     * Registers an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     * @param {boolean} singleFire If the listener should be removed after it is fired once
     */
    p.mapEvent = function( type, listener, ctx, singleFire )
    {
        this.addEventListener( type, listener, ctx );
    }

window.EventBus = EventBus;
}(window));
