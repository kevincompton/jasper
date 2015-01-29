/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'views/main',
    'routes/main'
], function(Backbone, MainView, MainRouter) {
    var mainView = new MainView();
    var mainRegion = new Backbone.Marionette.Region({
      el: "#jasper-briefcase"
    });
    mainRegion.show(mainView);
    new MainRouter({
        mainView: mainView
    });
    Backbone.history.start();
});
