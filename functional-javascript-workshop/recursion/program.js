function getDependencies(tree, result) {
	result = result || []
	var dependencies = tree.dependencies || []

	Object.keys(dependencies).forEach(function(dependency) {
		var formatted = dependency + '@' + dependencies[dependency].version

		if (result.indexOf(formatted) === -1) result.push(formatted)

		 getDependencies(tree.dependencies[dependency], result)
	})

	return result.sort()
}

module.exports = getDependencies