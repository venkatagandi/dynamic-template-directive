var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('customClick', function($http, $compile) {
    return {
      replace:false,
        link: function(scope, element, attrs) {
                element.click(function(){
                    $http.get("samplePage.html").then(function(resp){
                        $(element).parent().append(resp.data);
                        //$(element).appendTo($(element).parent());
                        var fnLink = $compile(element);
                        fnLink($scope);
                    });
                });
            }
        }
});
//The template-url way
/*
app.directive('customClick', function () {
  return {
    templateUrl: 'page.html',
    link: function (scope, el, attrs) {
      scope.active = false;

      el.on('click', function () {
        scope.$apply(function () {
          scope.active = !scope.active;
        });
        el.append
      });
    }
  }
});*/