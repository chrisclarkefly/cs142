/***
 * CS142 Javascript Section
 * Anant Bhardwaj
 * anantb@cs.stanford.edu
 */
 

var p = function print(msg) {
    console.log(msg);
}

print("1...");
p("2...");

new print("5...");


var another_p = function (msg) {
    console.log(msg);
}
another_p("6...");


(function print_another(msg) {
    console.log(msg);;
})("7..."); 



(function (msg) {
    console.log(msg);;
})("8..."); 
