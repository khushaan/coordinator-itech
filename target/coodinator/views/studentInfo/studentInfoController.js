"use strict";

define(['application-configuration'], function (app) {

    app.register.controller('studentInfoController', ['$scope', '$rootScope' ,'$location','$routeParams',
        function ($scope, $rootScope,$location,$routeParams) {
    	
    		$scope.studentId = $routeParams.id;    
    		$scope.name = "Khushaan"
    			
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
    				  	autowidth: true,
    				     	colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
    				     	colModel:[
    				     		{name:'id',index:'id', width:60, sorttype:"int"},
    				     		{name:'invdate',index:'invdate', width:90, sorttype:"date"},
    				     		{name:'name',index:'name', width:100},
    				     		{name:'amount',index:'amount', width:80, align:"right",sorttype:"float"},
    				     		{name:'tax',index:'tax', width:80, align:"right",sorttype:"float"},		
    				     		{name:'total',index:'total', width:80,align:"right",sorttype:"float"},		
    				     		{name:'note',index:'note', width:150, sortable:false}		
    				     	],
    				     	multiselect: true,
    				     	caption: "Manipulating Array Data"
    				    };
    				    
    				  $scope.data = [
    						{id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
    						{id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
    						{id:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
    						{id:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
    						{id:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
    						{id:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
    						{id:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
    						{id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
    						{id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
    						];
    			

    }]);

});