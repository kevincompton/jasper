/*global define*/

define([
    'underscore',
    'backbone',
    'models/store'
], function (_, Backbone, StoresModel) {
    'use strict';

    var StoresCollection = Backbone.Collection.extend({
        model: StoresModel
    });

    return StoresCollection;
});
