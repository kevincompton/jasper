/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var StoreModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            name: 'Robins Brothers',
            address: '12345 Robin st.',
            city: 'Los Angeles',
            state: 'Ca',
            zip: '90039',
            phone: '55512345678',
            website: 'http://google.com'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return StoreModel;
});
