var AppController = Sammy("#app", function(app){
	app.get("#!/", function(ctx){
		Views.renderLayout("main");
		Views.renderPartial("#action-panel", "messages/new");
		
		uki("#hello").bind("click", function(){
			var text = uki("#message").value();
			uki("#message").value("");
			app.runRoute("post", "#!/messages", {text: text});
		});
	});
	app.post("#!/messages", function(ctx){
		var message = new Message();
		message.attr("text", ctx.params.text);
		message.save();	
	});
	
    app.bind("add-message", function(e,data){
		var text = data.attributes.text;
		if (text == "") {
			text = "please fill in sth. before clicking";
		} else {
			uki("#messages").addRow(0, text);
		}
		uki("#hello").text(text);
		uki("#message").focus()
	});
});

(function(){
	Sammy("#app").run("#!/");
})();