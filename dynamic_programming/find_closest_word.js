function findClosestWord(searchWord, hintedWord){
  let longestCommonSubstring = 0
  let closestWord = ''
  if(Array.isArray(hintedWord)){
    hintedWord.forEach((w) => {
      const { length, word } = findClosestWord(searchWord, w)
      if(length > longestCommonSubstring){
        longestCommonSubstring = length
        closestWord = word
      }
    })
  } else {
    return findLongestSubstring(searchWord, hintedWord)
  }
  console.log(longestCommonSubstring, closestWord)
}

function findLongestSubstring(first, second){
  const table = []
  for(let sWord = 0; sWord < first.length; sWord++){
    for(let hWord = 0; hWord < second.length; hWord++){
      const sLetter = first[sWord]
      const hLetter = second[hWord]
      if(!table[sWord]){
        table[sWord] = []
      }
      if(sLetter == hLetter && sWord == hWord){
        if(table[sWord]?.[hWord-1] >=0){
          table[sWord][hWord] = table[sWord][hWord-1] + 1
        } else if(table[sWord-1]?.[second.length - 1] >= 0){
          table[sWord][hWord] = table[sWord-1]?.[second.length - 1] + 1
        } else {
          table[sWord][hWord] = 1
        }
      } else {
        if(table[sWord]?.[hWord-1] >= 0) table[sWord][hWord] = table[sWord][hWord-1]
        else if(table[sWord-1]?.[second.length - 1] >= 0){
          table[sWord][0] = table[sWord-1]?.[second.length - 1]
        } else {
          table[sWord][hWord] = 0
        }
      }
    }
  }
  return {
    length: table[first.length - 1][second.length - 1],
    word: second
  }
}

findClosestWord('fish', ['fosh'])