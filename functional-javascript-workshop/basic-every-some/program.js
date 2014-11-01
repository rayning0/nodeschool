// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// In this case .some() is used similar to .include? in Ruby
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
  	return submittedUsers.every(function(submittedUser) {
  		return goodUsers.some(function(goodUser) {
  			return goodUser.id === submittedUser.id;
  		})
  	})
  };
}
  
module.exports = checkUsersValid