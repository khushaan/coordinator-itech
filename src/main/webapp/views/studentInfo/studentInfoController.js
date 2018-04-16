"use strict";

define(['application-configuration'], function (app) {

    app.register.controller('studentInfoController', ['$scope', '$rootScope' ,'$location','$routeParams',
        function ($scope, $rootScope,$location,$routeParams) {
    		console.log("Student Controller Called");
    		$scope.studentId = $routeParams.id;    
    		$scope.name = "Khushaan" ;
    		$scope.email = "khushaan@gmail.com" ;
    		$scope.phoneNumber ="7066432237";
    		$scope.skypeId ="khushaan.itech@gmail.com"
    		  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    		  $scope.data = [300, 500, 100];
			
    			
			$('.bar-percentage[data-percentage]').each(function () {
				  var progress = $(this);
				  var percentage = Math.ceil($(this).attr('data-percentage'));
				  $({countNum: 0}).animate({countNum: percentage}, {
				    duration: 2000,
				    easing:'linear',
				    step: function() {
				      // What todo on every count
				      var pct = Math.floor(this.countNum) + '%';
				      progress.text(pct) && progress.siblings().children().css('width',pct);
				    }
				  });
			});
			
				
			$scope.config = {
				  	datatype: "local",
				  	height: 250,
				  
				     	colNames:['Technology','From', 'To', 'Assignment Date','Rating','Assignment Uplaod','Actions'],
				     	colModel:[
				     		{	
				     			name:'technology',
				     			index:'id', 
				     			width:60, 
				     			sorttype:"int"
		     				},
				     		
			     			{	
		     					name:'from',
			     				index:'invdate', 
			     				width:90, 
			     				sorttype:"date"
	     					},
				     		
		     				{
	     						name:'to',
	     						index:'name', 
	     						width:100	
	     						
     						},
				     		
		     				{	
     							name:'assignmentDate',
     							index:'amount', 
     							width:80, 
     							align:"right",
     							sorttype:"float"
							},
				     		
		     				{
								name:'rating',
								index:'tax', 
								width:80, 
								align:"right",
								sorttype:"float"
							},		
				     		
		     				{
								name:'assignmentUplaod',
								index:'total', 
								width:80,
								align:"right",
								sorttype:"float"
							},		
				     		
		     				{	name:'actions',
								index:'note', 
								width:150, 
								sortable:false
							}		
				     	],
				     	multiselect: true,
				    	autowidth :true,
				     	caption: "Manipulating Array Data"
				    };
				    
				  $scope.gridData = [
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						{technology:"Java",from:"2007-10-01",to:"test",assignmentDate:"note",rating:"200.00",assignmentUplaod:"10.00",actions:"210.00"},
						];
			    
			    
			 $scope.options = {
			            chart: {
			                type: 'pieChart',
			                height: 450,
			                donut: true,
			                x: function(d){return d.key;},
			                y: function(d){return d.y;},
			                showLabels: true,

			                pie: {
			                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
			                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
			                },
			                duration: 500,
			                legend: {
			                    margin: {
			                        top: 5,
			                        right: 70,
			                        bottom: 5,
			                        left: 0
			                    }
			                }
			            }
			        };

			        $scope.data = [
			            {
			                key: "One",
			                y: 5
			            },
			            {
			                key: "Two",
			                y: 2
			            },
			            {
			                key: "Three",
			                y: 9
			            },
			            {
			                key: "Four",
			                y: 7
			            },
			            {
			                key: "Five",
			                y: 4
			            },
			            {
			                key: "Six",
			                y: 3
			            },
			            {
			                key: "Seven",
			                y: .5
			            }
			        ];
    			

    }]);

});