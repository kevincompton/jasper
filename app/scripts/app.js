/*global define */

define([
	'jquery',
    'underscore',
    'marionette',
    'views/main',
    'views/stores',
    'collections/stores',
    'models/store'
], function($, _, Marionette, StoresView, StoresCollection, StoreModel, MainView) {
	'use strict';

	//define the app
	var app = new Marionette.Application();

	app.addRegions({
		appMenu : '#jasper-menu',
    	appContent : '#jasper-content'
	});
	


	app.addInitializer(function (options) {

		

	});


	return window.app = app;
});
