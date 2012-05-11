/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */
 
 
/**
 * The root namespace
 * @const
 */
var	example = {};

/**
 * The views namespace
 * @const
 */
example.views = {};

/**
 * The mediators namespace
 * @const
 */
example.mediators = {};


/**
 * The models namespace
 * @const
 */
example.models = {};

/**
 * The commands namespace
 * @const
 */
example.commands = {};
/**
 * @author mr.doob / http://mrdoob.com/
 */

var Injector = function ()
{
	var singletons = [];

	this.mapSingleton = function(type)
	{
		singletons.push( {type:type, object:new type()} );
	};

	this.getSingleton = function( type )
	{
		for(var singleton in singletons)
		{
			if(singletons[singleton].type === type) return singletons[singleton].object;
		}
		
		return false;
	};
};/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */

var JSylum = {};
 
JSylum.Base = Class.extend({

	init: function(){
		this.mediatorMap = JSylum.injector.getSingleton( MediatorMap );
		this.eventBus = JSylum.injector.getSingleton( EventBus );
	},

	addContextListener: function(type, listener, scope){
		
		this.eventBus.addEventListener( type, listener, scope);
	},
	
	removeContextListener: function(type, listener, scope){
		this.eventBus.removeEventListener( type, listener, scope);
	},
	
	dispatch: function(event){
		this.eventBus.dispatchEvent( event );
	},
	
	getSingleton: function(type){
		return JSylum.injector.getSingleton(type);
	}
	
});
/**
 * @author mr.doob / http://mrdoob.com/
 */

var EventBus = function ()
{
	var listeners = {};

/**
     * Registers an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.addEventListener = function ( type, listener, ctx ) {
        var obj = {callback: listener, context: ctx};
        var exists = false;
        var events;

        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }

        events = listeners[ type ];

        for (var i = 0; i < events.length; i++) {

            if (events[i].callback === listener && events[i].context === ctx) {
                exists = true;
                break;
            }

        }

        if ( exists === false ) {
            listeners[ type ].push(obj);
        }

    };

    /**
     * Dispatches an event
     *
     * @param {Object} event The event
     * @param {String} event.type The event type
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.dispatchEvent = function ( event ) {
        var events = listeners[ event.type ];

        if (typeof events !== 'undefined') {
            for ( var i = 0; i < events.length; i++ ) {
                events[i].callback.call( events[i].context, event );
            }
        }

    };

    /**
     * Removes an event
     *
     * @param {String} type The event type
     * @param {Function} listener The callback function
     * @param {Object} ctx The context that will be used for the calling the callback
     * @author Mr.Doob
     * @author Thodoris Tsiridis
     */
    this.removeEventListener = function ( type, listener, ctx) {
        var index;
        var events = listeners[type];

        if (typeof events !== 'undefined') {
            for (var i = 0; i < events.length; i++) {
                if (events[i].callback === listener && events[i].context === ctx) {
                   index = i;
                   break;
                }
            }

            if ( index !== - 1 ) {
                listeners[ type ].splice( index, 1 );
            }
        }

    };

	
	// TODO: Needs completing for single fire
	this.mapEvent = function( type, listener, ctx, singleFire )
	{
		this.addEventListener( type, listener, ctx );
	}
};/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */

var MediatorMap = function () {

	var map = [];
	var mediators = [];

	this.mapView = function ( view, mediator )
	{
		map.push( {view:view, mediator:mediator} );
	};
	
	
	this.mediate = function(view)
	{
		var index = false;
		
		for(var i in map)
		{
			if(map[i].view === view.constructor)
			{
				index = i;
				break;
			}
		}
		
		if(index !== false)
		{
			var mediator = new map[index].mediator( view );
			mediators.push(mediator);
		}
	}

};
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Context = JSylum.Base.extend({

	init: function(){
		JSylum.injector = new Injector();
		JSylum.injector.mapSingleton( MediatorMap );
		JSylum.injector.mapSingleton( EventBus );
		
		this._super();
	}
	
});

/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Mediator = JSylum.Base.extend({

	init: function(view){
		this._super();
		this.view = view;
	},
	
	destroy: function(){
		this.view.destroy();
	}
	
});

/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.View = Class.extend({

	init: function(parent){
		this.parent = parent;
		
		this.draw();
		
		JSylum.injector.getSingleton( MediatorMap ).mediate(this);
	},
	
	draw: function(){
		
	},

	redraw: function(){
		
	},
	
	destroy: function(){
	
	}
	
});

/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
JSylum.Model = JSylum.Base.extend({

	init: function(){
		this._super();
	}
	
});

