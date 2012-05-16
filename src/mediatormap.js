/*
* MediatorMap
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
* Stores and manages the mappings of a View and Mediator.
*
* @class MediatorMap
* @constructor
**/
var MediatorMap = function() {

}

var p = MediatorMap.prototype;

	/**
	 * @property _map
	 * @protected
	 * @type Array
	 * @default []
	 **/
	p._map = [];

	/**
	 * @property _mediators
	 * @protected
	 * @type Array
	 * @default []
	 **/
	p._mediators = [];

	/**
	 * Maps a View to a Mediator.
	 *
	 * @param {!Object} view
	 * @param {!Object} mediator
	 **/
	p.mapView = function ( view, mediator )
	{
		this._map.push( {view:view, mediator:mediator} );
	}

	/**
	 * Creates, stores and hooks up a mediator to a view.
	 *
	 * @param {!Object} view
	 **/
	p.mediate = function(view)
	{
		var index = false;
		
		for(var i in this._map)
		{
			if(view instanceof this._map[i].view)
			{
				index = i;
				break;
			}
		}
		
		if(index !== false)
		{
			var mediator = new this._map[index].mediator( view );
			this._mediators.push(mediator);
		}
	}


window.MediatorMap = MediatorMap;
}(window));
