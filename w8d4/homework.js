function callback(ele) {
  return (ele[0].toUpperCase() + ele.substring(1, ele.length))
}

function titleize(arr, callback) {
  return arr.map(callback)
}

// console.log(titleize(["kenny", "brian", "leo"], callback))

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(this.name + " the elephant goes 'phrrrrRRR~!!!!'")
}

Elephant.prototype.grow = function() {
  this.height += 12;
  console.log(this.height + " is the new height");
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  random = Math.floor(Math.random(this.tricks.length + 1));
  console.log(random);
}

// elephant = new Elephant("cookie", 12, ["eating", "snoring"]);
// elephant.trumpet();
// elephant.grow();
// elephant.addTrick("jumping");
// elephant.play();

