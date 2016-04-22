var app = angular.module('assessment', []);

// :::::: START CONTROLLER :::::: //
app.controller('BehindCurtain', [function(){
  var vm = this;
  vm.message = '';
  vm.list = [];
  vm.listShow = false;

vm.addMsg = function(input){
  vm.listShow = true;
  vm.list.push(vm.message);
  vm.message = '';
};

  vm.clear = function (){
    vm.message = '';
  };

  vm.emptyList = function (){
    vm.list = [];
    vm.listShow = false;
  };





// :::::: CLOSE CONTROLLER :::::: //
}]);
