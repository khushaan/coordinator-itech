"use strict";

define(['angularAMD','angular-route','ui-bootstrap', 'angular-sanitize', 'blockUI','particles','angular-nvd3','nvd3','d3','angular-Drag'], function (angularAMD) {
    var app = angular.module("mainModule", ['ngRoute', 'blockUI', 'ngSanitize', 'ui.bootstrap','nvd3','dndLists']);
   
    app.filter("leadingZeroes", function () {
        return function (data) {
            var pad = "000" + data;
            pad = pad.substr(pad.length - 3);
            return pad;
        }
    });
   

    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.withCredentials = true;
    });
    
    app.directive('ngJqGrid', function () {
        return {
          restrict: 'E',
          scope: {
            config: '=',
            data: '=',
          },
          link: function (scope, element, attrs) {
            var table;
            
            scope.$watch('config', function (newValue) {
              element.children().empty();
              table = angular.element('<table></table>');
              element.append(table);
              $(table).jqGrid(newValue);
            });
            
            scope.$watch('data', function (newValue, oldValue) {
              var i;
              for (i = oldValue.length - 1; i >= 0; i--) {
                $(table).jqGrid('delRowData', i);
              }
              for (i = 0; i < newValue.length; i++) {
                $(table).jqGrid('addRowData', i, newValue[i]);
              }
            });
          }
        };
      });

    app.config(function (blockUIConfigProvider) {

        // Change the default overlay message
        blockUIConfigProvider.message("executing...");
        // Change the default delay to 100ms before the blocking is visible
        blockUIConfigProvider.delay(1);
        // Disable automatically blocking of the user interface
        blockUIConfigProvider.autoBlock(false);

    });

    app.config(['$routeProvider', function ($routeProvider) {
    	
        $routeProvider

           .when("/", angularAMD.route({
                         
                templateUrl: function (rp) {  return 'views/main/default.html';  },               
                controllerUrl: "views/main/DefaultController"            

            }))

            .when("/:section/:tree", angularAMD.route({

            	
            	
                templateUrl: function (rp) { return 'views/' + rp.section + '/' + rp.tree + '.html'; },

                resolve: {

                    load: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {

                        var path = $location.path();
                        var parsePath = path.split("/");
                        var parentPath = parsePath[1];
                        var controllerName = parsePath[2];

                        var loadController = "views/" + parentPath + "/" + controllerName + "Controller";                 

                        var deferred = $q.defer();
                        require([loadController], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }

            } ))

            .when("/:section/:tree/:id", angularAMD.route({ 
            	

                templateUrl: function (rp) { return 'views/' + rp.section + '/' + rp.tree + '.html'; },

                resolve: {

                    load: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {

                        var path = $location.path();
                        var parsePath = path.split("/");
                        var parentPath = parsePath[1];
                        var controllerName = parsePath[2];

                        var loadController = "views/" + parentPath + "/" + controllerName + "Controller";
                                             
                        var deferred = $q.defer();
                        require([loadController], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }

            }))


            .otherwise({ redirectTo: '/' }) 

    }]);


    var indexController = function ($scope, $rootScope, $http, $location, blockUI) {
    	console.log("index Controller Called")
             
        $scope.$on('$routeChangeStart', function (scope, next, current) {
        	console.log("Route Change Start called")
             
            if ($rootScope.IsloggedIn==true)
            {               
                $scope.authenicateUser($location.path(),$scope.authenicateUserComplete, $scope.authenicateUserError);
            }
         
        });

    	
        $scope.$on('$routeChangeSuccess', function (scope, next, current) {
        	console.log("Route Change Start called")
            setTimeout(function () {
                if ($scope.isCollapsed == true) {                   
                    set95PercentWidth();
                }              
            }, 1000);
         

        });
        	
        particlesJS.load('particles-js','json/particleConfig.json');
        
/*       
        
        var video = document.querySelector("#videoElement");
        $scope.showVideo=true;
        
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
         
        if (navigator.getUserMedia) {
        	
            navigator.getUserMedia({video: true}, handleVideo, videoError);
        }
         
        function handleVideo(stream) {
        	
            video.src = window.URL.createObjectURL(stream);
        }
         
        
        
        function videoError(e) {
            console.log(e);
            $scope.videoOff = true;
            
        }*/

        $scope.initializeController = function () {
        	
        	console.log("Initialize Controller Called")
        	
       /*
            $rootScope.displayContent = false;
            if ($location.path() != "")        
            {                      
                $scope.initializeApplication($scope.initializeApplicationComplete, $scope.initializeApplicationError);
            }*/
        }
        
        
        
        $scope.initializeApplicationComplete = function (response) {
            $rootScope.MenuItems = response.MenuItems;
            $rootScope.displayContent = true;
            $rootScope.IsloggedIn = true;          
        }

        $scope.initializeApplication = function (successFunction, errorFunction) {
            blockUI.start();           
          //  $scope.AjaxGet("/api/main/InitializeApplication", successFunction, errorFunction);
            blockUI.stop();
        };
              
        $scope.authenicateUser = function (route, successFunction, errorFunction) {
            var authenication = new Object();
            authenication.route = route;
           // $scope.AjaxGetWithData(authenication, "/api/main/AuthenicateUser", successFunction, errorFunction);
        };
        
        $scope.login = function () {
        	
        	var user = {
        			name : $scope.username,
        			password :$scope.password
        	}
        	
        	$scope.AjaxGetWithData(user, "rest/login/authenticate",  $scope.loginCompleteFunction, $scope.loginError);
        	
        }
        
    	$scope.flip = function(){
    		if($scope.isFlipped == false){
    			$scope.isFlipped = true;
    			$scope.showArrow = false ;
    		}
    		else{
    			$scope.isFlipped = false;
    			$scope.showArrow = true ;
    		}
			
			
		}
    	
    	$scope.showArrow = true ;
    	$scope.isFlipped = false;
        
        $scope.loginCompleteFunction = function (response){
        	if(response.errorMsg==="Valid User"){
        		window.location ="applicationMasterPage.html#/student/studentList";
        		$rootScope.isLoggedin =true;
        	}
        	else{
        		alert(response.errorMsg);
        		$rootScope.isLoggedin =false;
        	}
        }
        $scope.loginError = function (response) {
            alert("ERROR= "+response.IsAuthenicated);
        }

      
           
        $scope.authenicateUserComplete = function (response) {
           
            if (response.IsAuthenicated==false)               
                window.location = "/index.html";
        }

        $scope.authenicateUserError = function (response) {
            alert("ERROR= "+response.IsAuthenicated);
        }

        $scope.AjaxGet = function (route, successFunction, errorFunction) {         
            setTimeout(function () {
                $http({ method: 'GET', url: route }).success(function (response, status, headers, config) {                 
                    successFunction(response, status);
                }).error(function (response) {                  
                    //errorFunction(response);
                });
            }, 1);

        }
        
        
     
        
        $scope.loginError = function (response) {

    		// alertsService.RenderErrorMessage(response.ReturnMessage);
    
            // $scope.clearValidationErrors();
            // alertsService.SetValidationErrors($scope, response.ValidationErrors);              

        }

        $scope.AjaxGetWithData = function (data, route, successFunction, errorFunction) {
            setTimeout(function () {
                $http({ method: 'POST', url: route, data: data, headers: {'Content-Type': 'application/json'} }).success(function (response, status, headers, config) {
                    successFunction(response, status);
                }).error(function (response) {
                    errorFunction(response);
                });
            }, 1);

        }

    };

    indexController.$inject = ['$scope', '$rootScope', '$http', '$location', 'blockUI'];
    app.controller("indexController", indexController);
  
    // Bootstrap Angular when DOM is ready
    angularAMD.bootstrap(app);

  
    return app;
});


