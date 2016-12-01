define([
    'angular',
    'uiRouter',
    // 'fireBase',
    // 'angularfire',
    // 'fireConfig',
    './controllers/index'
], function(ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'ui.router',
        // 'firebase'
    ]);
});
