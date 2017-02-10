(function() {
  'use strict'

  angular.module('app', [])
    .component('page', {
      templateUrl: 'body.html',
      controller: page_controller
    })

    .component('creator', {
      bindings: {
        post: '=',
        onSave: '&'
      },
      templateUrl: 'creator.html',
      controller: creator_controller
    })

    .component('browser', {
      bindings: {
        post: '<'
      },
      templateUrl: 'browser.html',
      controller: browser_controller
    })

  function page_controller() {
    const vm = this

    vm.$onInit = function $onInit() {
      vm.maxPostId = 3
      vm.meme = {}
      vm.memes = [{
        id: 1,
        image_url: '',
        top_text: '',
        bot_text: '',
        timestamp: new Date(),
        creator: ''
      }]
    }

    vm.addMeme = function addMeme(savedMeme) {
      ++vm.maxMemeId
      savedMeme.id = vm.maxMemeId
      savedMeme.timestamp = new Date()
      vm.memes.push(savedMeme)
    }

  }

  function creator_controller() {
    const vm = this

    vm.$onInit = function $onInit() {
      vm.images = [{
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
          image_url: "public/images/doge.jpg"
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
          image_url: "public/images/the-most-interesting-man-in-the-world.jpg"
        },
        {
          image_url: "public/images/third-world-skeptical-kid.jpg"
        }
      ]
    }

  }

  function browser_controller() {
    const vm = this

      vm.$onInit = function $onInit() {

      }

  }
}());
