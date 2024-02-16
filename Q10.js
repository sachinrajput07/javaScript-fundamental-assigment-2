function findDuplicates(sentence) {
    let word = sentence.toLowerCase().match(/\w+/g);
    let wordMap = new Map();
    for(let check of word ){
        let count = wordMap.get(check) || 0;
        wordMap.set(check , count +1)   
    }
    return wordMap
}

console.log(findDuplicates("sachin singh rajput sachin "));