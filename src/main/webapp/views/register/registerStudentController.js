"use strict";

define(['application-configuration'], function (app) {

    app.register.controller('registerStudentController', ['$scope', '$rootScope' ,'$location',
        function ($scope, $rootScope,location) {
    	
    		$scope.setMessage = "Hello Register Student"
    			
    			  $scope.models = [
    			      {listName: "A", items: [], dragging: false},
    			      {listName: "B", items: [], dragging: false}
    			    ];
    		
    			$scope.parentTehnologies = 
    		
    			$scope.model1 = {
    					listName :"myList",
    					items : [
    					
    					
    					],
    					dragging :true,
    					
    					
    			}	
    			
    			
    			$scope.model2 = {
    					listName :"myList2",
    					items : [
    							
    					
    					
    					],
    					dragging :true
    					
    			}	
    			
    			$scope.sublistFunction = function (item){
    				
    				console.log(item);
    				$scope.model1 = {};
    				
    				var listOfTech = item.childTech ;
    				$scope.model1.listName = 'myList';
    				$scope.model1.items = [] ;
    				for(var i = 0; i<listOfTech.length;i++){
    					$scope.model1.items.push(listOfTech[i]);
    				}
    				
    				
    			}
    			
    		
    			
    			$scope.masterList = [
    									{parentTech:'java',
    									 childTech : [{
    										 			label: 'Rest Web Services',
    										 			type : 'parentTech',
    										 			source : 'w3School/JavaTPoint'
    										            
    									 			  },
    									 			 {
      										 			label: 'Hibernate',
      										 			type : 'parentTech',
      										 			source : 'w3School/JavaTPoint'
      										            
      									 			  },
      									 			{
      										 			label: 'JPA',
      										 			type : 'parentTech',
      										 			source : 'w3School/JavaTPoint'
      										            
      									 			  },
      									 			{
      										 			label: 'JBDC',
      										 			type : 'parentTech',
      										 			source : 'w3School/JavaTPoint'
      										            
      									 			  },
      									 			{
      										 			label: 'Spring',
      										 			type : 'parentTech',
      										 			source : 'w3School/JavaTPoint'
      										            
      									 			  },
      									 			{
    										 			label: 'Spring-MVC',
    										 			type : 'parentTech',
    										 			source : 'w3School/JavaTPoint'
        										            
        									 			  },
										 			 {
    										 			label: 'Spring-Boot',
    										 			type : 'parentTech',
    										 			source : 'w3School/JavaTPoint'
    										            
    									 			  },
									 	]	
    									
    									},
    									{parentTech:'HTML-5/CSS',
       									 childTech : [{
       										 			label: 'HTML Basics',
       										 			type : 'parentTech',
       										 			source : 'w3School/JavaTPoint'
       										            
       									 			  },
       									 			 {
         										 			label: 'CSS Basics',
         										 			type : 'parentTech',
         										 			source : 'w3School/JavaTPoint'
         										            
         									 			  },
         									 			{
         										 			label: 'CSS Box Model',
         										 			type : 'parentTech',
         										 			source : 'w3School/JavaTPoint'
         										            
         									 			  },
         									 			{
         										 			label: 'CSS Advanced',
         										 			type : 'parentTech',
         										 			source : 'w3School/JavaTPoint'
         										            
         									 			  },
         									 			{
         										 			label: 'CSS3 Introduction',
         										 			type : 'parentTech',
         										 			source : 'w3School/JavaTPoint'
         										            
         									 			  }
								 			  ]	
       									
       									},
       									{parentTech:'JavaScript',
          									 childTech : [{
          										 			label: 'Javascript',
          										 			type : 'parentTech',
          										 			source : 'w3School/JavaTPoint'
          										            
          									 			  },
          									 			 {
            										 			label: 'JavaScript Objects',
            										 			type : 'parentTech',
            										 			source : 'w3School/JavaTPoint'
            										            
            									 			  },
            									 			{
            										 			label: 'Browser Objects',
            										 			type : 'parentTech',
            										 			source : 'w3School/JavaTPoint'
            										            
            									 			  },
            									 			{
            										 			label: 'Javascript Validation',
            										 			type : 'parentTech',
            										 			source : 'w3School/JavaTPoint'
            										            
            									 			  },
            									 			{
            										 			label: 'Javascript Error',
            										 			type : 'parentTech',
            										 			source : 'w3School/JavaTPoint'
            										            
            									 			  },
            									 				{
              										 			label: 'JSON',
              										 			type : 'parentTech',
              										 			source : 'w3School/JavaTPoint'
              										            
              									 			  }
   								 			  ]	
          									
          									},
          									{parentTech:'JQuery',
             									 childTech : [{
             										 			label: 'JQuery',
             										 			type : 'parentTech',
             										 			source : 'w3School/JavaTPoint'
             										            
             									 			  },
             									 			 {
               										 			label: 'JQuery Effects',
               										 			type : 'parentTech',
               										 			source : 'w3School/JavaTPoint'
               										            
               									 			  },
               									 			{
               										 			label: 'jQuery Traversing',
               										 			type : 'parentTech',
               										 			source : 'w3School/JavaTPoint'
               										            
               									 			  },
               									 			{
               										 			label: 'JqueryAJAX',
               										 			type : 'parentTech',
               										 			source : 'w3School/JavaTPoint'
               										            
               									 			  }
               									 
      								 			  ]	
             									
             									},
             									{parentTech:'Angular Js',
                									 childTech : [{
                										 			label: 'Overview',
                										 			type : 'parentTech',
                										 			source : 'w3School/JavaTPoint'
                										            
                									 			  },
                									 			 {
                  										 			label: 'Data Binding',
                  										 			type : 'parentTech',
                  										 			source : 'w3School/JavaTPoint'
                  										            
                  									 			  },
                  									 			{
                  										 			label: 'Services and DI',
                  										 			type : 'parentTech',
                  										 			source : 'w3School/JavaTPoint'
                  										            
                  									 			  },
                  									 			{
                  										 			label: 'Templates & Routing',
                  										 			type : 'parentTech',
                  										 			source : 'w3School/JavaTPoint'
                  										            
                  									 			  },
                  									 			{
                										 			label: 'Directives',
                										 			type : 'parentTech',
                										 			source : 'w3School/JavaTPoint'
                    										            
                									 			  },
                									 			  {
                										 			label: 'Advanced Topics',
                										 			type : 'parentTech',
                										 			source : 'w3School/JavaTPoint'
                        										            
                									 			  }
                  									 
         								 			  ]	
                									
                									},
                									{parentTech:'BootStrap',
                   									 childTech : [{
                   										 			label: 'Overview',
                   										 			type : 'parentTech',
                   										 			source : 'w3School/JavaTPoint'
                   										            
                   									 			  },
                   									 			 {
                     										 			label: 'Bs Nav bar',
                     										 			type : 'parentTech',
                     										 			source : 'w3School/JavaTPoint'
                     										            
                     									 			  },
                     									 			{
                     										 			label: 'BootStrap Grids',
                     										 			type : 'parentTech',
                     										 			source : 'w3School/JavaTPoint'
                     										            
                     									 			  },
                     									 			{
                     										 			label: 'Bootstrap Themes',
                     										 			type : 'parentTech',
                     										 			source : 'w3School/JavaTPoint'
                     										            
                     									 			  },
                     									 			{
                   										 			label: 'Bootstrap CSS - Ref',
                   										 			type : 'parentTech',
                   										 			source : 'w3School/JavaTPoint'
                       										            
                   									 			  },
                   									 			  {
                   										 			label: 'Bootstrap Js Ref',
                   										 			type : 'parentTech',
                   										 			source : 'w3School/JavaTPoint'
                           										            
                   									 			  }
                     									 
            								 			  ]	
                   									
                   									},
                   									{parentTech:'XML',
                      									 childTech : [{
                      										 			label: 'Introduction',
                      										 			type : 'parentTech',
                      										 			source : 'w3School/JavaTPoint'
                      										            
                      									 			  },
                      									 			 {
                        										 			label: 'XML Advance',
                        										 			type : 'parentTech',
                        										 			source : 'w3School/JavaTPoint'
                        										            
                        									 			  },
                        									 			{
                        										 			label: 'BootStrap Grids',
                        										 			type : 'parentTech',
                        										 			source : 'w3School/JavaTPoint'
                        										            
                        									 			  },
                        									 			{
                        										 			label: 'Bootstrap Themes',
                        										 			type : 'parentTech',
                        										 			source : 'w3School/JavaTPoint'
                        										            
                        									 			  },
                        									 			{
                      										 			label: 'Bootstrap CSS - Ref',
                      										 			type : 'parentTech',
                      										 			source : 'w3School/JavaTPoint'
                          										            
                      									 			  },
                      									 			  {
                      										 			label: 'Bootstrap Js Ref',
                      										 			type : 'parentTech',
                      										 			source : 'w3School/JavaTPoint'
                              										            
                      									 			  }
                        									 
               								 			  ]	
                      									
                      									}
             									
    				
    				
    			]
    		
    		
				$scope.populateDefault = function (){
    				
    				
    				$scope.model1.items=$scope.masterList[0].childTech ;
    			}
    			
    			$scope.populateDefault();
    	

    			    /**
    			     * dnd-dragging determines what data gets serialized and send to the receiver
    			     * of the drop. While we usually just send a single object, we send the array
    			     * of all selected items here.
    			     */
    			    $scope.getSelectedItemsIncluding1 = function(list, item) {
    			      item.selected = true;
    			      return list.items.filter(function(item) { return item.selected; });
    			    };
    			    
    			    $scope.getSelectedItemsIncluding2 = function(list, item) {
      			      item.selected = true;
      			      return list.items.filter(function(item) { return item.selected; });
      			    };
    			    
    			 /*   $scope.getSelectedItemsIncluding2 = function(list, item) {
      			      item.selected = true;
      			      return list.items.filter(function(item) { return item.selected; });
      			    };*/
    			    /**
    			     * We set the list into dragging state, meaning the items that are being
    			     * dragged are hidden. We also use the HTML5 API directly to set a custom
    			     * image, since otherwise only the one item that the user actually dragged
    			     * would be shown as drag image.
    			     */
    			    $scope.onDragstart1 = function(list, event) {
    			       list.dragging = true;
    			       if (event.dataTransfer.setDragImage) {
    			         var img = new Image();
    			         img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
    			         event.dataTransfer.setDragImage(img, 0, 0);
    			       }
    			    };

    			    
    			    $scope.onDragstart2 = function(list, event) {
     			       list.dragging = true;
     			       if (event.dataTransfer.setDragImage) {
     			         var img = new Image();
     			         img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
     			         event.dataTransfer.setDragImage(img, 0, 0);
     			       }
     			    };
    			    /**
    			     * In the dnd-drop callback, we now have to handle the data array that we
    			     * sent above. We handle the insertion into the list ourselves. By returning
    			     * true, the dnd-list directive won't do the insertion itself.
    			     */
    			    $scope.onDrop1 = function(list, items, index) {
    			    	
    			    	if(items[0].type==='techParent'){
    			    		return false ; 
    			    	}
    			    	  angular.forEach(items, function(item) { item.selected = false; 
    			    	  item.type='techParent';
          			      $scope.model1.items.push(item);
          			      });
          			     
          			    angular.forEach(items, function(item) { 
          			      for(var i= 0 ; i< $scope.model2.items.length;i++){
          			    	  if(item.label===$scope.model2.items[i].label){
          			    		  $scope.model2.items.splice(i,1) ;    
          			      }
          			    }
          			    })
          			      return true;
    			    }

    			    $scope.onDrop2 = function(list, items, index,type) {
    			    	if(items[0].type==='techChild'){
    			    		return false ; 
    			    	}
    			    	
      			      angular.forEach(items, function(item) { item.selected = false; 
      			      item.type='techChild';
      			      										  
      			      $scope.model2.items.push(item);
      			      });
      			     
      			    angular.forEach(items, function(item) { 
      			      for(var i= 0 ; i< $scope.model1.items.length;i++){
      			    	  if(item.label===$scope.model1.items[i].label){
      			    		  $scope.model1.items.splice(i,1) ;    
      			      }
      			    }
      			    })
      			      return true;
      			    }

    			    
    			    /**
    			     * Last but not least, we have to remove the previously dragged items in the
    			     * dnd-moved callback.
    			     */
    			    $scope.onMoved1 = function(list) {
    			      list.items = list.items.filter(function(item) { return !item.selected; });
    			    };

    			    $scope.onMoved2 = function(list) {
      			      list.items = list.items.filter(function(item) { return !item.selected; });
      			    };
      			    
    			    // Generate the initial model
    			    angular.forEach($scope.models, function(list) {
    			      for (var i = 1; i <= 20; ++i) {
    			          list.items.push({label: "Item " + list.listName + i});
    			      }
    			    });

    			    // Model to JSON for demo purpose
    			    $scope.$watch('models', function(model) {
    			        $scope.modelAsJson = angular.toJson(model, true);
    			    }, true);
    			    
    			    
    			    $scope.planTheBucket = function(){
    			    	console.log($scope.model2);
    			    }

         


        }]);

});
