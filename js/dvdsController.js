angular.module("dvds", []);

angular.module("dvds").controller("dvdsController", function($scope) {
	$scope.titulo = "Listagem de DVDs";
	$scope.default = "images/sem-imagem.PNG"
	$scope.message = false;

	$scope.dvds = [
		{
			id: 10001 + "",
			titulo : "Ao vivo no Maracanã",
			artista : "Ivete Sangalo",
			faixas : 22,
			preco: 29.90,
			imagem: "images/ivete.jpg"
		},

		{
			id: 10002 + "",
			titulo : "Limão com Mel",
			artista : "Paixão x Paixão",
			faixas : 25,
			preco: 15.90,
			imagem: "images/limao.jpg"
		},

		{
			id: 10003 + "",
			titulo : "Lagosta Bronzeada",
			artista : "Louca de Saudade",
			faixas : 18,
			preco: 29.99,
			imagem: "images/lagosta-2.jpg"
		},

		{
			id: 10004 + "",
			titulo : "Duas horas de sucesso - Ao vivo",
			artista : "Zezé Di Camargo e Luciano",
			faixas : 32,
			preco: 32.50,
			imagem: "images/zeze.jpg"
		},

		{
			id: 10005 + "",
			titulo : "Raça Negra e Amigos",
			artista : "Raça Negra",
			faixas : 26,
			preco: 19.99,
			imagem: "images/raca-negra.jpg"
		}
	];

	$scope.novoDVD = {};

	$scope.adicionarDVD = function() {
		var dvd = angular.copy($scope.novoDVD);
		dvd.id = Date.now();
		$scope.dvds.push(dvd);

		$scope.novoDVD = {};
		$scope.message = true;
	}

	$scope.removerDVD = function(id) {
		angular.forEach($scope.dvds, function(dvd, i){
			if(dvd.id == id) {
				$scope.dvds.splice(i, 1);
			}
		});
	}
});