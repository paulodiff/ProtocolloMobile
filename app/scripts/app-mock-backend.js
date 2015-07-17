// We will be using backend-less development
// $http uses $httpBackend to make its calls to the server
// $resource uses $http, so it uses $httpBackend too
// We will mock $httpBackend, capturing routes and returning data
// http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock

'use strict';
// Set $httpBackend.whenGET for mock or .passThrough() for serve
angular.module('myApp.mockBackend', []).run(function($httpBackend, DataMockModule, ENV) {
        
    

    $httpBackend.whenGET(/views\//).passThrough();
    $httpBackend.whenGET(/templates\//).passThrough();

    $httpBackend.whenPOST(ENV.apiEndpoint + ENV.apiLogin).passThrough();
    $httpBackend.whenPOST(ENV.apiEndpoint + ENV.apiLogout).passThrough();



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


 $httpBackend.whenGET(/segnalazioniAll/).respond(function(method, url, data) {
    var data = [
    {
      "protocollo": 2883,
      "canale": "1",
      "tscreazione": "20150714@083422",
      "tstelefonata": "20150714@082904",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@102818",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig. Urbinati",
      "richiedente_telefono": "0541/372001",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "FLAMINIA (via)",
      "evento_indirizzo2": "",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0106 Contr veicoli in sosta",
      "descrizione_breve": "accanto Altro Mondo",
      "descrizione_dettagliata": "auto in sosta nell'area di servizio",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Miramare",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2884,
      "canale": "1",
      "tscreazione": "20150714@084107",
      "tstelefonata": "20150714@073025",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@085227",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Hera",
      "richiedente_telefono": "348/7829068",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "LUIGI EINAUDI (piazza)",
      "evento_indirizzo2": "",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0116 Contr x apposiz segnaletica temp",
      "descrizione_breve": "per posizionamento container raccolta differenziata",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Centrale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2885,
      "canale": "1",
      "tscreazione": "20150714@092839",
      "tstelefonata": "20150714@092719",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@105232",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig. Reali",
      "richiedente_telefono": "328/9878024",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "LUCIO LANDO (via)",
      "evento_indirizzo2": "ORTIGARA (viale)",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0106 Contr veicoli in sosta",
      "descrizione_breve": "una vettura con targa svizzera in sosta su strada da asfaltare",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Centrale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "Anthea",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2886,
      "canale": "1",
      "tscreazione": "20150714@093121",
      "tstelefonata": "20150714@085247",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@100815",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig. Paterniti",
      "richiedente_telefono": "347/6506669",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "TIBERIO (viale)",
      "evento_indirizzo2": "",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0116 Contr x apposiz segnaletica temp",
      "descrizione_breve": "nella piazzetta Pirinela",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Centrale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "Anthea",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2887,
      "canale": "1",
      "tscreazione": "20150714@102552",
      "tstelefonata": "20150714@102514",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@104426",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "118/PS",
      "richiedente_telefono": "",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "AIN ZARA (via)",
      "evento_indirizzo2": "",
      "evento_civico1": "3",
      "evento_civico2": "",
      "tipo_segnalazione": "0106 Contr veicoli in sosta",
      "descrizione_breve": "una vettura ha parcheggiato davanti all'ambulanza che non può ripartire ",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Reparto Mobile",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2888,
      "canale": "1",
      "tscreazione": "20150714@103416",
      "tstelefonata": "20150714@103242",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@122553",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig. Parma",
      "richiedente_telefono": "339/7686080",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "EDELWEISS RODRIGUEZ SENIOR (via)",
      "evento_indirizzo2": "",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0106 Contr veicoli in sosta",
      "descrizione_breve": "nel parcheggio sul retro del 105 stadium, TIR in sosta su pista ciclabile",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Miramare",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2889,
      "canale": "1",
      "tscreazione": "20150714@103455",
      "tstelefonata": "20150714@103428",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@111638",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "cittadino",
      "richiedente_telefono": "",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "DEI CAVALIERI (via)",
      "evento_indirizzo2": "",
      "evento_civico1": "57",
      "evento_civico2": "",
      "tipo_segnalazione": "0106 Contr veicoli in sosta",
      "descrizione_breve": "auto in sosta con grave intralcio",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Centrale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2890,
      "canale": "1",
      "tscreazione": "20150714@103822",
      "tstelefonata": "20150714@103711",
      "tsscadenza": "@",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@154139",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "cittadina",
      "richiedente_telefono": "",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "TRIPOLI (viale)",
      "evento_indirizzo2": "ROMA (via)",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0605 Interv per insediamenti nomadi",
      "descrizione_breve": "gruppo di nomadi ubriachi e molesti",
      "descrizione_dettagliata": "bivaccano, chiedono l'elemosina al semaforo e sporcano ogni giorno l'area verde all'intersezione.Si interviene nel pomeriggio con pattuglia dell'ambientale",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Ambientale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2891,
      "canale": "1",
      "tscreazione": "20150714@111905",
      "tstelefonata": "20150714@110048",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@112903",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig. Grossi",
      "richiedente_telefono": "339/5076286",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "PAOLUCCI DI CALBOLI (piazza)",
      "evento_indirizzo2": "ILARIO PAGLIERANI (via)",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "0116 Contr x apposiz segnaletica temp",
      "descrizione_breve": "per mercato settimanale di Viserbella",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Viserba",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "Maurizio",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2892,
      "canale": "1",
      "tscreazione": "20150714@120528",
      "tstelefonata": "20150714@120453",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@121246",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig.ra Nanni",
      "richiedente_telefono": "",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "LUGANO (viale)",
      "evento_indirizzo2": "",
      "evento_civico1": "1",
      "evento_civico2": "",
      "tipo_segnalazione": "0105 Contr veicoli davanti passo carrabile",
      "descrizione_breve": "p.c. 26865/03",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Miramare",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2893,
      "canale": "1",
      "tscreazione": "20150714@120632",
      "tstelefonata": "20150714@120539",
      "tsscadenza": "",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@124428",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig.  Barlini",
      "richiedente_telefono": "0541/51282",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "LUIGI FERRARI (piazza)",
      "evento_indirizzo2": "",
      "evento_civico1": "",
      "evento_civico2": "",
      "tipo_segnalazione": "Spazio invalidi",
      "descrizione_breve": "203/07",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Centrale",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    },
    {
      "protocollo": 2894,
      "canale": "1",
      "tscreazione": "20150714@121613",
      "tstelefonata": "20150714@121412",
      "tsscadenza": "@",
      "tsarchiviazione": "",
      "id_operatore_scheda": "141",
      "id_operatore_salvataggio": "141",
      "tssalvataggio": "20150714@130504",
      "cronologia": 0,
      "stato": "APERTA",
      "richiedente_nominativo": "Sig.ra Maria",
      "richiedente_telefono": "340/8496754",
      "richiedente_civico": "",
      "richiedente_indirizzo": "",
      "evento_indirizzo1": "MARECCHIESE (via)",
      "evento_indirizzo2": "FERDINANDO MAGELLANO (via)",
      "evento_civico1": "123",
      "evento_civico2": "",
      "tipo_segnalazione": "Incid. solo danni",
      "descrizione_breve": "non riescono a trovare un accordo ",
      "descrizione_dettagliata": "",
      "id_responsabile_informato": 0,
      "id_responsabile_area": 0,
      "provvedimento": "",
      "note_finali": "",
      "interventi_richiesti": 0,
      "richiedente_comune": "Rimini",
      "evento_comune": "Rimini",
      "tsassegnazione_responsabile": "",
      "id_responsabile_assegnazione": 0,
      "area": "Reparto Mobile",
      "priorita": "verde",
      "nota_assegnazione_responsabile": "",
      "pronto_intervento": 0,
      "capo_area_stato": "",
      "del": "0",
      "archiviata_pi": 1,
      "tipo_segnalazione_secondario": "",
      "tipo_segnalazione_livello": "",
      "tsuscita": "",
      "richiedente_nominativo_nome": "",
      "evento_indirizzo_quartiere_id": 0,
      "evento_indirizzo_reparto_id": 0,
      "codice_esito_segnalazione": "",
      "richiedente_email": "",
      "segnalante_tipologia": "cittadino",
      "segnalante_struttura_id": 0,
      "segnalante_id_operatore_1": 0,
      "segnalante_id_operatore_2": 0,
      "segnalante_id_operatore_3": 0,
      "segnalante_id_operatore_4": 0,
      "fuga": 0
    }

    ]
        
    return [200, data, {}];
});


$httpBackend.whenGET(/coos/).respond(function(method, url, data) {
    var data = [

  {
      "ID": 74508,
      "CodiceRadio": "00012",
      "TimeStamp": "20150714@001408",
      "Vel": 0.00,
      "Latit": "4410000",
      "Longi": "1234579",
      "Stato": "00",
      "LatitD": 44.0768100000,
      "LongiD": 12.5763200000,
      "ExtraInfo": "S",
      "maxCodiceRadio": "00012",
      "maxTimeStamp": "20150714@001408"
    },
    {
      "ID": 74542,
      "CodiceRadio": "00024",
      "TimeStamp": "20150714@002510",
      "Vel": 0.00,
      "Latit": "4410000",
      "Longi": "1233439",
      "Stato": "00",
      "LatitD": 44.0357100000,
      "LongiD": 12.5573200000,
      "ExtraInfo": "S",
      "maxCodiceRadio": "00024",
      "maxTimeStamp": "20150714@002510"
    },
    {
      "ID": 74580,
      "CodiceRadio": "00106",
      "TimeStamp": "20150714@004628",
      "Vel": 0.00,
      "Latit": "4410000",
      "Longi": "1233441",
      "Stato": "00",
      "LatitD": 44.0358300000,
      "LongiD": 12.5573500000,
      "ExtraInfo": "S",
      "maxCodiceRadio": "00106",
      "maxTimeStamp": "20150714@004628"
    }
 ]

  return [200, data, {}];
});




}); /*END*/






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