/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */
var	JSylum = {};

JSylum.init = function()
{
	JSylum.mediatorMap = new MediatorMap();
	JSylum.eventBus = JSylum.commandMap = new EventBus();
	JSylum.injector = new Injector();
}

