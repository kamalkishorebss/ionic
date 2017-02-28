// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova','ngMaterial', 'starter.controllers','starter.services','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  
  
   
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'browserCtrl'
        }
      }
    })
  .state('app.todo', {
      url: '/todo',
      views: {
        'menuContent': {
          templateUrl: 'templates/addtodo.html',
          controller: 'browserCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
   .state('app.registersales', {
    url: '/registersales',
    views: {
      'menuContent': {
        templateUrl: 'templates/registersales.html',
        controller: 'registersales'
      }
    }
  })
   .state('app.selectedproduct', {
    url: '/selectedproduct',
    views: {
      'menuContent': {
        templateUrl: 'templates/selectedproducts.html',
        controller: 'registersales'
      }
    }
  })
   .state('app.manualsale', {
    url: '/manualsale',
    views: {
      'menuContent': {
        templateUrl: 'templates/manualsale.html',
        controller: 'registersales'
      }
    }
  })   
   .state('app.paymentform', {
    url: '/paymentform',
    views: {
      'menuContent': {
        templateUrl: 'templates/SelectPaymentForm.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.registerexpenses', {
    url: '/registerexpenses',
    views: {
      'menuContent': {
        templateUrl: 'templates/registerexpenses.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.myProduct', {
    url: '/myProduct',
    views: {
      'menuContent': {
        templateUrl: 'templates/newProduct.html',
        controller: 'registersales'
      }
    }
  })
  .state('app.productlist', {
    url: '/productlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/Mybusinessproduct.html',
        controller: 'registersales'
        //done
      }
    }
  }) 
  .state('app.viewproduct', {
    url: '/viewproduct',
    views: {
      'menuContent': {
        templateUrl: 'templates/productview.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.business', {
    url: '/business',
    views: {
      'menuContent': {
        templateUrl: 'templates/business.html',
         controller: 'registersales'
      }
    }
  })
  .state('app.otherexpenses', {
    url: '/otherexpenses',
    views: {
      'menuContent': {
        templateUrl: 'templates/otherexpenses.html',
        controller: 'registersales'
      //done
      }
    }
  })  
  .state('app.financialreports', {
    url: '/financialreports',
    views: {
      'menuContent': {
        templateUrl: 'templates/FinancialReports.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.team', {
    url: '/team',
    views: {
      'menuContent': {
        templateUrl: 'templates/MyWorkTeam.html',
        controller: 'teamworkCtrl'
        //done
      }
    }
  })
  .state('app.family', {
    url: '/family/:memId',
    views: {
      'menuContent': {
        templateUrl: 'templates/MyFamily.html',
        controller: 'teamworkCtrl'
      //done
      }
    }
  })
  .state('app.member', {
    url: '/member',
    views: {
      'menuContent': {
        templateUrl: 'templates/newmember.html',
        controller: 'teamworkCtrl'
      //done
      }
    }
  })
  .state('app.location', {
    url: '/location',
    views: {
      'menuContent': {
        templateUrl: 'templates/location.html',
        controller: 'registersales'
      //done
      }
    }
  })
  .state('app.searchproduct', {
    url: '/searchproduct',
    views: {
      'menuContent': {
        templateUrl: 'templates/searchproduct.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.income', {
    url: '/income',
    views: {
      'menuContent': {
        templateUrl: 'templates/registerincome.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.erase', {
    url: '/erase',
    views: {
      'menuContent': {
        templateUrl: 'templates/eraseproduct.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.eraseconfirm', {
    url: '/eraseconfirm',
    views: {
      'menuContent': {
        templateUrl: 'templates/eraseconfirm.html',
        controller: 'registersales'
        //done
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
