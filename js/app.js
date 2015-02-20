angular.module('todoList', ['ionic', 'todoList.controllers', 'todoList.services'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth', {
        url: "/auth",
        abstract: true,
        templateUrl: 'templates/auth.html'
      })
      .state('auth.signin', {
        url: '/signin',
        views: {
          'auth-signin': {
            templateUrl: 'templates/auth-signin.html',
            controller: 'SignInCtrl'
          }
        }
      })
      .state('auth.signup', {
        url: '/signup',
        views: {
          'auth-signup': {
            templateUrl: 'templates/auth-signup.html',
            controller: 'SignUpCtrl'
          }
        }
      })
      .state('todo', {
        url: '/todo',
        abstract: true,
        templateUrl: 'templates/todo.html'
      })
      .state('todo.list', {
        url: '/list',
        views: {
          'todo-list' : {
            templateUrl: 'templates/todo-list.html',
            controller: 'todoListCtrl'
          }
        }
      })
      .state('todo.completed', {
        url: '/completed',
        views: {
          'todo-completed': {
            templateUrl: 'templates/todo-completed.html',
            controller: 'completedCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/auth/signin');
  });
