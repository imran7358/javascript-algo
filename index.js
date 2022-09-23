function checkPalindrom(str) {

  for (var i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return 'Not a Plaindrom'
      }

      else return 'Palindrom'
  }

}
console.log(checkPalindrom('madam'))