/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.BaseClock = JSylum.View.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		// Close Button
		this.closeButton = document.createElement("button");
		this.closeButton.innerHTML = "X";
		this.parent.appendChild( this.closeButton );
		
		this._super();
	},
	
	destroy: function(){
		this.parent.removeChild(this.closeButton);
		
		return this._super();
		
	}
	
});
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.AnalogClock = example.views.BaseClock.extend({

	init: function(container){
		this._super(container);
	},
	
	draw: function(){
		this.domElement = document.createElement("canvas");
		this.parent.appendChild( this.domElement );
	
		this.domElement.width = 100;
		this.domElement.height = 100;
	
		this.ctx = this.domElement.getContext("2d");
		
		this._super();
	},
	
	redraw: function(){
		this._super();

		var to = (Math.PI*1.5);
		var from = this.value * (Math.PI*2);
		from += to;
	
		// Clear
		this.ctx.clearRect(0, 0, 100, 100);
	
		// BG
		this.ctx.fillStyle = "#FF1C0A";
		this.ctx.fillRect(0, 0, 100, 100);
		this.ctx.closePath();
		
		// BG Circle
		this.ctx.fillStyle = "#00A308";
		this.ctx.beginPath();
		this.ctx.arc(50, 50, 50, from, to, true); 
		this.ctx.lineTo(50, 50);
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	setTime: function(time)
	{
		this.value = time.getSeconds() / 60;
		this.redraw();
	},
	
	destroy: function(){
		this.parent.removeChild(this.domElement);
		
		return this._super();
	}
	
});
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.DigitalClock = example.views.BaseClock.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		this.domElement = document.createElement("h2");
		this.parent.appendChild( this.domElement );
		
		this._super();
	},
	
	setTime: function(time)
	{
		this.domElement.innerHTML = time;
	},
	
	destroy: function(){
		this.parent.removeChild(this.domElement);
		
		return this._super();
	}
	
});
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.views.Tools = JSylum.View.extend({

	init: function(parent){
		this._super(parent);
	},
	
	draw: function(){
		this.addDigitalButton = document.createElement("button");
		this.addDigitalButton.innerHTML = "Digital";
		this.parent.appendChild( this.addDigitalButton );
		
		this.addAnalogButton = document.createElement("button");
		this.addAnalogButton.innerHTML = "Analog";
		this.parent.appendChild( this.addAnalogButton );
		
		this._super();
	},
	
	destroy: function(){
		this.parent.removeChild(this.addDigitalButton);
		this.parent.removeChild(this.addAnalogButton);
		
		return this._super();
	}
	
});

/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
example.mediators.Clock = JSylum.Mediator.extend({

	init: function(view){
		this._super(view);
		
		this.model = this.getSingleton(example.models.Clock);
		
		this.addContextListener( 'timeChanged', this.onTimeChanged, this );
		
		this.view.closeButton.onclick = this.destroy.bind(this);
		
		this.onTimeChanged();
	},
	
	onTimeChanged: function( event ){
		window.console.log('timeChanged mediator');
		this.view.setTime( this.model.time );
	},
	
	destroy: function(){
		this.removeContextListener( 'timeChanged', this.onTimeChanged, this );
		
		return this._super();
	}
	
});
/**
 * View component of the Model View Controller implementation
 * @param {*} view The jQuery DOM Element for the view
 * @constructor
 */
 
 
example.mediators.Tools = JSylum.Mediator.extend({

	init: function(view){
		this._super(view);
		
		var self = this;
		this.view.addDigitalButton.onclick = function()
		{
			self.dispatch( { type: 'addDigitalClock' } );
		}
	
		this.view.addAnalogButton.onclick = function()
		{
			self.dispatch( { type: 'addAnalogClock' } );
		}
	}
	
});
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
 
example.models.Clock = JSylum.Model.extend({

	init: function(){
		this._super();
		
		this.time = new Date();
		this.ticker = 0;
		
		this.addContextListener( 'tick', this.onTick, this);
		
	},
	
	getTime: function(){
		return this.time;
	},
	
	setTime: function( time ){
		this.time = time;
		this.dispatch( { type: 'timeChanged', time: this.time } );
	},
	
	onTick: function(event){
		this.setTime( new Date() );
	}
	
});
/**
 * Setups the initial views
 */
example.commands.setupViews = function()
{
	example.commands.addDigitalClock();
	example.commands.addAnalogClock();
	
	var tools = new example.views.Tools( document.getElementById("tools") );
}
/**
 * Add Clock
 */
example.commands.addDigitalClock = function()
{
	var clock = new example.views.DigitalClock( document.getElementById("coreView") );
}/**
 * Add Clock
 */
example.commands.addAnalogClock = function()
{
	var clock = new example.views.AnalogClock( document.getElementById("coreView") );
}/**
 * Starts the clock ticker
 */ 
example.commands.startTimer = function() {
	var eventBus = JSylum.injector.getSingleton(EventBus);
	
	var tick = function() {
		eventBus.dispatchEvent( { type: 'tick' } );
	}
	
	var model = JSylum.injector.getSingleton(example.models.Clock);
	model.ticker = setInterval( tick, 1000 );
}/**
 * Stops the clock ticker
 */
example.commands.stopTimer = function() {
	var model = JSylum.injector.getSingleton(example.models.Clock);
	clearInterval( model.ticker );
}/**
 * Demo Context
 */

example.Context = JSylum.Context.extend({

	init: function(){
		this._super();
		
		// Command Map
		this.eventBus.mapEvent('addDigitalClock', example.commands.addDigitalClock);
		this.eventBus.mapEvent('addAnalogClock', example.commands.addAnalogClock);
	
		// View Mediators
		this.mediatorMap.mapView(example.views.AnalogClock, example.mediators.Clock);
		this.mediatorMap.mapView(example.views.DigitalClock, example.mediators.Clock);
		this.mediatorMap.mapView(example.views.Tools, example.mediators.Tools);
		
		// Singleton Models
		JSylum.injector.mapSingleton(example.models.Clock);
		
		// Adding views to the main view then start
		example.commands.setupViews();
		example.commands.startTimer();
	}
	
});/**
 * Generic onReady function called from all pages.
 */

$(document).ready(function(){
	
	// Framework Setup
	var context = new example.Context();
	
});

