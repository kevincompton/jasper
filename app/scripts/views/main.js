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

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        regions: {
            progbar: '#progbar-content',
            content: '#content'
        },

        initialize: function () {
            
        },

        
    });

    return MainView;
});
