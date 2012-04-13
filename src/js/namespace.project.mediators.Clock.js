
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Clock = function( v ) {
	var self = this;
	
	this.view = v;
	var clockDisplay = $('span.display', v);
	var closeButton = $('a.close', v);
	
	var m = injector.getSingleton(models.Clock);
	
	this.onTimeChanged = function(event)
	{
		console.log('timeChanged mediator');
		clockDisplay.html(mediators.Clock.TIME_PREFIX+m.time);
	}
	
	eventBus.addEventListener( 'timeChanged', this.onTimeChanged );
	
	this.onTimeChanged();
	
	closeButton.bind('click', function(){
		self.view.remove();
		$.mediate();
	});
	
	this.destroy = function(event)
	{
		// Should we set HTML to ''?
		eventBus.removeEventListener( 'timeChanged', this.onTimeChanged );
	}
}

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.mediators.Clock.TIME_PREFIX = "The Time Is: ";
