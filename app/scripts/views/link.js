/*global define*/

define([
    'jquery',
    'underscore',
    'marionette',
    'templates'
], function($, _, Marionette, JST) {
    'use strict';

    var LinkView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/link.ejs'],

        tagName: 'li',

        className: 'link',

        events: {},

        initialize: function () {
            
        },
        
       
    });

    return LinkView;
});
