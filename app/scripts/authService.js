'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('myApp.services', [])
   
.service('rService', [function () {
    
    this.time_diff = function(t1,t2) {
    
        console.log('rService.time_diff ... ');
        //var d1 = new Date('1900-01-01T08:15:00.000Z');
        //var d2 = new Date('1900-01-01T09:20:00.000Z');
        console.log('t2' + t2);
        console.log('t1' + t1);
        console.log((t2-t1) / 1000 / 60 / 60 );
        var diff = t2 - t1;
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        //console.log(diff);
        //console.log(hh);
        //console.log(mm);
        //console.log(ss);
        return (hh+':'+mm).toString();
    };
    
  }])


  .service('version', [function() {
      return '0.0.1';
  }])


.factory('AuthService',           ['ENV', '$http', 'Session', '$rootScope', '$log',
                         function ( ENV,   $http,   Session,   $rootScope,   $log) {
  return {

    login: function (credentials) {

      $log.debug( $rootScope.base_url + '/api2/login');
        
      return $http
        .post($rootScope.base_url + '/api2/login', credentials)
        .then(function (res) {
            $log.debug('AuthService login then');
            $log.debug(res);
            $log.debug(res.data[0].id_utenti);
            Session.create(res.data[0].id_utenti, res.data[0].nome_breve_utenti, res.data[0].token,  res.data[0].isadmin_utenti);
        });


        
 /*
      return $http
        .post('/api2/login', credentials)
        .success(function (res) {
            console.log('AuthService login then');
            console.log(res);
            console.log(res.data.id_utenti);
            Session.create(res.data.id_utenti, res.data.nome_breve_utenti, res.data.token,  res.data.isAdmin);
        })
        .error(function (err) {
            console.log('auth error');
            console.log(err);
        });
*/

    },
      
    logout: function (credentials) {
        console.log('AuthService logout');
        console.log( $rootScope.base_url + '/api2/logout');
      return $http
        .post( $rootScope.base_url + '/api2/logout', credentials)
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