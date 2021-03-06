/*
* Injector
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
* The core Dependancy Injector for JSylum.
*
* @class Injector
* @constructor
**/
var Injector = function() {

}

var p = Injector.prototype;

	/**
	 * @property _singletons
	 * @protected
	 * @type Array
	 * @default []
	 **/
	p._singletons = [];

	/**
	 * Maps a class to be created and accessed as a singleton.
	 *
	 * @param {Function} type
	 **/
	p.mapSingleton = function(type)
	{
		this._singletons.push( {type:type, object:new type()} );
	};

	/**
	 * Gets a singleton from the store.
	 *
	 * @param {Function} type
	 * @return {!Object} The singleton that was requested.
	 **/
	p.getSingleton = function( type )
	{
		for(var singleton in this._singletons)
		{
			if(this._singletons[singleton].type === type) return this._singletons[singleton].object;
		}
		
		return {};
	};

window.Injector = Injector;
}(window));
