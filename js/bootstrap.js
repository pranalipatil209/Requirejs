/*define all the used js files*/
define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     */

    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['app']);
    });
});
