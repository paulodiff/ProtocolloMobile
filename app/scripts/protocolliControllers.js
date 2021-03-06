'use strict';

/* Controllers */

//angular.module('myApp.controllers', [])
angular.module('myApp.controllers')



//EditItemCtrl--------------------------------------------------------------------------------------
//EditItemCtrl--------------------------------------------------------------------------------------
//EditItemCtrl--------------------------------------------------------------------------------------
//EditItemCtrl--------------------------------------------------------------------------------------
//EditItemCtrl--------------------------------------------------------------------------------------
.controller('EditItemProtocolloController', 
            ['$scope', '$filter', '$state', '$stateParams', 'Restangular',  'Session', '$ionicPopup', '$log', '$ionicLoading',   
    function( $scope,   $filter,   $state,   $stateParams,   Restangular,    Session,   $ionicPopup,   $log,   $ionicLoading) {

    // azione deriva dalla configurazione del controller new/edit
    $log.debug('EditItemProtocolloCtrl:  configAction :' +  $state.current.configAction);
    $log.debug($state);
    $log.debug($stateParams);
            
    var configAction = $state.current.configAction;
    $scope.configAction = configAction;
    $scope.item = {};
    $scope.openedPopupDate = false;   
    $scope.formstatus = {};
    $scope.formstatus.showDetailData = true;
                            
    $log.debug(  'EditItemProtocolloController:  load button action :');      
                        
    $scope.toggleRight = function() {
        $state.go('menu.list');
    };                                 
 
    $scope.rightButtons =  [{
        type: 'button-icon button-clear ion-email',
        tap: function(e) {
                alert('EditItemProtocolloController : rightButton fired!');
        }
    }];    
                                     
                        
    if (( configAction == 'edit') || ( configAction == 'view') || ( configAction == 'new'))  {
        $log.debug('EditItemProtocolloController : get data from serviziAll : ' +  $stateParams.id + ' ACTION ' + configAction );

        
        if ( configAction == 'new') {
            $log.debug('EditItemProtocolloController : Initializza form');
            $stateParams.id = 0;
            $scope.item.CodiceFiscale = '';
            $scope.item.OggettoDescrizione = '';
            $scope.item.Note = '';
            $scope.item.CognomeNome = '';
            $scope.item.DataDiNascita = '';

        }
        

            $log.debug('EditItemProtocolloController : Set oggetti e tipi documento');

            $scope.tipiDocumentoList = [
                              {
                             "id" : 26027,
                             "checked" :  true,
                             "text" : "26027 SEQUESTRO PENALE IGNOTI"
                            },
                             {
                             "id" : 26028,
                             "checked" :  true,
                             "text" : "26028 SEQUESTRO PENALE NOMINATIVO"
                            },
                             {
                             "id" : 26029,
                             "checked" :  true,
                             "text" : "26029 SEQUESTRO AMMINISTRATIVO NOMINATIVO"
                            },
                             {
                             "id" : 26030,
                             "checked" :  true,
                             "text" : "26030 RINVENIMENTI"
                            },
                            {
                             "id" : 26031,
                             "checked" :  true,
                             "text" : "26031 DISTRUZIONE"
                            }
                ];
/*
            $scope.oggettiDocumentoList = [

                              {
                             "id" : 22001,
                             "checked" :  true,
                             "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, massa nec maximus auctor, lorem massa scelerisque urna, vel tempus erat nunc id dui. "
                            },
                             {
                             "id" : 2,
                             "checked" :  true,
                             "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, massa nec maximus auctor, lorem massa scelerisque urna, vel tempus erat nunc id dui. "
                            },
                             {
                             "id" : 3,
                             "checked" :  true,
                             "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, massa nec maximus auctor, lorem massa scelerisque urna, vel tempus erat nunc id dui. "
                            },
                             {
                             "id" : 4,
                             "checked" :  true,
                             "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, massa nec maximus auctor, lorem massa scelerisque urna, vel tempus erat nunc id dui. "
                            }
                ];
*/
    }
                        
    
    $scope.master = {};
    $scope.timeCalculated = 0;
    
 

   /* 
    //#### DELETE ACTION
    $scope.cancel_action = function(item){
        
        $log.debug('EditItemProtocolloController : cancel_action....');
        var confirmPopup = $ionicPopup.confirm({
                title: 'Messaggio',
                template: 'Annullare il presente elemento?'
        });
            
        confirmPopup.then(function(res) {
             if(res) {
                   $log.debug('EditItemProtocolloController : Deleting....');
                   $log.debug(item.id_servizi);
                   Restangular.oneUrl('servizi', '/api1/servizi/' + item.id ).get().then(
                     function(account){
                            $log.debug('get!');
                            $log.debug(account);
                            account.annullato_servizi = 1;
                            $log.debug('put!');
                            //Restangular.setBaseUrl('/api1/servizi/' + item.id_servizi);
                            Restangular.setBaseUrl('/api1');
                            account.customPUT({annullato_servizi : 1},item.id, {}, {});
                            //account.put();
                            Restangular.setBaseUrl('/apiQ');
                            $state.go('menu.list');
                   });     
                 } else {
                   $log.debug('EditItemProtocolloController : Canceled....');
                 }
        });
    }
*/
    
/*
    $scope.save_action_fake = function(item){

            var alertPopup = $ionicPopup.alert({
                title: 'TEST',
                template: 'Versione di prova - Nessuna modifica'
            });
                alertPopup.then(function(res) {
                $log.debug('Thank you for not eating my delicious ice cream cone');
            });



        var confirmPopup = $ionicPopup.confirm({
                title: 'Messaggio',
                template: 'Proseguire con inserimento ?'
        });
        confirmPopup.then(function(res) {
             if(res) {
                   $log.debug('EditItemProtocolloController : Deleting....');
                   $log.debug(item.id_servizi);
                   Restangular.oneUrl('servizi', '/api1/servizi/' + item.id ).get().then(
                     function(account){
                            $log.debug('get!');
                            $log.debug(account);
                            account.annullato_servizi = 1;
                            $log.debug('put!');
                            //Restangular.setBaseUrl('/api1/servizi/' + item.id_servizi);
                            Restangular.setBaseUrl('/api1');
                            account.customPUT({annullato_servizi : 1},item.id, {}, {});
                            //account.put();
                            Restangular.setBaseUrl('/apiQ');
                            $state.go('menu.list');
                   });     
                 } else {
                   $log.debug('EditItemProtocolloController : Canceled....');
                 }
        });

    }
*/
    
    
    //#### SAVE ACTION
    $scope.save_action = function(item){
        

        $log.debug(item);

        var confirmPopup = $ionicPopup.confirm({
                title: 'Messaggio',
                template: 'Proseguire con inserimento ?'
        });
        confirmPopup.then(function(res) {
            if(res){
                $log.debug('EditItemProtocolloController:save_action:Start validator : ');
                var msg = '';


              //var CodiceFiscale = 'RGGRGR70E25H294T';
              //var CognomeNome = 'MARIO ROSSI';
              //var DataDiNascita = '';
              //var Note = '';
              //var descrizione_oggetto = '';
              //var id_oggetto = '';
              //var descrizione_tipo_documento = '';
              //var id_tipo_documento = '';

                // controllo del codice fiscale
                $log.debug('EditItemProtocolloController:save_action:validate codice fiscale : ');
                var pattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
                if ($scope.item.CodiceFiscale){ // se è definito lo controllo
                    var strCodFisc = String($scope.item.CodiceFiscale);
                    $log.debug('EditItemProtocolloController:save_action:validate codice fiscale : PRESENTE');
                    if (!pattern.test(strCodFisc)){
                        $log.debug('EditItemProtocolloController:save_action:validate codice fiscale : NON VALIDO');
                        msg = 'Codice fiscale NON valido ! : ' + strCodFisc ;
                    } else {
                        $log.debug('EditItemProtocolloController:save_action:validate codice fiscale : VALIDO');
                    }
                } else {
                    $log.debug('EditItemProtocolloController:save_action:validate codice fiscale : NON PRESENTE');
                }
                

                if (($scope.item.CognomeNome == '') || ($scope.item.CognomeNome == undefined )){
                    msg = 'Cognome Nome RICHIESTO!';
                }

                  /*
                if (($scope.item.descrizione_oggetto == '') || ($scope.item.descrizione_oggetto == undefined )){
                    msg = 'Oggetto RICHIESTO!';
                }
  */
                if (($scope.item.descrizione_tipo_documento == '') || ($scope.item.descrizione_tipo_documento == undefined )){
                    msg = 'Tipo Documento RICHIESTO!';
                }

                /*
                if (typeof $scope.item.elenco_id_volontari === "undefined"){
                    msg = 'Selezionare un volontario!';
                }
                
                if ($scope.item.elenco_id_volontari == ''){
                    msg = 'Selezionare un volontario!';
                }
                */

                if (msg != ''){
                    $log.debug('EditItemProtocolloController: errori di validazione');
                    var alertPopup = $ionicPopup.alert({
                        title: 'Errori di input',
                        template: msg
                    });
                        alertPopup.then(function(res) {
                        $log.debug('EditItemProtocolloController: errori di validazione exit');
                    });
                    
                } else {
                    $log.debug('EditItemProtocolloController: validazione superata!');

                    // creazione pacchetto per la protocollazione
                    var new_protollo = {
                            //id_volontari_servizi :  $scope.item.id_volontari_servizi,
                            id_utenti : $scope.item.id_utenti,
                            data_servizi : $scope.item.data_servizi,
                            da_ora_servizi : '1900-01-01T' + $scope.item.da_ora_servizi + ':00.000Z',
                            a_ora_servizi : '1900-01-01T' + $scope.item.a_ora_servizi + ':00.000Z',
                            note_servizi : $scope.item.note_servizi,
                            //lista_volontari : $scope.item.lista_volontari_servizi,
                            // split to array
                            //lista_volontari : $scope.item.elenco_id_volontari.split(','),
                            rapporto_servizi :  $scope.item.rapporto_servizi
                    };

                    $log.debug(item);
                    
                    var baseProtocollo = Restangular.all('pai');

                    $log.debug(baseProtocollo);
                        
                    var queryOptions =  {
                                limit : 50,
                                id_rapporti_selezione :  33
                            };

                           /* 
                        Restangular.all("pai").customGET('', item).then(function(data) {
                          console.log("All ok");
                          console.log(data);
                        }, function(response) {
                          console.log("Error with status code", response.status);
                          console.log(response);
                        });
                        */

                    // inserisce anche id_utenti
                    item.id_utenti = Session.id_utenti;

                    // dati in arrivo
                    $ionicLoading.show({template: 'Richiesta procotocollazione ... '});
                    //baseProtocollo.getList().then(function(msg){
                    Restangular.all("pai").customGET('', item).then(function(data) {    
                        $log.debug("Object saved OK");
                        $log.debug(msg);
                        $ionicLoading.hide();
                        var alertPopup = $ionicPopup.alert({
                            title: 'Messaggio',
                            template: 'Richiesta protocollo completata!'
                        });
                            alertPopup.then(function(res) {
                            $log.debug('ok redirect to menu.listProtocolli ');
                            //$state.go('menu.listProtocolli',{}, {reload: true});
                            $state.transitionTo('menu.listProtocolli',{}, {reload: true});
                        });

                    },function(msg) {
                        $log.debug("Errore nella chiamata ... ");
                        $log.debug(msg);
                         var alertPopup = $ionicPopup.alert({
                            title: 'Messaggio',
                            template: msg
                        });
                        alertPopup.then(function(res) {
                            $log.debug('ERROR msg ' + msg);
                            //$state.go('menu.edit', { id: msg.id });
                        });

                    });

                    

                } // msg

            } else {
                $log.debug('EditItemProtocolloController : Canceled....');
            }
        });

    }
    
            
    

    $scope.debug_action = function(item){
        $log.debug('DEBUG_ACTION');
        $log.debug(item);
    }
      

     /*                   
                        
    $log.debug('EditItemCtrl : watching item.id_utenti');
    // on change id_utenti 
    $scope.$watch('item.id_utenti', function(newValue, oldValue) {
        $log.debug('EditItemCtrl : WATCH! id_utenti changed!' + newValue + ' ' +  oldValue);
        
        if ( (configAction == 'new') &&  (!(typeof newValue === "undefined")) && (newValue != null)) {
            
            var volontariList = Restangular.all('volontariAll');
            volontariList.getList({id_volontari_utenti : newValue }).then(function(users) {
                    
            $log.debug('EditItemCtrl : WATCH! get list for value ' + newValue);
        
            var fancyArray = [];
            var arrayLength = users.length;
            $log.debug('EditItemCtrl : WATCH! patch accounts for ' + arrayLength );
            // build array per la lista di controllo fatta secondo il suo template    
            for (var i = 0; i < arrayLength; i++) {
                //users[i].id = users[i].id_;
                var more = {
                            id : users[i].id,
                            //checked :  (accounts[0].elenco_id_volontari.indexOf(users[i].id) > -1)  ?  true : false ,
                            checked :   false ,
                            text : users[i].nome_completo_volontari
                        };
                $log.debug(more);
                fancyArray.push(more);
                //Do something
            }
        
            $log.debug(users);
            $scope.item.elenco_volontari = '';
            $scope.item.elenco_id_volontari = '';
            $scope.volontariList = fancyArray;
            $log.debug($scope.volontariList);
        
            //$scope.volontariList = users;
            });

            

        }
        
    });
               
    */

    // watch per il cambio dati

    $scope.$watch('item.id_tipo_documento', function(newValue, oldValue){
       

        $log.debug('WATCH : item.id_tipo_documento' + newValue + ' ' +  oldValue);
        $log.debug(typeof(newValue));

        var cfi = 'PRSGNT70A01H294V';
/*
     A) 26027 Sequestro Penale Ignoti - IGNOTO
     B) 26028 Sequestro Penale Nominativo - RICERCA NOMINATIVO - OGGETTO NOMINATIVO
     C) 26029 Sequestro Amministrativo Nominativo - RICERCA NOMINATIVO - NOMINATIVO
     D) 26030 Rinvenimenti.- IGNOTO OGGETTO RINVENIMENTO
     E) 26031 Distruzione - IGNOTO OGGETTO DISTR.
*/



        if (newValue == 26027 ) {
          $scope.item.CodiceFiscale = cfi;
          $scope.item.CognomeNome = 'PERSONA IGNOTA';
          $scope.item.OggettoDescrizione = 'SEQUESTRO PENALE IGNOTI';
          $scope.item.DataDiNascita = '01/01/1970';
          $scope.formstatus.showDetailData = false;
          $scope.item.Note= '';
          //$scope.DataDiNascita = new Date(20)
        }
        if (newValue == 26028) {
          $scope.item.CodiceFiscale = '';
          $scope.item.CognomeNome = '';
          $scope.item.OggettoDescrizione = 'SEQUESTRO PENALE NOMINATIVO';
          $scope.formstatus.showDetailData = true;
          $scope.item.Note= '';
          //$scope.item.DataDiNascita = new Date(20)
        }
        if (newValue == 26029 ) {
          $scope.item.CodiceFiscale = '';
          $scope.item.CognomeNome = '';
          $scope.item.OggettoDescrizione = 'SEQUESTRO AMMINISTRATIVO NOMINATIVO';
          $scope.formstatus.showDetailData = true;
          $scope.item.Note= '';
          //$scope.DataDiNascita = new Date(20);
        }
        if (newValue == 26030 ) {
          $scope.item.CodiceFiscale = cfi;
          $scope.item.CognomeNome = 'PERSONA IGNOTA';
          $scope.item.DataDiNascita = '01/01/1970';
          $scope.item.OggettoDescrizione = 'RINVENIMENTI';
          $scope.formstatus.showDetailData = false;
          $scope.item.Note= '';
          //$scope.DataDiNascita = new Date(20);
        }
        if (newValue == 26031 ) {
          $log.debug('test ----');
          $scope.item.CodiceFiscale = cfi;
          $scope.item.CognomeNome = 'PERSONA IGNOTA';
          $scope.item.DataDiNascita = '01/01/1970';
          $scope.item.OggettoDescrizione = 'DISTRUZIONE';
          $scope.item.Note= 'TEST';
          $scope.formstatus.showDetailData = false;
          //$scope.DataDiNascita = new Date(20);
        }

    });                    

                        
                        
}])



