const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let max = 0
  let result = []
  
  if (arrayOfString == null || arrayOfString == undefined){
    return undefined
  }

  for (let index = 0; index < arrayOfString.length; index++) {
    if (arrayOfString[index].length > max){
      max = arrayOfString[index].length
    }    
  }

  for (let index = 0; index < arrayOfString.length; index++) {
    if (arrayOfString[index].length == max) {
      result.push(arrayOfString[index])
    }   
  }
  return result
}
module.exports = getMaxLengthString



