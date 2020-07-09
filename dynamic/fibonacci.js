module.exports = () => {

function fib() {
let cache = {}
return function inner(n) {
  if (n<2) {
    return n
  }

  if (n in cache) {
    return cache[n]
  } else {
    cache[n] = inner(n-1) + inner(n-2)
  }

  return cache[n]
}

}

console.log(fib()(20))

}