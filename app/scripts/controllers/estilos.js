'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:EstilosCtrl
 * @description
 * # EstilosCtrl
 * Controller of the Asura
 */
 angular.module('Asura')
 .controller('EstilosCtrl',['$scope','$rootScope','$routeParams', function ($scope, $rootScope, $routeParams) {
	
	minicolors();
	estilos_kiosco_html();
	estilos_video_html();
	estilos_multi_page_html();
	estilos_kiosco();

	var Configuracion = $rootScope.main.configuracion;

	function minicolors(){
		$scope.mini_generales = {position: 'top right',letterCase: 'uppercase'};
	}

    function estilos_kiosco_html(){
	 	if( $routeParams.estilo == "kioscos_generales"  ||
	 		$routeParams.estilo == "kioscos_textos"     ||
	 		$routeParams.estilo == "kioscos_botones"    ||
	 		$routeParams.estilo == "kioscos_menu"        ){

	 		$scope.estilo = "views/configuracion/estilos/kioscos.html";
	 	}
    }

    function estilos_video_html(){
    	if( $routeParams.estilo == "videos_generales"   ||
	 		$routeParams.estilo == "videos_colores"     ){
			$scope.estilo = "views/configuracion/estilos/videos.html";
		}
    }

    function estilos_multi_page_html(){
		switch($routeParams.estilo){
			case "consola":
				$scope.estilo = "views/configuracion/estilos/consola.html";
				break;
			/* KIOSCOS */
			case "kioscos_generales":
				$scope.img_estilos_kioscos  = 'images/img_generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/generales.html';
				break;
			case "kioscos_textos":
				$scope.img_estilos_kioscos  = 'images/img_generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/textos.html';
				break;
			case "kioscos_botones":
				$scope.img_estilos_kioscos  = 'images/img_generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/botones.html';
				break;
			case "kioscos_menu":
				$scope.img_estilos_kioscos  = 'images/img_kiosco.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/menu.html';
				break;
			/* VIDEOS */
			case "videos_generales":
				$scope.img_estilos_kioscos  = 'images/img_presentacion.png';
				$scope.estilos_video       = 'views/configuracion/estilos/videos/generales.html';
				break;
			case "videos_colores":
				$scope.img_estilos_kioscos  = 'images/img_presentacion.png';
				$scope.estilos_video       = 'views/configuracion/estilos/videos/colores.html';
				break;
			/* MOVILES */
			case "moviles":
				$scope.estilo = "views/configuracion/estilos/moviles.html";
				break;
		}
    }
 	
 	function estilos_kiosco(){
 		$scope.tab_url = $routeParams.estilo;
 	}

 	$scope.actualizar = function(){
 		var data = 
 		[
 			{
 				cuenta_id: $rootScope.id_cuenta, 
 				configuracion : $scope.configuraciones
 			}
 		];
 		Configuracion.post(data,function(data){
 			console.log(data);
 		});
 	}
	//console.log($scope.$parent.configuraciones);
}]);
