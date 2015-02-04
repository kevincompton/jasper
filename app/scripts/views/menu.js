/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates',
    'collections/menu',
    'views/link'
], function($, _, Marionette, JST, MenuCollection, LinkView) {
    'use strict';

    var MenuView = Marionette.CollectionView.extend({

        tagName: 'ul',

        childView: LinkView

    });

    return MenuView;
});
