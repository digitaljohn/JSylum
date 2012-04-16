
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
namespace.mediators.Clock = function( view ) {
	
	var self = this;
	
	this.model = JSylum.injector.getSingleton(models.Clock);
	this.view = view;
	
	this.onTimeChanged = function( event )
	{
		console.log('timeChanged mediator');
		
		view.setTime( self.model.time );
	}
	
	this.destroy = function()
	{
		JSylum.eventBus.removeEventListener( 'timeChanged', self.onTimeChanged );
		self.view.destroy();
	}
	
	this.view.closeButton.onclick = function()
	{
		self.destroy();
	}
	
	JSylum.eventBus.addEventListener( 'timeChanged', this.onTimeChanged );

	this.onTimeChanged();

}