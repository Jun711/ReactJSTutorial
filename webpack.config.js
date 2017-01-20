// write the logic to set up and configure webpack
//import webpack from "webpack" // var webpack = require("webpack");
// var path = require("path");
var path = require("path"); // import path from "path" 

var DIST_DIR = path.resolve(__dirname, "dist") // global variable __dirname, copy everything that we prepare to 
  												// dist folder (transpiled and bundled files that will serve the app)
var SRC_DIR = path.resolve(__dirname, "src") // untranspiled source code

var config = {
	// entry to transpiling and bundling journey, bundling all the dependencies and inputs
	entry: SRC_DIR + "/app/indexR.js", //root file that starts the application
    output: {
    	path: DIST_DIR + "/app", // target directory
    	filename: "bundle.js",
    	publicPath: "/app/", // public folder, path to the public server, it is where the app lives in
    },
    module: { // all the modules that we need to use during the webpack process
    	loaders: [ // we dont need to provide modules if we are doing vanilla js and if we dont need to 
	    	{	   // compile or change anything
	    		test: /\.js?/, // regular expression enclosed in "/.../"
	    		include: SRC_DIR, // which files should it scan for
	    		loader: "babel-loader",  // the loader is babel with the following query keys / presets
	    		query: { // JS objects, query keys
	    			presets: ["react", "es2015", "stage-2"]
	    		}
	    	}
	    ]

    }
}

module.exports = config;