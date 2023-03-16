// complete the given function

function palindrome(str){
  var regex = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(regex, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
	
}
module.exports = palindrome
