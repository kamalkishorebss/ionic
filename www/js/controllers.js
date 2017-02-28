angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.Send = function() {
    console.log("hello");
  $http({
   method : "get",   
    url:"http://35.165.132.91:3000/sms"   
    }).success(function(response) {
       console.log(response);
    }).error(function(error) {
       console.log(error);
  });      
  };
 

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


 //add new product
 
})

//end of app ctrl
.controller('PlaylistsCtrl', function($scope,$http) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('browserCtrl', function($scope,$location,$state,$http) {
$scope.add = function(){ 
   
    $state.go("app.todo");                
}
  
$scope.back = function(){ 

  $state.go("app.browse");

}                  
})

.controller('registersales', function($scope, $stateParams,$state, $http, $ionicModal, $ionicPopup, $ionicPopover, business, $window, $sessionStorage) {
  $scope.SayHello = function(){
    alert("hello");
  }


$scope.myDate = new Date('yyyy-mm-dd');

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };


$scope.myProduct = function(){ 
  $state.go("app.productlist");
}


$scope.regExp = function(){ 
  $state.go("app.registerexpenses");
}


//go add new product page
$scope.addNewproduct = function(){ 
  $state.go("app.myProduct");
} 

//add new product
$scope.product={};
$scope.addProduct= function(){
  $http.put('http://35.161.70.128:3001/api/products', {
            'code': $scope.product.code,
            'sale_price': $scope.product.price,            
            'name': $scope.product.name,
            'description': $scope.product.description    
 
         })
         .then(function(res) {
           
           //console.log(res);
           $scope.products = res.data;
           console.log($scope.products);
           $state.go("app.productlist");
          
         }, function(error) {
             console.log("Error: " + error);
         });        
}

//product name list
var Index = 0;
$scope.productname=[];
business.getProductcategory_name().then(function(response) {    
    $scope.data = response.data;
        
    for(var i=0; i<$scope.data.length; i++){
       $scope.categoryId = $scope.data[i].id;        
       console.log($scope.categoryId);
       $scope.productname.push({id:$scope.data[i].id, name:$scope.data[i].name});
    }
    console.log($scope.productname);
});



$scope.next =function(){
  if(Index < $scope.productname.length){         
    document.getElementById('home').innerHTML = $scope.productname[Index].name;   
    //console.log($scope.productname[Index].id);
    var p_id = $scope.productname[Index].id;
    console.log(p_id);
    Index+=1; 
  }
 xyz(p_id);
}


$scope.previous =function(){
  if(Index > 0){
    Index-=1;    
     //console.log($scope.productname[Index].id);

     
    document.getElementById('home').innerHTML = $scope.productname[Index].name; 
    var p_id = $scope.productname[Index].id;
    console.log(p_id);
  }
  xyz(p_id);
}


 function xyz(p_id){
  
  $http({   
            method:"GET",
            url:'http://35.161.70.128:3001/api/products/?filter[where][productcatagory_id]='+p_id            
        }).then(function successCallback(response) 
            {
              //console.log(response);
              if(response.data.error)
              {
                $scope.error = response.data.error;
              }
              else
              { 
                
                $scope.data1 = response.data;
                for(var i=0; i<$scope.data1.length; i++){
                  if(p_id == $scope.data[i].productcatagory_id){
                   console.log($scope.data1);
                  }
                }

              }    
            }), function errorCallback(response) 
               {
                console.log('error',response);
               };
}



//get product by category
$scope.productBy_id =function(id){
  //alert(id);
  business.getProductBy_Id(id).then(function(response) {    
    $scope.singleProduct = response.data;
    console.log($scope.singleProduct);    
    $state.go('app.viewproduct');      
  });
}


$scope.back = function(){ 
  history.back();
}

$scope.businessBack = function(){
  history.back();
}    


//show confirm for delete product
$ionicModal.fromTemplateUrl('templates/eraseproduct.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {
      $scope.modal = modal;           
     
   });
  
   $scope.openModal = function() {    
       
      $scope.modal.show();
   };
  
   $scope.closeModal = function() {
      $scope.modal.hide();
   };

  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
     
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action      
   });

//ionic poppover
 $ionicPopover.fromTemplateUrl('templates/eraseconfirm.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.modal.hide();
      $scope.popover.show($event);
      window.history.back();
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
       window.history.back();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });
