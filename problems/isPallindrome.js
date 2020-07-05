const pal = 'mandam'
function isPalindrome(s) {
  for (var i = 0; i < Math.floor(s.length/2); i++) {

    if (!(s.charCodeAt(i) === s.charCodeAt(s.length - i -1))) {
      return false
    }
  }
return true
}

isPalindrome(pal)