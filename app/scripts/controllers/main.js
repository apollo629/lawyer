'use strict';

/**
 * @ngdoc function
 * @name lawyerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lawyerApp
 */
angular.module('lawyerApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    var todosInStore = localStorageService.get('todos');

    var s = [
       { 
         'title': 'Experience',
         'text': 'exp',
         'image' : 'images/exp.jpg'
       },
       { 
         'title': 'Yeoman',
         'text': 'yeo',
         'image': 'images/yeoman.png'
       }
    ];

    s[0].active = true;
    $scope.slides = s;	


	$scope.todos = todosInStore && todosInStore.split('\n') || [];

	$scope.$watch('todos',function(){
		localStorageService.add('todos',$scope.todos.join('\n'));
	},true);

    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    }

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index,1);
    }

    console.debug(window.innerHeight);

  });
