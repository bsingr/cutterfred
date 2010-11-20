var Message = Model("message", {
});
Message.bind("add", function(message) {
    AppController.trigger("add-message", message);
})

