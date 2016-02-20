'use strict';
const angular = require('angular');
 class FileLoader {
  constructor($parse) {
        // var vm = this;
        this.restrict = 'A';
        this.$parse = $parse;
    }
    link(scope,elem){
      // var f = FileLoader.instance.$parse;
      scope.displayTile = null;
      elem.bind('change', function(){
          for (var i = 0; i < elem[0].files.length; i++) {
            var file = elem[0].files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img1 = angular.element(document).find('img')[0];
            var reader = new FileReader();
            reader.onload = (function (img1) {
                return function (e) {
                  if(img1.height > 760){
                    img1.height = 700;
                  }
                  if(img1.width > 900){
                    img1.width = 900;
                  }
                    img1.src = e.target.result;
                };
            })(img1);
            reader.readAsDataURL(file);
          }
      });
      // angular.element(doument).('div.tile').hide();
      // scope.$apply();
    }
    static directiveFactory($parse) {
        FileLoader.instance = new FileLoader($parse);
        return FileLoader.instance;
    }
}
FileLoader.$inject = ['$parse'];
export default FileLoader.directiveFactory;
