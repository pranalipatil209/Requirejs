require.config({
  /*Give all the AMD paths*/
    paths: {
        'domReady': '../bower_components/domReady/domReady',
        'angular': '../bower_components/angular/angular',
		    'uiRouter' : '../bower_components/angular-ui-router/release/angular-ui-router',
        'fireBase' : '../bower_components/firebase/firebase',
        'angularfire' : '../bower_components/angularfire/dist/angularfire',
        'fireConfig' : 'firebase'
		  },
      /*shim used to pass the dependency*/
      shim: {
           'angular': {
               exports: 'angular'
           },
           'uiRouter':{
               deps: ['angular']
           },
           'fireConfig':{
             deps:['angular']
           }
       },
       deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
