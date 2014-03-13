var myApp = angular.module('myApp',[]);

myApp.factory('$pitchesFactory',function(){
	var f = {};
	var _pitches = {
		"3": {
			"pitch": "As an engineer, dreaming of data acquisition. I can write data warehouses in my sleep. While counting sheep through a microscope. On The edge of the universe.",
			"picture": {
				"source": "./monsterflat-1.0-social/images/circle/monsterflat-128.png"
			}
		},
		"5": {
			"pitch": "As an engineer, dreaming of data acquisition. I can write data warehouses in my sleep. While counting sheep through a microscope. On The edge of the universe.",
			"picture": {
				"source": "./monsterflat-1.0-social/images/circle/monsterflat-128.png"
			}
		},
		"8": {
			"pitch": "As an engineer, dreaming of data acquisition. I can write data warehouses in my sleep. While counting sheep through a microscope. On The edge of the universe.",
			"picture": {
				"source": "./monsterflat-1.0-social/images/circle/monsterflat-128.png"
			}
		}
	};
	var pitches = [];
	for (var p in _pitches) {
		pitches.push(new Pitch(p,_pitches[p]))
	}
	f.getPitches = function () {
		return pitches;
	}
	return f;
});

myApp.controller('PitchesController',['$scope','$pitchesFactory',function($scope,$pitchesFactory){
	$scope.pitches = $pitchesFactory.getPitches();
}]);

function Pitch (pid,p) { console.log(p);
	this.pid = pid;
	this.picture = p.picture.source;
	this.pitch = p.pitch;
}