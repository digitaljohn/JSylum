# JSylum

JSylum is an minimal JavaScript MVC framework that has many direct similarities to the ActionScript framework, RobotLegs.

It features a useful ANT build file which can:

* Compile JavaScript using the [YUI Compressor](http://developer.yahoo.com/yui/compressor/)


## Quick Setup

To get started, first clone the repository:

```bash
$ cd /your/workspace
$ git clone git@github.com:digitaljohn/JSylum.git JSylum
```

Copy the current minified library from `dist/jsylum.mvc.js`.


## Building with ANT

If you make changes to the core source files within the `src` folder you will need recompile using the ANT script.

To compile your project, just perform the following from within the `build` directory:

```bash
	$ and build
```
