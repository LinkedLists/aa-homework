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
  random = Math.floor(Math.random(this.tricks.length + 1)); //not getting random int
  console.log(random);
}

// elephant = new Elephant("cookie", 12, ["eating", "snoring"]);
// elephant.trumpet();
// elephant.grow();
// elephant.addTrick("jumping");
// elephant.play();


function paradeHelper(elephant) {
  console.log(elephant.name + " is an elephant");
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// herd.forEach(paradeHelper);


function dinerBreakfast() {
  let order = " 100x bacon";

  return function haha(extras) {
    return (order + " and an order of " + extras);
  }
}


let bfastOrder = dinerBreakfast();
console.log(bfastOrder("chocolate chip pancakes"));
console.log(bfastOrder("grits"));