// InfiniteCtrl ---------------------------------------------------------------------------------
// InfiniteCtrl ---------------------------------------------------------------------------------
// InfiniteCtrl ---------------------------------------------------------------------------------
// InfiniteCtrl ---------------------------------------------------------------------------------
// InfiniteCtrl ---------------------------------------------------------------------------------
// InfiniteCtrl ---------------------------------------------------------------------------------
.controller('ListProtocolliController', 
    ['$scope', '$state', '$location', 'Restangular', '$filter', 'Session', '$ionicModal','$ionicSideMenuDelegate','$ionicPopover', '$ionicLoading', '$log',
     function($scope,  $state, $location, Restangular, $filter, Session, $ionicModal,   $ionicSideMenuDelegate,  $ionicPopover, $ionicLoading, $log) {
    
  $log.debug('ListProtocolliController>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');                                 
  $log.debug('ListProtocolliController start...');
  
  $scope.totalPages = 0;
  $scope.itemsCount = 0;
  $scope.currentPage = 1; 
  $scope.currentItemDetail = null;
  $scope.totalItems = 0;
  $scope.pageSize = 100; // impostato al massimo numero di elementi
  $scope.startPage = 0;         
  $scope.openedPopupDate = false;    
  $scope.utentiList = [];
  $scope.id_utenti_selezione = 0;        
  $scope.items = [];
  $scope.loadMoreDataCanBeLoaded = true;
  
  // gestione modal popup slide per i filtri --------------------------------------------------
  $ionicModal.fromTemplateUrl('templates/sortModal.html', 
        function(sortModal) {
            $scope.sortModal = sortModal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
           
  $ionicModal.fromTemplateUrl('templates/detailModal.html', 
        function(detailModal) {
            $scope.detailModal = detailModal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
                                 
                                 
                                 
  $scope.openSortModal = function() {
        $log.debug('ListProtocolliController Sort Modal ...');    
        $scope.sortModal.show();
  };
                                 
  $scope.openDetailModal = function(item) {
        $log.debug('ListProtocolliController Detail Modal ... :');    
        $log.debug(item);
        item.data_servizi = $filter('date')(item.data_servizi, "dd/MM/yyyy"); 
        item.a_ora_servizi = item.a_ora_servizi.substr(11,5);
        item.da_ora_servizi = item.da_ora_servizi.substr(11,5);
        $scope.currentItemDetail = item;
        $scope.detailModal.show();
  };
                                 
                                 
  $scope.closeSortModal = function() {$scope.sortModal.hide();};
  $scope.closeDetailModal = function() {$scope.detailModal.hide();};
                                 
  $scope.saveSort = function() {
    $log.debug("ListProtocolliController: SORT MODAL " + this.filterTerm + " sort " + this.sortBy + ' id_selezione :' + this.id_utenti_selezione);
    $scope.filterCriteria.id_utenti_selezione = this.id_utenti_selezione;
    $log.debug($scope.filterCriteria);
    $scope.filterTerm = this.filterTerm;
    $scope.sortBy = this.sortBy;
    $scope.sortModal.hide();
    $scope.fetchResult();
  }
  
  $scope.OpenFilter = function() {
       $log.debug("ListProtocolliController: OpenFilter .. sortModal.show()");
        $scope.sortModal.show();
  };                                 
                               
                                 
  //default criteria that will be sent to the server
  $scope.filterCriteria = {
    pageNumber: 1,
    count: 0,
    limit: $scope.pageSize,
    start: 0,
    sortDir: 'asc',
    sortedBy: 'id',
    id_utenti_selezione : Session.isAdmin ? 0 : Session.id_utenti,
    mese_selezione : 0,
    anno_selezione: 0
  };
    
    $log.debug('ListProtocolliController SERVIZI INIT filterCriteria');
    $log.debug($scope.filterCriteria);
    
    /*
    // popola la lista utenti
    var volontariList = Restangular.all('paq');
                                 
    $log.debug('ListProtocolliController #protocolliAll ' + volontariList.getRestangularUrl());                              
                                 
    volontariList.getList().then(function(accounts) {
        $log.debug(accounts);
        if(Session.isAdmin) {
            $log.debug('ListProtocolliController : populate list : isAdmin ');
            $scope.utentiList = accounts;
            $scope.utentiList.push({"id_utenti": 0,"nome_breve_utenti": "TUTTI"});
            $scope.id_utenti_selezione = 0;
        } else {
            $log.debug('ListProtocolliController : populate list : NOT isAdmin ');
            $log.debug(Session.id_utenti);
            $scope.id_utenti_selezione = Session.id_utenti;
            $scope.filterCriteria.id_utenti_selezione = Session.id_utenti;
            $scope.utentiList = [];
            $scope.utentiList.push({id_utenti: Session.id_utenti,nome_breve_utenti: Session.nome_breve_utenti});
        }
    });    
 */

 
  //The function that is responsible of fetching the result from the server and setting the grid to the new result
  $scope.fetchResult = function () {
      $log.debug('ListProtocolliController: fetchResult');
      $log.debug('ListProtocolliController: impostazione criteri di filtro');

      var offset_page =  ( $scope.currentPage - 1 ) * $scope.pageSize;
      $scope.filterCriteria.start = offset_page;
      $log.debug($scope.filterCriteria);
    
      var serviziList = Restangular.all('paq');
      
      $log.debug('ListProtocolliController...fetchResult - GET Count');
      
      // Get items count 
      /*
      $scope.filterCriteria.count = 1; // imposta il conteggio sul server
      serviziList.getList($scope.filterCriteria).then(function(data) {
            $log.debug('COUNT: data[0].totalItems:' + data[0].totalItems);
            $log.debug(data);
          
            if (data.length > 0) {
                $scope.totalItems = data[0].totalItems;
            } else {
                $scope.totalItems = 0;
            }
        // Error get count
        }, function () {
            $scope.totalItems = 0;
            //$scope.totalPages = 0;
      }); // items count
      */      
          // Get items ...  
      $log.debug('ListProtocolliController...fetchResult - GET data');
      $scope.filterCriteria.count = 0; // imposta la selezione standard sul server
      $ionicLoading.show({template: 'Dati in arrivo!' });
      return serviziList.getList($scope.filterCriteria).then(function(data) {
               $log.debug(data);
          
                var fast_array = [];
          
                $log.debug('ListProtocolliController .. preparing data...');
                data.forEach(function (idata) {
                    //$log.debug(idata);
                    //$scope.items.push(idata);
                    /*
                    if(idata.annullato_servizi == 1) idata.image_class="icon ion-close-circled assertive";
                    if((idata.id_rapporto_valido_servizio != null) && (idata.annullato_servizi == 0)) idata.image_class="icon ion-share balanced";
                    if((idata.id_rapporto_valido_servizio == null) && (idata.annullato_servizi == 0)) idata.image_class="icon ion-checkmark balanced";
                    */
                    /*
                    fast_array.push(
                        {
                            id: idata.id,
                            data_servizi: idata.data_servizi,
                            image_class: idata.image_class,
                            nome_breve_utenti: idata.nome_breve_utenti,
                            elenco_volontari: idata.elenco_volontari
                        }
                    
                    );
                    */
                    
                });
                
                $log.debug(fast_array);
          
                $scope.items = data;
                //$scope.items = fast_array;
            
                $log.debug(' .. data loaded!');
                $ionicLoading.hide();  
              
          // in caso di errore azzera la lista...      
          }, function () {
                $log.debug(' ListProtocolliController .. ERROR!');
                $scope.items = [];
                $log.debug(error);
                $ionicLoading.hide();

                /*
                if (error.status == 403) {
                    //event.preventDefault();    
                    $rootScope.$broadcast(ENV.AUTH_EVENTS.notAuthenticated);
                }
                */
      });
          
      /*
      $scope.items = serviziList.getList($scope.filterCriteria).$object;
      $log.debug('@@@@@@@@@@@@@@@@@@ dati ritornati @@@@@@@@@@@@@@@@@@@');
      $log.debug($scope.items);
      */
          
 };
      
  //called when navigate to another page in the pagination
  $scope.selectPage = function () {
    var page = $scope.currentPage;
    $log.debug('ListProtocolliController: SELECT PAGE ...');  
    $log.debug('ListProtocolliController: Page changed to: ' + $scope.currentPage);  
    $log.debug('ListProtocolliController...selectPage:' + page);
    $scope.currentPage = page;
    $scope.filterCriteria.pageNumber = page;
    $scope.fetchResult();
  };
                  
  //manually select a page to trigger an ajax request to populate the grid on page load
  $log.debug('ListProtocolliController : selectPage 1');
  $scope.selectPage();
    
  // COLLECTION REPEAT TEST                               
  $scope.getItemHeight = function(item) {
    return item.isLetter ? 40 : 100;
  };
  $scope.getItemWidth = function(item) {
    return '100%';
  };                                 
                                 
                         
     // action new relazione
    $scope.new_relazione_action = function($id) {
        $log.debug('Route to newRelazioni con id : ' + $id);
        $scope.detailModal.hide();
        $state.go('menu.newProtocollo', { id: $id });
    };

    // action goto relazione
    $scope.goto_relazione_action = function($id) {
        $log.debug('Route to editRelazioni con id : ' + $id);
        $scope.detailModal.hide();
        $state.go('menu.editProtocollo', { id: $id });
    };                                 
                                 
                                 

  /*
                                 
  // watch change selection    
  $scope.$watch("id_utenti_selezione", function(newValue, oldValue) {
        $log.debug('id_utenti changed! New ' + newValue + ' Old ' +  oldValue);
        
        if(Session.isAdmin) {
            $scope.filterCriteria.id_utenti_selezione = newValue;
            $scope.currentPage = 1;
            $scope.filterCriteria.pageNumber = $scope.currentPage;
            $scope.fetchResult();
        } else {
            $log.debug('id_utenti changed! New NO ADMIN NO ACTION');
        }
        
    });    
    
    //watch on change data_servizi NON SERVE
    
                                 
    $scope.$watch("data_servizi_selezione", function(newValue, oldValue) {
        $log.debug('data_servizi changed!' + newValue + ' ' +  oldValue);
        
        if(newValue){
            $log.debug($filter('date')(newValue,'MM'));
            $log.debug($filter('date')(newValue,'yyyy'));
            $scope.filterCriteria.mese_selezione = $filter('date')(newValue,'MM');
            $scope.filterCriteria.anno_selezione = $filter('date')(newValue,'yyyy');
        } else {
            $scope.filterCriteria.mese_selezione = 0;
            $scope.filterCriteria.anno_selezione = 0;
        }
        $scope.currentPage = 1;
        $scope.filterCriteria.pageNumber = $scope.currentPage;
        $scope.fetchResult();
        
    });    
    
    
    $scope.popupDate = function($event) {
        $log.debug('popupDate');
        $event.preventDefault();
        $event.stopPropagation();
        if($scope.openedPopupDate) {
            $scope.openedPopupDate = false;
        } else {
            $scope.openedPopupDate = true;
        }
    };
    
    */
                                 
    // callback for ng-click 'editUser':
    $scope.editItem = function (itemId) {
        $log.debug('editItem : change state');
        $log.debug(itemId);
        $location.path('/menu/edit/' + itemId);
    };
    
    // callback for ng-click 'editUser':
    $scope.editItem = function (itemId) {
        $log.debug('viewItem : change state');
        $log.debug(itemId);
        $location.path('/menu/view/' + itemId);
    };    
                                 
                                 
    // callback for ng-click 'editUser':
    $scope.editRelazioni = function (itemId) {
        $log.debug('/menu/editItem');
        $location.path('/menu/editRelazioni/' + itemId);
    };
    
    
     // callback for ng-click 'editUser':
    $scope.newRelazioni = function () {
        $log.debug('/menu/new');
        $location.path('/menu/new');
    };
    
    $scope.debug_action = function(item){
        $log.debug('DEBUG_ACTION');
        $log.debug($scope);
    };
                   

     // callback for ng-click 'editUser':
    $scope.newProtocollo = function () {
        $log.debug('newProtocollo ... ');
        $state.go('menu.newProtocollo');
    };
    

    $scope.newItemFromPopover = function () {
        $log.debug('/menu/newProtocollo');
        $scope.popover.remove();
        //$location.path('/menu/newProtocollo');
        //$state.go('menu.newProtocollo', { id: $id });
        $state.go('menu.newProtocollo');
    };
                        
    $scope.OpenFilterFromPopover = function() {
        $log.debug('OpenFilterFromPopover');
        $scope.popover.hide();
        $scope.sortModal.show();
    };                                   
          
   $scope.RefreshFromPopover = function() {
        $log.debug('RefreshFromPopover');
        $scope.popover.hide();
        $scope.fetchResult();
    }; 

                 


                                 
    var templatePopover = '<ion-popover-view>';
    //templatePopover +=    '<ion-header-bar><h1 class="title">Azioni possibili</h1></ion-header-bar>';                                          
    templatePopover +=    '<ion-content>';                                      
    templatePopover +=    '<div class="list">';
    templatePopover +=    '<a class="item item-icon-left" ng-click="RefreshFromPopover()"><i class="icon ion-loop"></i>Ricarica i dati</a>';
    templatePopover +=    '<a class="item item-icon-left" ng-click="newItemFromPopover()" ><i class="icon ion-plus-circled"></i> Nuovo elemento</a>';
    templatePopover +=    '<a class="item item-icon-left" ng-click="OpenFilterFromPopover()"><i class="icon ion-funnel"></i>Filtro</a>';
    //templatePopover +=    '<a class="item item-icon-left" ng-click="ShowItemDetailFromPopover()"><i class="icon ion-funnel"></i>Item</a>';
    //templatePopover +=    '<button class="button button-clear button-positive" ng-click="debug_action()">Chiudi</button>';
    templatePopover +=    '</div>';
    templatePopover +=    '</ion-content>';                                      
    templatePopover +=    '</ion-popover-view>';

    //<ion-nav-buttons side="right" >
    //<button class="button button-icon button-clear ion-plus-circled" ng-click="newRelazioni()"></button>
    //</ion-nav-buttons>
                                 
    $log.debug(templatePopover);                                          
                             
    $scope.popover = $ionicPopover.fromTemplate(templatePopover,{ scope: $scope });                                     
                                          
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });

                                 
                                 
}]);

