/*global define*/

define([
    'jquery',
    'backbone'
], function($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        
        routes: {
        	'stores' : 'stores'
        },

        initialize: function(opts) {
			this.mainView = opts.mainView;
		}

    });

    return MainRouter;
});
