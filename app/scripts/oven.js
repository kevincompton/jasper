/*global define*/

define([
	'underscore',
	'collections/stores',
	'models/store'
], function(_, StoresCollection, Store) {
	'use strict';

	var i;

	Backbone.Collection.prototype.forceGet = function(id) {
		id = parseInt(id, 10);
		return this.get(id) || this.add({
			id: id
		});
	};

	var store = new Store();

	var stores = new StoresCollection();
	for (i = 0; i < 10; i++) {
		stores.add({
			id: i
		});
	}


	return {
		stores: stores
	};
});