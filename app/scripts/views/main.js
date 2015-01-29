/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates'
], function($, _, Marionette, JST) {
    'use strict';

    var MainView = Marionette.LayoutView.extend({
        template: JST['app/scripts/templates/main.ejs'],

        tagName: 'div',

        id: 'jasper-briefcase',

        className: '',

        events: {},

        regions: {
            progbar: '#progbar-content',
            content: '#content'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return MainView;
});
