/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'views/stores',
], function($, _, Marionette, JST, StoresView) {
    'use strict';

    var MainView = Marionette.LayoutView.extend({
        template: JST['app/scripts/templates/main.ejs'],

        regions: {
            content: '#content'
        },
        
    });

    return MainView;
});
