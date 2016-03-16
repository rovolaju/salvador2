var app = angular.module("app",['ngRoute', 'xeditable', 'ui.bootstrap']);

app.config(function ($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "inicio.html"
    });
    $routeProvider.when("/inicio",{
        templateUrl: "inicio.html"
    });
    $routeProvider.when("/agenda",{
        templateUrl: "agenda.html"
    });
    $routeProvider.when("/citas",{
        templateUrl: "citas.html"
    });
    $routeProvider.when("/sucursales",{
        templateUrl: "sucursales.html"
    });
    $routeProvider.when("/promociones",{
        templateUrl: "promociones.html"
    });
    $routeProvider.when("/login",{
        templateUrl: "login.html"
    });
    $routeProvider.when("/registro",{
        templateUrl: "registro.html"
    });
    $routeProvider.when("/contacto",{
        templateUrl: "contacto.html"
    });
    $routeProvider.when("/acerca",{
        templateUrl: "acerca.html"
    });
    $routeProvider.otherwise({
        redirectTo: "/"
    });
});

app.controller('UsuarioCtrl', function($scope) {
  $scope.user = {
    name: 'Usuario'
  };  
});

app.controller('SeleccionarSucursalCtrl', function($scope, $filter, $http) {
  $scope.user = {
    group: 4,
    groupName: 'Salón' // original value
  }; 

  $scope.groups = [];

  $scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/sucursales').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.$watch('user.group', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      var selected = $filter('filter')($scope.groups, {id: $scope.user.group});
      $scope.user.groupName = selected.length ? selected[0].text : null;
    }
  });
});

app.controller('FechaCtrl', function($scope, $filter) {
  $scope.user = {
    dob: new Date(2016, 0, 1)
  };
});

app.controller('HoraCtrl', function($scope, $filter) {
  $scope.user = {
    time: new Date(1984, 4, 15, 19, 20)
  };
});


app.controller('SeleccionarServicioCtrl', function($scope, $filter, $http) {
  $scope.user = {
    group: 4,
    groupName: 'Servicio' // original value
  }; 

  $scope.groups = [];

  $scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/servicios').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.$watch('user.group', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      var selected = $filter('filter')($scope.groups, {id: $scope.user.group});
      $scope.user.groupName = selected.length ? selected[0].text : null;
    }
  });
});

app.controller('SeleccionarEstilistaCtrl', function($scope, $filter, $http) {
  $scope.user = {
    group: 4,
    groupName: 'Estilista' // original value
  }; 

  $scope.groups = [];

  $scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/estilistas').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.$watch('user.group', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      var selected = $filter('filter')($scope.groups, {id: $scope.user.group});
      $scope.user.groupName = selected.length ? selected[0].text : null;
    }
  });
});