Views.defineLayout("main", [{
	view: "Box", background: '#ddd',
	rect: '300 50 402 313', anchors: 'top left right',
	childViews: [{
		view: 'VSplitPane', rect: '1 1 400 300', anchors: 'top left right', handleWidth: 1,
		    topMin: 60, bottomMin: 300, handlePosition: 60,
	        topChildViews: [{
				id: "action-panel", view: "Box", background: "#eee", rect: '0 0 400 60', anchors: 'top left right',
				childViews: []
	        }],
			bottomChildViews: [{ view: 'ScrollPane', rect: '0 0 400 250', anchors: 'top left right',
	            childViews: [{ view: 'List', rect: '0 0 500 250', anchors: 'top left right', 
	                data: [], rowHeight: 25, id: 'messages', throttle: 0, multiselect: false, textSelectable: false
	            }]
	        }]
		}]
	}]);