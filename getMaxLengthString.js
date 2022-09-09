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
    if (arrayOfString[index].length == max){
      result[index] = arrayOfString[index]
    }    
  }
  return result
}
module.exports = getMaxLengthString


// console.log(getMaxLengthString(['hello', 'hi', 'hey'])) //return ['hello']
// console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])) 
//                                 //return ['Good Evening', 'Good Morning']
// console.log(getMaxLengthString(['hi'])) //return ['hi']
// console.log(getMaxLengthString(null)) //return undefined
// console.log(getMaxLengthString(undefined)) //return undefined
