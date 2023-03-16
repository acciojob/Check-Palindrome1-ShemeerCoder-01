// complete the given function

function palindrome(str){
	var len = str.length;
	var i = 0;
	var j = len - 1;
	while(i < j){
		if(str.charCodeAt(i) != str.charCodeAt(j)){
			return false;
		}
		i++;
		j++;
	}
	return true;
	
}
module.exports = palindrome
