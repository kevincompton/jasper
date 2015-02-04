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
    'collections/stores',
    'views/menu',
    'collections/menu'
], function(app, Backbone, MainView, StoresView, StoresCollection, MenuView, MenuCollection) {
    'use strict';


    var storeList = new StoresCollection([
        {name: 'test'},
        {name: 'again'},
        {name: 'one more'}
    ]);
    var menuList = new MenuCollection([
        {name: 'testing'},
        {name: 'again and'},
        {name: 'one more time'}
    ]);
    
    

    var storesView = new StoresView({
        collection: storeList
    });

    var menuView = new MenuView({
        collection: menuList
    });


    app.appContent.show(storesView);
    app.appMenu.show(menuView);

    app.start();

    Backbone.history.start();
});