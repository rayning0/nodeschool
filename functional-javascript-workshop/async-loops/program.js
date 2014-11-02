// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function loadUsers(userIds, load, done) {
	var users = []
	var loadedUsers = 0

	userIds.forEach(function(id, index) {
		load(id, function(user) {
			users[index] = user
			++loadedUsers
			if(loadedUsers == userIds.length) return done(users)
		})
	})
}

module.exports = loadUsers