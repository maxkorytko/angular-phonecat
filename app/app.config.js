import * as angular from 'angular';

angular.
  module('phonecatApp').
  config([
    '$compileProvider',
    function config($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|capacitor):/);
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|capacitor):/);
    },
  ]).
  config([
    '$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    },
  ]);
