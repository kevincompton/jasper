/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var StoreView = Backbone.View.extend({
        template: JST['app/scripts/templates/store.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            
        },

        
    });

    return StoreView;
});
