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
        'fusionCharts':'scripts/fusioncharts',
        'angular-fusioncharts':'scripts/angular-fusioncharts',
        'angular-chart':'scripts/angular-chart',
        'd3':'//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min',
        'nvd3':'//cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min',
        'angular-nvd3':'//rawgit.com/krispo/angular-nvd3/v1.0.5/dist/angular-nvd3',
        'angular-Drag':'scripts/angular-drag-and-drop-lists',
        	
    	 
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap': ['angular'],
        'nvd3':['d3'],
        'angular-nvd3': {
        	deps : ['d3','nvd3','angular']
        },
        'angular-Drag' :['angular']
        
    },
    
   

    // kick start application
    deps: ['application-configuration']
});

