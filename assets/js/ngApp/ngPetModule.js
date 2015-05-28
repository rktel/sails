angular.module('ngPetModule',[]).
controller('ngPetController', function () {
	//console.log('ngPetModule.ngPetController: Ready');
	this.store = function (ngName) {
		io.socket.post('/pet', { name: ngName }, function (resData) {
		  console.log(resData); // => {id:9, name: 'Timmy Mendez'}
		});
	}
	

});

/*
io.socket.post('/pet', { name: 'Rex' }, function (resData) {
	  console.log(resData); // => {id:9, name: 'Timmy Mendez'}
	});
*/