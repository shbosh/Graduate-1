angular.module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('tabsController.requirements', {
        url: '/page2',
        views: {
          'tab1': {
            templateUrl: 'templates/requirements.html',
            controller: 'requirementsCtrl'
          }
        }
      })





      .state('tabsController.modules', {
        url: '/page3',
        views: {
          'tab2': {
            templateUrl: 'templates/modules.html',
            controller: 'modulesCtrl'
          }
        }
      })





      .state('tabsController.profile', {
        url: '/page4',
        views: {
          'tab3': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          }
        }
      })

      .state('tabsController.modulestaken', {
        url: '/page5',
        views: {
          'tab4': {
            templateUrl: 'templates/modulestaken.html',
            controller: 'modulestakenCtrl'
          }
        }
      })




      .state('tabsController', {
        url: '/page1',
        abstract:true,
        templateUrl: 'templates/tabsController.html'
      })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/page1/page2');

  });
