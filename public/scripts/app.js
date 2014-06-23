(function(){
	var app = angular.module('supertype',[]);
	
	app.controller('TypeEditController', function(){
		var self = this;
		
		self.propName = "";
		self.propType = "";
		self.filter = "";
		self.types = ["uuid","string","number"];
		self.properties = [
		 {"name": "ID",   "type": "string"},
		 {"name": "Name", "type": "string"},
		 {"name": "Age",  "type": "number"},
		];
		
		self.removeProperty= function(index){
			self.properties.splice(index, 1);
		};
		
		self.addProperty= function(){
			if (self.propName == "") {
				return;
			}
			if (self.propType == ""){
				return;
			}
			var prop = {};
			prop.name=self.propName;
			prop.type=self.propType;
			// TODO check for existing name.
			self.properties.push(prop);
			// reset form	
			self.propName = "";
			self.propType = "";
			
		};
	});
	
	app.controller('MainController', function(){
		var self = this;
		
		self.toggleDesignMode = function(){
			self.setDesignMode(!self.designMode);
		};
		
		self.setDesignMode = function(mode){
			if (mode === true){
				self.designMode=true;
				self.currentMode='Design';
				self.icon='wrench'
			} else {
				self.designMode=false;
				self.currentMode='Work';
				self.icon='play'
			}
		};
		
		self.setDetailsTemplate= function(name) {
			self.detailsTemplate="/templates/"+name+".html";
		};
		
		self.setDetailsTemplate("tree");
		self.setDesignMode(false);
	});
	
})();