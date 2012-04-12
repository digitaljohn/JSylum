
/**
 * Controller component of the Model View Controller implementation
 * @param {*} model The data Model for this Controller
 * @constructor
 */
namespace.project.Controller = function() {
	
	/**
	 * @private
	 * @type {number}
	 */
	this._timer;
}

/**
 * Starts the timer running
 */
 
namespace.project.Controller.prototype.setupViews = function(coreView) {
	coreView.append("<h2 class='view-clock' data-view='clock'>Clock</h2>");
	
	$.mediate();
}
 
namespace.project.Controller.prototype.startTimer = function() {
	var tick = function() {
		$.Bus.dispatchEvent( { type: 'tick' } );
	}
	
	this._timer = setInterval( tick, 1000 );
	tick();
}

/**
 * Stops the current time from running
 */
namespace.project.Controller.prototype.stopTimer = function() {
	clearInterval( this._timer );
}

namespace.project.Controller.prototype.traceTime = function(event) {
	console.log('traceTime'+event.time);
}