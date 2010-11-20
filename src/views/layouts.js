Layouts = {};
Layouts.render = function(name){
	Layouts[name].attachTo(document.getElementById("layout"), "500 500");
};