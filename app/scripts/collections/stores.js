/*global define*/

define([
    'underscore',
    'backbone',
    'models/store'
], function(_, Backbone, StoreModel) {
    'use strict';

    var StoresCollection = Backbone.Collection.extend({
        model: StoreModel
    });

    

    return StoresCollection;
});
