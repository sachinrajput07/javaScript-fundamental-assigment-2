function  uniqueCharacterCheck(username) {
  let word = new Set();
   for(let char of username){
      if (word.has(char)) {
        console.log("The input string contains duplicates");
        return false
      }
      word.add(char)
   }
   console.log("The input string contains unique characters.");
   return true
}

 console.log(uniqueCharacterCheck("mithun")); 
 console.log(uniqueCharacterCheck("anurag"));