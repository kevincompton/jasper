/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'collections/stores',
    'oven'
], function($, _, Marionette, JST, StoresCollection, oven) {
    'use strict';

    var StoresView = Marionette.CollectionView.extend({
        
        template: JST['app/scripts/templates/stores.ejs'],

        tagName: 'div',

        id: '',

        className: 'stores',

        events: {},

        initialize: function (opts) {
            this.model = this.model || oven.stores.forceGet(opts.id);
            
        },

        
    });

    return StoresView;
});
