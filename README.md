JSylum
=============

JSylum is an minimal JavaScript MVC framework that has many direct similaraties to the ActionScript framework, RobotLegs.

It features a useful ANT build file which can:

* Refactor template files to match your project and namespace
* Compile JavaScript using the [Google Closure Compiler](http://code.google.com/closure/compiler/)
* Minify CSS using the [YUI Compressor](http://developer.yahoo.com/yui/compressor/)
* Generate JavaScript documentation using the [JSDoc Toolkit](http://code.google.com/p/jsdoc-toolkit/)
* Sanitize HTML and inject variables at compile time


Quick Setup
-------------

To get started, first clone the repository:

	cd /your/workspace
	git clone git@github.com:digitaljohn/JSylum.git YourProjectName

Run the **setup** task and enter your project's namespace when prompted:
	
	cd YourProjectName
	ant setup
	Enter the full project namespace for this project: com.domain.project

This will refactor the project template to match your namespace. You'll then be given the option to *delete the GIT metadata* and disconnect from the JSylum repository...

###Now Start Coding!

Code is combined and compiled / minified using **blocks**. For example, the following block will compile the contained scripts into a single file (defined in [build.properties](https://github.com/digitaljohn/JSylum/blob/master/build.properties)) and compile using Closure Compiler. The build script will then replace this block with a reference to the compiled file.

	<!--[BEGIN:JS:SRC]-->
	<script src="js/constants/namespace.js"></script>
		
	<script src="js/jsylum/Class.js"></script>
	<script src="js/jsylum/Base.js"></script>
	
	<script src="js/jsylum/EventBus.js"></script>
	<script src="js/jsylum/Injector.js"></script>
	<script src="js/jsylum/MediatorMap.js"></script>
	
	<script src="js/jsylum/Context.js"></script>
	<script src="js/jsylum/Mediator.js"></script>
	<script src="js/jsylum/View.js"></script>
	<script src="js/jsylum/Model.js"></script>
	
	<script src="js/views/BaseClock.js"></script>
	<script src="js/views/AnalogClock.js"></script>
	<script src="js/views/DigitalClock.js"></script>
	<script src="js/views/Tools.js"></script>
	
	<script src="js/mediators/Clock.js"></script>
	<script src="js/mediators/Tools.js"></script>
	
	<script src="js/models/Clock.js"></script>
	
	<script src="js/commands/setupViews.js"></script>
	<script src="js/commands/addDigitalClock.js"></script>
	<script src="js/commands/addAnalogClock.js"></script>
	<script src="js/commands/startTimer.js"></script>
	<script src="js/commands/stopTimer.js"></script>
	
	<script src="js/Context.js"></script>
	
	<script src="js/app.js"></script>
	<!--[END]-->

Scripts and styles embedded outside of blocks will remain untouched to add flexibility, whilst all blocks of the same type in different pages will intelligently be compiled together.

Springboard supports blocks for both third party libraries and project source files in CSS and JavaScript. Libraries used by your project are combined to reduce HTTP requests but not minfied, whereas project source files are.

Springboard uses [externs](http://code.google.com/closure/compiler/docs/api-tutorial3.html) to manage compiled code dependancies and ships with externs for [JQuery 1.5](http://jquery.com/). Externs for other libraries can be generated using [Closure Compiler Externs Extractor](http://www.dotnetwise.com/Code/Externs/index.html).

###Building with ANT

Aside from the **setup** task, the two main ANT tasks used by JSylum are **build** and **jsdoc**.

To compile your project, run **build**:

	ant build

To generate JavaScript documentation, run **jsdoc**:

	ant jsdoc