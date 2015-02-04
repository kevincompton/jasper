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
    'app',
    'backbone',
    'views/main',
    'views/stores',
    'views/menu',
    'collections/stores',
    'collections/menu'
], function(app, Backbone, MainView, StoresView, StoresCollection, MenuView, MenuCollection) {
    'use strict';


    var storeList = new StoresCollection([
        {name: 'test'},
        {name: 'again'},
        {name: 'one more'}
    ]);
    var menuList = new MenuCollection([
        {name: 'test'},
        {name: 'again'},
        {name: 'one more'}
    ]);
    

    var storesView = new StoresView({
        collection: storeList
    });
    var menuView = new MenuView({
        collection: menuList
    });


    app.appRegion.show(storesView);
    //app.appMenu.show(menuView);

    app.start();

    Backbone.history.start();
});