/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'collections/stores',
    'views/store',
    'oven'
], function($, _, Marionette, JST, StoresCollection, StoreView, oven) {
    'use strict';

    var StoresView = Marionette.CompositeView.extend({
        
        template: JST['app/scripts/templates/stores.ejs'],

        tagName: 'div',

        id: '',

        className: 'stores',

        itemView: StoreView,

        events: {},

        initialize: function (opts) {
            
            
        },

        modelChanged: function(model, value){
        },

        appendHtml: function(StoresView, StoreView){
            StoresView.$("#content").append(StoreView.el);
        }
        
    });

    return StoresView;
});
