/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates'
], function($, _, Marionette, JST) {
    'use strict';

    var StoresView = Marionette.CollectionView.extend({
        template: JST['app/scripts/templates/stores.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return StoresView;
});
