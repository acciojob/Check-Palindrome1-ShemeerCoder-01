// complete the given function

function palindrome(str){
	var i = 0 , j;
	j = str.length()-1;
	while(i < j){
		if(str.charAt(i) != str.charAt(j)){
			return false;
		}
		i++;
		j++;
	}
	return true;
}
module.exports = palindrome
