
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.project.mediators.Clock = function( view ) {
	
	var self = this;
	
	this.model = injector.getSingleton(models.Clock);
	this.view = view;
	
	this.TIME_PREFIX = "The Time Is: ";
	
	this.clockDisplay = $('span.display', this.view);
	this.closeButton = $('a.close', this.view);
	
	this.onTimeChanged = function( event )
	{
		console.log('timeChanged mediator');
		self.clockDisplay.html(self.TIME_PREFIX+self.model.time);
	}
	
	this.onCloseClick = function( event ) 
	{
		self.view.remove();
		mediatorMap.mediate();
	}
	
	this.destroy = function()
	{
		eventBus.removeEventListener( 'timeChanged', self.onTimeChanged );
	}
	
	eventBus.addEventListener( 'timeChanged', this.onTimeChanged );
	this.closeButton.bind('click', this.onCloseClick);

	this.onTimeChanged();

}