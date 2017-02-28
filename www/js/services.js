angular.module('starter.services', [])
.factory("business", function ($q,$http) {
return{

  getProductcategory_name: function(){
       var deferred = $q.defer();
       $http({
              method:"GET",
              url:'http://35.161.70.128:3001/api/externalsystemcategories'
       }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;
    
   },

     getProductBy_Id: function(id){
       var deferred = $q.defer();
       $http({
              method:"GET",
              url:'http://35.161.70.128:3001/api/products/'+id
       }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;
    
    },

    addNewmember :function(member){

      var deferred = $q.defer();
       $http({
              method:"PUT",
              url:'http://35.161.70.128:3001/api/Families',
              data:{ name:member.name,relation:member.relation, gender:member.gender }
       }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;   

    },

    getMember: function(){
       var deferred = $q.defer();
       $http({
              method:"GET",
              url:'http://35.161.70.128:3001/api/Families'
       }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;
    
    },

    getMemberBy_id:function(id){
       var deferred = $q.defer();
       $http({
              method:"GET",
              url:'http://35.161.70.128:3001/api/Families/'+id
       }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;
    
    },

    removeMember:function(id){
       var deferred = $q.defer();
       $http({
              method:"DELETE",
              url:'http://35.161.70.128:3001/api/Families/'+id
            }).then(function (response) {

           deferred.resolve(response);    
       },function errorCallback(response) {
          deferred.reject(response);
        console.log('error',response);
       });
       return deferred.promise;
    
    }

}
});



