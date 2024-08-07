var app = angular.module('tareaApp', []);
app.controller('tareaController', function($scope) {
    $scope.tareas = [];
    $scope.nuevaTarea = '';

    $scope.agregarTarea = function() {
        if ($scope.nuevaTarea) {
            $scope.tareas.push({ texto: $scope.nuevaTarea });
            $scope.nuevaTarea = '';
        }
    };

    $scope.eliminarTarea = function(tarea) {
        var index = $scope.tareas.indexOf(tarea);
        if (index !== -1) {
            $scope.tareas.splice(index, 1);
        }
    };

    $scope.editarTarea = function(tarea) {
        // Aquí puedes agregar la lógica para editar la tarea si es necesario
        alert("Editando: " + tarea.texto);
    };

    $scope.actualizarTarea = function(tarea) {
        // Aquí se pueden realizar acciones adicionales si se desea
    };
});