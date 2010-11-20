var Views = {};

Views._layouts = {};
Views.defineLayout = function(layoutId, definition){
	Views._layouts[layoutId] = uki(definition);
};
Views.renderLayout = function(layoutId) {
	Views._layouts[layoutId].attachTo(document.getElementById("layout"), "1000 1000");
};

Views._partials = {};
Views.definePartial = function(partialId, definition){
    Views._partials[partialId] = uki(definition);
};
Views.renderPartial = function(containerId, partialId){
	Views._partials[partialId].attachTo( $(containerId).get(0) ).layout()
};