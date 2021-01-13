function mysteryScoping() {
  function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
  }
  
  function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
  }
  
  // function mysteryScoping3() {
  //   const x = 'out of block';
  //   if (true) {
  //     var x = 'in block';  
  //     console.log(x);
  //   }
  //   console.log(x);
  // }
  
  function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
  }
  
  // function mysteryScoping5() {
  //   let x = 'out of block';
  //   if (true) {
  //     let x = 'in block';  
  //     console.log(x);
  //   }
  //   let x = 'out of block again';
  //   console.log(x);
  // }
  
  mysteryScoping1
  mysteryScoping2
  // mysteryScoping3 error => var x has already been declared
  mysteryScoping4
  // mysteryScoping5 error => let x has already been declared

}



function madLib(a, b, c) {
  console.log("We shall {a.toUpperCase()} the {b.toUpperCase()} {c.toUpperCase()}")
}

// madLib('make', 'best', 'guac'); not working

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString))
}

// isSubstring("time to program", "time");

function fizzBuzz(array) {
  arr = []
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      continue
    } 
    else if (array[i] % 5 === 0 || array[i] % 3 === 0) {
      arr.push(array[i])
    }
  }
}

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// console.log(isPrime(2))

function firstNPrimes(n) {
  arr = []
  i = 1
  var count = 0
  while (count !== n) {
    if (isPrime(i)) {
      count += 1
      arr.push(i)
    }
    i += 1
  }
  return arr
}

function sumOfNPrimes(n) {
  primes = firstNPrimes(n)
  sum = 0
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i]
  }
  return sum
}

console.log(sumOfNPrimes(4))
