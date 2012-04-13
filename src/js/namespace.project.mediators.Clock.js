
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Clock = function( view ) {
	
	this.model = injector.getSingleton(models.Clock);
	this.view = view;
	
	this.clockDisplay = $('span.display', this.view);
	this.closeButton = $('a.close', this.view);
	
	
	var self = this;

	//We add an inline function. How to remove the listener?
	eventBus.addEventListener( 'timeChanged', function(){
		self.onTimeChanged();
	});
	
	this.closeButton.bind('click', function(){
		self.destroy();
	});
	

	this.onTimeChanged();
}


namespace.project.mediators.Clock.prototype.onTimeChanged = function( event ) 
{
	console.log('timeChanged mediator');
	this.clockDisplay.html(mediators.Clock.TIME_PREFIX+this.model.time);
}


namespace.project.mediators.Clock.prototype.destroy = function( event ) 
{
	// Should we set HTML to ''?
	this.view.remove();
	eventBus.removeEventListener( 'timeChanged', this.onTimeChanged );
	mediatorMap.mediate();
}

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.mediators.Clock.TIME_PREFIX = "The Time Is: ";
