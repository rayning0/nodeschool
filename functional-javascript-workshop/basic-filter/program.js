function getShortMessages(messages) {
	var formattedMessages = messages.map(function(element) {
		return element.message;
	});

	return formattedMessages.filter(function(element) {
		return element.length < 50; 
	});
}

module.exports = getShortMessages