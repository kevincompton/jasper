/*global define*/

define([
    'underscore',
    'backbone',
    'models/link'
], function(_, Backbone, LinkModel) {
    'use strict';

    var MenuCollection = Backbone.Collection.extend({
        model: LinkModel
    });

    return MenuCollection;
});
