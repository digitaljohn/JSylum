/*
* JSylum
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
* JSylum is an abstract class that should not be constructed directly. Instead construct subclasses such as
* Context, Mediator, and Model. It defines the core properties and methods that are shared between all JSylum objects.
* @class JSylum
* @constructor
**/
var JSylum = function() {
  if(window.launched) this.initialize();
}

var p = JSylum.prototype;

	/**
	 * @property _mediatorMap
	 * @protected
	 * @type {Object}
	 * @default null
	 **/
	p._mediatorMap = null;

	/**
	 * @property _eventBus
	 * @protected
	 * @type {Object}
	 * @default null
	 **/
	p._eventBus = null;

	/** 
	 * Initialization method.
	 *
	 * @protected
	 **/
	p.initialize = function() {
		this._mediatorMap = window.injector.getSingleton( window.MediatorMap );
		this._eventBus = window.injector.getSingleton( window.EventBus );
	}

	/**
	 * Adds a listener to the main event bus
	 *
	 * @param {String} type
	 * @param {Function} listener
	 * @param {!Object} scope
	 * @protected
	 **/
	p.addContextListener = function(type, listener, scope){
		this._eventBus.addEventListener( type, listener, scope);
	},
	
	/**
	 * Removes a listener to the main event bus.
	 *
	 * @param {String} type
	 * @param {Function} listener
	 * @param {!Object} scope
	 * @protected
	 **/
	p.removeContextListener = function(type, listener, scope){
		this._eventBus.removeEventListener( type, listener, scope);
	},
	
	/**
	 * Dispatches an event through the main event bus.
	 *
	 * @param {!Object} event
	 * @protected
	 **/
	p.dispatch = function(event){
		this._eventBus.dispatchEvent( event );
	},
	
	/**
	 * Gets a singleson from the injector.
	 *
	 * @param {*} type
	 * @protected
	 * @return {!Object} The shared instance that was requested.
	 **/
	p.getSingleton = function(type){
		return window.injector.getSingleton(type);
	}

window.JSylum = JSylum;
}(window));


