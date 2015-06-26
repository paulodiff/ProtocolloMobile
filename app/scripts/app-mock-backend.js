// We will be using backend-less development
// $http uses $httpBackend to make its calls to the server
// $resource uses $http, so it uses $httpBackend too
// We will mock $httpBackend, capturing routes and returning data
// http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock

'use strict';
// Set $httpBackend.whenGET for mock or .passThrough() for serve
angular.module('myApp.mockBackend', []).run(function($httpBackend, DataMockModule) {
    
    $httpBackend.whenGET('/games').respond(function(method, url, data) {
        var games = DataMockModule.findAll();
        return [200, games, {}];
    });
    
    $httpBackend.whenGET(/\/games\/\d+/).respond(function(method, url, data) {
        // parse the matching URL to pull out the id (/games/:id)
        var gameid = url.split('/')[2];
        
        var game = DataMockModule.findOne(gameid);

        return [200, game, {}];
    });

    // this is the creation of a new resource
    $httpBackend.whenPOST('/games').respond(function(method, url, data) {
        var params = angular.fromJson(data);

        var game = DataMockModule.addOne(params);
        
        // get the id of the new resource to populate the Location field
        var gameid = game.gameid;
        
        return [201, game, { Location: '/games/' + gameid }];
    });

    // this is the update of an existing resource (ngResource does not send PUT for update)
    $httpBackend.whenPOST(/\/games\/\d+/).respond(function(method, url, data) {
        var params = angular.fromJson(data);

        // parse the matching URL to pull out the id (/games/:id)
        var gameid = url.split('/')[2];
        
        var game = DataMockModule.updateOne(gameid, params);
        
        return [201, game, { Location: '/games/' + gameid }];
    });
    
    // this is the update of an existing resource (ngResource does not send PUT for update)
    $httpBackend.whenDELETE(/\/games\/\d+/).respond(function(method, url, data) {
        // parse the matching URL to pull out the id (/games/:id)
        var gameid = url.split('/')[2];
        
        DataMockModule.deleteOne(gameid);
        
        return [204, {}, {}];
    });    
    
    $httpBackend.whenPOST('http://fakedev.yoursite.com:109900/api2/login').respond(function(method, url, data) {
        var user = [
                    {
                        "id_utenti" :  'DEMO',
                        "nome_breve_utenti": 'DEMO', 
                        "token" : 'token0001',
                        "isadmin_utenti" : true
                    }
                    ];
        
        return [200, user, {}];
    });


    $httpBackend.whenGET(/views\//).passThrough();
    $httpBackend.whenGET(/templates\//).passThrough();
    $httpBackend.whenPOST('https://dsp-paulo-difficiliora.cloud.dreamfactory.com/rest/user/session').passThrough();
    $httpBackend.whenDELETE('https://dsp-paulo-difficiliora.cloud.dreamfactory.com/rest/user/session').passThrough();
    $httpBackend.whenPOST('https://dsp-paulo-difficiliora.cloud.dreamfactory.com:443/rest/db/log').passThrough();
    $httpBackend.whenPOST('https://dsp-paulo-difficiliora.cloud.dreamfactory.com:443/rest/db/log1').passThrough();
    $httpBackend.whenGET('https://dsp-paulo-difficiliora.cloud.dreamfactory.com:443/rest/db/log')
    .respond(function(method, url, data) {
        var games = {};
        games.record = DataMockModule.findAll();
        return [200, games, {}];
    });


    $httpBackend.whenGET(/tipiDocumentoAll/).respond(function(method, url, data) {
   var data = [
      {
     "id" : 1,
     "checked" :  true,
     "text" : "TIPO DOC 1 - SEQUESTRO"
    },
     {
     "id" : 2,
     "checked" :  true,
     "text" : "TIPO DOC 2 - RICHIESTA"
    },
     {
     "id" : 3,
     "checked" :  true,
     "text" : "TIPO DOC 3 - ????"
    },
     {
     "id" : 4,
     "checked" :  true,
     "text" : "TIPO DOC 4 - RICHIESTA"
    }
]
        
    return [200, data, {}];
});

    $httpBackend.whenGET(/oggettiDocumentoAll/).respond(function(method, url, data) {
   var data = [
     {
     "id" : 1,
     "checked" :  true,
     "text" : "OGGETTO test 0001 "
    },
     {
     "id" : 2,
     "checked" :  true,
     "text" : "OGGETTO test 0002 "
    },
     {
     "id" : 3,
     "checked" :  true,
     "text" : "OGGETTO test 0003 "
    },
     {
     "id" : 4,
     "checked" :  true,
     "text" : "OGGETTO test 0004 "
    }
]
        
    return [200, data, {}];
});


 $httpBackend.whenGET(/serviziAll/).respond(function(method, url, data) {

    var data = [
         {
         "id" : 1,
         "checked" :  true,
         "text" : "OGGETTO test 0001 "
        }
    ]
            
    return [200, data, {}];
 });



 $httpBackend.whenGET(/volontariAll/).respond(function(method, url, data) {

    var data = [
         {
         "id" : 1,
         "checked" :  true,
         "text" : "OGGETTO test 0001 "
        }
    ]
            
    return [200, data, {}];
 });

    $httpBackend.whenGET(/protocolliAll/).respond(function(method, url, data) {
    var data = [
     {
    "index": 0,
    "anno": 2015,
    "numero": 12697,
    "classifica": 106346,
    "about": "pariatur incididunt magna",
    "registered": "2014-05-24T13:27:07 -02:00",
    "data_protocollo": "18-07-2014"
  },
  {
    "index": 1,
    "anno": 2015,
    "numero": 12834,
    "classifica": 95593,
    "about": "eu sint aliquip",
    "registered": "2014-01-23T20:39:51 -01:00",
    "data_protocollo": "14-07-2014"
  },
  {
    "index": 2,
    "anno": 2015,
    "numero": 12530,
    "classifica": 128677,
    "about": "excepteur ex ex",
    "registered": "2015-04-30T17:54:42 -02:00",
    "data_protocollo": "26-03-2015"
  },
  {
    "index": 3,
    "anno": 2015,
    "numero": 12094,
    "classifica": 45811,
    "about": "nostrud veniam id",
    "registered": "2014-04-15T15:15:48 -02:00",
    "data_protocollo": "30-01-2014"
  },
  {
    "index": 0,
    "anno": 2015,
    "numero": 12697,
    "classifica": 106346,
    "about": "pariatur incididunt magna",
    "registered": "2014-05-24T13:27:07 -02:00",
    "data_protocollo": "18-07-2014"
  },
  {
    "index": 1,
    "anno": 2015,
    "numero": 12834,
    "classifica": 95593,
    "about": "eu sint aliquip",
    "registered": "2014-01-23T20:39:51 -01:00",
    "data_protocollo": "14-07-2014"
  },
  {
    "index": 2,
    "anno": 2015,
    "numero": 12530,
    "classifica": 128677,
    "about": "excepteur ex ex",
    "registered": "2015-04-30T17:54:42 -02:00",
    "data_protocollo": "26-03-2015"
  },
  {
    "index": 3,
    "anno": 2015,
    "numero": 12094,
    "classifica": 45811,
    "about": "nostrud veniam id",
    "registered": "2014-04-15T15:15:48 -02:00",
    "data_protocollo": "30-01-2014"
  },
  {
    "index": 4,
    "anno": 2015,
    "numero": 12081,
    "classifica": 45505,
    "about": "enim cupidatat exercitation",
    "registered": "2014-07-08T11:31:14 -02:00",
    "data_protocollo": "25-06-2014"
  }
]
        
    return [200, data, {}];
});


});


/* http://fakedev.yoursite.com:109900/apiQ/protocolliAll */


        


/*

http://www.json-generator.com/

[
  '{{repeat(5, 6)}}',
  {
    index: '{{index()}}',
    anno: '{{integer(2015, 2015)}}',
    numero: '{{integer(12015, 13015)}}',
    classifica: '{{firstName()}} {{surname()}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    data_protocollo: '{{date(new Date(2014, 0, 1), new Date(), "dd-MM-YYYY")}}'
    
  }
]


*/