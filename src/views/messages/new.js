Views.definePartial("messages/new", [{
		id: "hello", view: "Button", text: "Demo action",
	  	rect: "5 30 200 20", anchors: "left top right bottom"
	},{
		id: "message", view: "TextField", placeholder: "use this textfield to change the button label",
		rect: "5 5 200 20", anchors: "left top right bottom"
	}]);