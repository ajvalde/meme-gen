(function() {
  'use strict'
angular.module('app', [])
.component('page',{
    templateUrl: 'body.html' ,
    controller : controller
})
 function controller(){
   const vm = this

   vm.$onInit = function(){

   }
 }

}());
