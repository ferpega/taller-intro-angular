'use strict';

// inicializar el módulo

// configuración inicial


var zgzApp = angular.module('zgzApp', [ 'ngRoute', 'ngResource']);

zgzApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/listado.html',
      controller: 'ListadoController'
    }
  ).otherwise({
      redirectTo: '/'
    });
});
