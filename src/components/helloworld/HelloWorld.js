setTimeout(function() { myFunction("Hello World!"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}

setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML = 
        d.getHours() + ":" + 
        d.getMinutes() + ":" + 
        d.getSeconds();
}
