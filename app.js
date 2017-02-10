(function() {
  'use strict'
angular.module('app', [])
.component('page',{
    templateUrl: 'body.html' ,
    controller : controller
})
 function controller(){
   const vm = this

   vm.images = [
     {
       image_url: "public/images/ancient-aliens.jpg"
     },
     {
       image_url: "public/images/bad-luck-brian.jpg"
     },
     {
       image_url: "public/images/batman-slapping-robin.jpg"
     },
     {
       image_url: "public/images/but-thats-none-of-my-business.jpg"
     },
     {
       image_url: "public/images/captain-picard-facepalm.jpg"
     },
     {
       image_url: "public/images/confession-bear.jpg"
     },
     {
       image_url: "public/images/creepy-condescending-wonka.jpg"
     },
     {
       image_url: "public/images/disaster-girl.jpg"
     },
     {
       image_url: "public/images/disaster-girl.jpg"
     },
     {
       image_url: "public/images/first-world-problems.jpg"
     },
     {
       image_url: "public/images/futurama-fry.jpg"
     },
     {
       image_url: "public/images/one-does-not-simply.jpg"
     },
     {
       image_url: "public/images/scumbag-steve.jpg"
     },
     {
       image_url: "public/images/scumbag-steve.jpg"
     },
     {
       image_url: "public/images/scumbag-steve.jpg"
     }

   ]

   vm.$onInit = function(){

   }
 }

}());
