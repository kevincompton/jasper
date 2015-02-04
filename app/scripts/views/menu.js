/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'views/link',
    'collections/menu'
], function($, _, Marionette, JST, MenuCollection, LinkView) {
    'use strict';

    var MenuView = Backbone.Marionette.CollectionView.extend({

        tagName: 'ul',

        childView: LinkView

    });

    return MenuView;
});
