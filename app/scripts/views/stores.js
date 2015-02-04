/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'collections/stores',
    'views/store'
], function($, _, Marionette, JST, StoresCollection, StoreView) {
    'use strict';

    var StoresView = Marionette.CollectionView.extend({

        tagName: "ul",

        childView: StoreView
        
    });

    return StoresView;
});
