/**
 * Generic onReady function called from all pages.
 */

$(document).ready(function(){
	
	// Framework Setup
	mediatorMap = new MediatorMap();
	
	eventBus = commandMap = new EventBus();

	injector = new Injector();
	
	
	// Shortcuts
	commands = namespace.project.commands;
	models = namespace.project.models;
	mediators = namespace.project.mediators;

	// Singleton Models
	injector.mapSingleton(models.Clock);

	// View Mediators
	mediatorMap.mapView('tools', mediators.Tools);
	mediatorMap.mapView('clock', mediators.Clock);
	
	// Command Map
	commandMap.mapEvent( 'addDigitalClock', commands.addClock);
	
	// Adding views to the main view then start
	commands.setupViews();
	commands.startTimer();

});

