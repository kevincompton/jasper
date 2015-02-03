/*global define */

define([
    'marionette',
    'views/stores',
    'collections/stores'
], function(Marionette, StoresView, StoresCollection) {
	'use strict';

	//define the app
	var app = new Marionette.Application();


	// define the app regions
	app.addRegions({
        content: '#content'
	});

	app.addInitializer(function (options) {
		
		var storesView = new StoresView({
    		collection: StoresCollection
 		});
  		app.content.show(storesView);

	});


	return window.app = app;
});
