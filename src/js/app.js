'use strict';

const angular = require('angular');
// const angular-sanitize = require('angular-sanitize');

import MainController from './controllers/MainController';
import FileLoader from './directive/FileLoader';
angular.module('photoSlicerApp', [])
	.controller('mainController', MainController)
	.directive('imageLoader', FileLoader);
