'use strict';
const angular = require('angular');
export default class MainController {
	constructor() {
		this.title = 'Raw Ideas JavaScript Test';
		this.xAxis = 1;
		this.yAxis = 1;
		this.file=null;

	}

	createSegments(){
		if(! this.displayTile || this.displayTile.length !== this.xAxis*this.yAxis){
			var img = angular.element(document).find('img')[0];
			var width = img.width;
	    var height = img.height;
			this.containerHeight = height;
			this.containerWidth = width;
			var x = this.xAxis;
			var y = this.yAxis;
			this.myValue = false;
	    // var numbertiles = (x * y);
	    var tilesList = [];
	      for ( var i = 0; i < y; i++ ) {
					for( var j = 0 ; j < x ; j++ ){
							var tiles = {};
							tiles.xPos = -( width / x ) * j;
							tiles.yPos = -(height / y) * i;
						  tilesList.push(tiles);
					}
	      }
				this.displayTile = tilesList ;
				this.tileHeight = height / y ;
				this.tileWidth = width / x ;
				this.backGroundimg = img.getAttribute( 'src' ) ;
				this.myValue = true;
			}
			this.randomiseArray();
	}
	randomiseArray(){
		// yates algo to ramdomise array
			var m = (this.displayTile).length, t, i;
	  	// While there remain elements to shuffle
	  	while (m) {
	    // Pick a remaining element…
	    	i = Math.floor(Math.random() * m--);

	    	// And swap it with the current element.
	    	t = this.displayTile[m];
	    	this.displayTile[m] = this.displayTile[i];
	    	this.displayTile[i] = t;
			}
	}
	// onFileUpLoad(){
	// 	// var img = angular.element(document).find('input[type="file"]')[0];
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //       // get loaded data and render thumbnail.
	// 			// document.getElementById("image").src
	// 			angular.element(document).find('img')[0].src = e.target.result;
	// 			this.backGroundimg = e.target.result;
  //   };
  //   // read the image file as a data URL.
  //   reader.readAsDataURL(this.files[0]);
	// }
}
