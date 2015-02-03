/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates'
], function($, _, Marionette, JST) {
    'use strict';

    var StoreView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/store.ejs'],

        tagName: 'div',

        className: 'store',

        events: {},

        initialize: function () {
            
        },

        
    });

    return StoreView;
});