//get business id

      $http({
              method:"GET",
              url:'http://35.161.70.128:3001/api/FinancialEntities'
           }).then(function(res) {           
                 console.log(res);
                $scope.businesses = res.data;
                // console.log($scope.data.users_id);                 
                /*for(var i=0; i<$scope.data.length; i++){
                  $scope.user_id = $scope.data[i].users_id;
                 
                }*/
                
                      
           },function(error) {
          console.log("Error: " + error);
        });  

$scope.teamBack = function(){
  history.back();
}

//other expenses
  $ionicModal.fromTemplateUrl('templates/otherexpenses.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {
      $scope.modalo = modal;           
     
   });
  
   $scope.openModalo = function(title) {  
    //var id = document.getElementsByTagName("h4").innerText;
    console.log(title);
    $scope.titleExp = title; 
      $scope.modalo.show();
   };
  
   $scope.closeModalo = function(ammount, description, myDate1, titleExp) {
      $http.put('http://35.161.70.128:3001/api/Expenses',{
             ammount: ammount, 
             description:description,   
             expense_date:myDate1,
             refernce:titleExp
           }).then(function(res) {           
           //console.log(res);
           $scope.Modeldata = res.data;
           console.log($scope.Modeldata);       
          
         }, function(error) {
             console.log("Error: " + error);
         });
      $scope.modalo.hide();
   };

  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modalo.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
     
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action      
   });


 $scope.backExpenses=function(){
  history.back();
 };

 //register income concept
$ionicModal.fromTemplateUrl('incomexpenses.html',function(modal) {

   $scope.modale = modal;
 },{
   scope: $scope,
   animation: 'slide-in-up'
 }); 

 $scope.openModale = function(title) {
   console.log(title);
   $scope.titleExp = title; 
   $scope.modale.show();
 };

 $scope.closeModale = function(ammount, description, myDate1, titleExp) {
      $http.put('http://35.161.70.128:3001/api/Incomes',{
             ammount: ammount, 
             description:description,   
             expense_date:myDate1,
             refernce:titleExp
           }).then(function(res) {           
           //console.log(res);
           $scope.Modeldata = res.data;
           console.log($scope.Modeldata);       
          
         }, function(error) {
             console.log("Error: " + error);
         });

   $scope.modale.hide();
 };



/*  $ionicModal.fromTemplateUrl('templates/incomexpenses.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {
      $scope.modale = modal; 
      console.log($scope.modale);          
     
   });
  
   $scope.openModale = function() {    
    //alert("heloo");
    console.log(title);
    $scope.titleExp = title; 
    $scope.modale.show();
   };
  
   $scope.closeModale = function(ammount, description, myDate1, titleExp) {
      $http.put('http://35.161.70.128:3001/api/Expenses',{
             ammount: ammount, 
             description:description,   
             expense_date:myDate1,
             refernce:titleExp
           }).then(function(res) {           
           //console.log(res);
           $scope.Modeldata = res.data;
           console.log($scope.Modeldata);       
          
         }, function(error) {
             console.log("Error: " + error);
         });
      $scope.modale.hide();
   };

  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modale.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
     
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action      
   });*/
  $scope.familyMember = function(){
   $state.go("app.team");
  }

})

//My team Work
.controller('teamworkCtrl', function($scope, $stateParams,$state, $http, $ionicModal, $ionicPopup, $ionicPopover, business, $window, $sessionStorage) {

$scope.addNewmember = function(){
  $state.go("app.member");
}

//add new member
 $scope.member={};
$scope.addMember = function(){ 
         business.addNewmember($scope.member).then(function(res) {           
           console.log(res);     
           $state.go("app.team");    
         }, function(error) {
             console.log("Error: " + error);
         });     

};

//add members list
business.getMember().then(function(response){
  $scope.members = response.data;  
  //console.log($scope.members);
}); 


//find member by id
$scope.get_Member = function(id){
$state.go('app.family',{'memId':id}); 
   
}; 

  if($state.current.name == 'app.family')
  {
    //alert($stateParams.memId);
    business.getMemberBy_id($stateParams.memId).then(function(response) {           
             console.log(response);
       $scope.member_info = response.data;                      
          
     }, function(error) {
         console.log("Error: " + error);
     });
  }



//delete member by id
$scope.deleteMember= function(id){
    business.removeMember(id).then(function(response) {
        $scope.members.forEach(function(value,index){
          if(value.id == id){
           $scope.members.splice(index,1);
          }
        })
        $state.go('app.team')
    }, function(error) {
        console.log(error);
    });       
  }




});

