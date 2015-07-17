'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('myApp.services', [])
   
  .service('version', [function() {
      return '1.0.0';
  }])


.factory('AuthService',           ['ENV', '$http', 'Session', '$rootScope', '$log',
                         function ( ENV,   $http,   Session,   $rootScope,   $log) {
  return {

    login: function (credentials) {

      $log.debug( $rootScope.base_url + ENV.apiLogin);
        
      return $http
        .post($rootScope.base_url + ENV.apiLogin, credentials)
        .then(function (res) {
            $log.debug('AuthService login then');
            $log.debug(res);
            $log.debug(res.data.id_utenti);
            Session.create(res.data.id_utenti, res.data.nome_breve_utenti, res.data.token,  res.data.isadmin_utenti);
        });
    },
      
    logout: function (credentials) {
        console.log('AuthService logout');
        console.log( $rootScope.base_url + ENV.apiLogout);
      return $http
        .post( $rootScope.base_url + ENV.apiLogout, credentials)
        .then(function (res) {
            console.log('AuthService login then');
            console.log(res);
            console.log(res.data.id_utenti);
            Session.destroy();
        });
    },  
      
    isAuthenticated: function () {
        console.log('AuthService isAuthenticated');
        return !!Session.id_utenti;
    },
      
    isAuthorized: function (authorizedRoles) {
        console.log('AuthService isAuthorized');
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (this.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    }
  };
}])

.service('Session', function () {
  this.create = function (id_utenti, nome_breve_utenti, token, isAdmin) {
    console.log('Session create id:' + id_utenti);
    console.log('Session nome_breve_utenti:' + nome_breve_utenti);
    console.log('Session token:' + token);
    console.log('Session isAdmin:' + isAdmin);
    this.id_utenti = id_utenti;
    this.nome_breve_utenti = nome_breve_utenti;
    this.token = token;
    this.isAdmin = isAdmin;
  };
  this.destroy = function () {
      console.log('Session destroy');
    this.id_utenti = null;
    this.nome_breve_utenti = null;
    this.token = null;
    this.isAdmin = false;
  };
  return this;
});