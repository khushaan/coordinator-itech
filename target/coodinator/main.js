/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
require.config({

    baseUrl: "",

    // alias libraries paths
    paths: {
        'application-configuration': 'scripts/application-configuration',       
        'angular': 'scripts/angular',
        'angular-route': 'scripts/angular-route',
        'angularAMD': 'scripts/angularAMD',
         'ui-bootstrap' : 'scripts/ui-bootstrap-tpls-0.11.0',
        'blockUI': 'scripts/angular-block-ui',
      
        'ngload': 'scripts/ngload',       
        'mainService': 'services/MainServices',
        'ajaxService': 'services/ajaxService',
        'alertsService': 'services/AlertsServices',
        'accountsService': 'services/accountsService',
        'customersService': 'services/customersServices',
        'ordersService': 'services/ordersServices',
        'productsService': 'services/productsServices',
        'dataGridService': 'services/dataGridService',         
        'angular-sanitize': 'scripts/angular-sanitize',
        'customersController': 'Views/Shared/CustomersController',
        'productLookupModalController': 'Views/Shared/ProductLookupModalController',
        'particles': 'scripts/particles',
        'angular-chart': 'scripts/angular-chart',
        'chart': 'scripts/dist/chart',
       
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap': ['angular'],
        'angular-chart': ['angular'],
        'chart': ['angular-chart'],
        'chart':['angular']
         
    },

    // kick start application
    deps: ['application-configuration']
});
