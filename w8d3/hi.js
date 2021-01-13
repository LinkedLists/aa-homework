function phase_1() {
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


  function madLib(a, b, c) {
    "We shall {a.toUpperCase()} the {b.toUpperCase()} {c.toUpperCase()}"
  }

  console.log(madLib('make', 'best', 'guac'))

}

phase_1()
