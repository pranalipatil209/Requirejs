/*inject all the dependency here*/
define([
    'angular',
    'uiRouter',
    './controllers/index'
], function(ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'ui.router',
        // 'firebase'
    ]);
});
