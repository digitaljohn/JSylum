# JSylum

JSylum is an minimal JavaScript MVC framework that has many direct similarities to the ActionScript framework, RobotLegs. Please remember just like RobotLegs, this framework has been purely created to assist you in connecting your application together and also modularise code so it is easy to maintain.

It features a useful ANT build file which can:

+ Compile JavaScript using the [YUI Compressor](http://developer.yahoo.com/yui/compressor/)


## Key Concepts and Methodologies

+ *EventBus* - There is a key 'Event Bus' that almost all classes have access to. This allows any part of your application to 'shout' and anything listening for it can despond accordningly.

+ *Context* - This is the main entry point for your application. It defines what Commands are run when certain Events fire through the Event Bus, what mediators are associated with a view, any shared singletons, language confiuration and finally starts the application in motion.

+ *Views & Mediator* - Views can be complex chunks of code and should *not* be mixed with application code. This is why there are Views and View Mediators. It allows you to code your view to simply display stuff, and the mediator looks after application logic. This also allows one person to be responible for UI and another for Application Logic and can work cleanly and independently from each other.

+ *Models* - Models should be used storing application data and notifying via the event bus of any changes or updates.

+ *Services* - Services usually go hand in hand with Models. A service is purly for sending or recieveing data.

## Example Action Flow

Here is a guide showing how a typical action could be executed. You could take shortcuts, e.g. call a service directly from a mediator rather than going through the command route. It really depends if code needs to be used elsewhere.

1. User clicks on a button within a `View`.
2. The views `Mediator` is listening for this then dispatches and event through the main `EventBus` saying 'getData'. 
3. The `Context` would have previously mapped a `Command` to an event and would execute.
4. The `Command` tells the `Service` to get some data.
5. The `Service` recieves and stores the data within the 'Model'
6. The `Model` dispatches an event through the `EventBus`.
7. A `Mediator` is listening for this event then asks its `View` to show the data.


## Quick Setup

To get started, first clone the repository:

```bash
$ cd /your/workspace
$ git clone git@github.com:digitaljohn/JSylum.git JSylum
```

Copy the current minified library from `dist/jsylum.mvc.js` to your project.


## Building with ANT

If you make changes to the core source files within the `src` folder you will need recompile using the ANT script.

To compile your project, just perform the following from within the `build` directory:

```bash
	$ ant build
```
