console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax ({
  method: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success(data) {
    console.log(data);
  },
  error() {
    console.log("uhhh");
  },
})


// 0d2ca955ff3d17e8495046756ad0fa81

// Add another console log here, outside your AJAX request

console.log("hi");
