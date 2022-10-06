



var welcome = ['Hello this is my web :D', 'Xin chao cac ban ^_^', 'Hello, have a nice day :D ', 'Hello, wish u happy'];

// var randomWelcome = Math.floor(math.random() * welcome.length);
function show() {
       var random = Math.floor(Math.random() * welcome.length)
        alert(welcome[random]);
}
show();