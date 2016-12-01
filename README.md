# Requirejs
1. Give path to requirejs in index.html
2. Go to main.js
3. In main.js give path to all AMD files and make a shim in which all dependencies are put.
4. From main.js go to bootstrap.js in which we define app,route,angular and require.
    use ng.bootstrap(document, ['app']); in place of ng-app directive.
5. Now goto app.js and pass the dependency of all files including controllers,services,filters etc
6. Then go to route.js where all configuration files are there
7. Go to controller/index and define our contollers files and then used our contrllers main  files which   depend on modules  
