// Add your functions here


const map = (arr, func) => {
  return arr.map(item => func(item) )
}

const reduce = (arr, func, startVal = false) => {
  return startVal ? arr.reduce(func, startVal) : arr.reduce(func)
}