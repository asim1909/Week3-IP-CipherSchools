// Arrays in JS
let arrayItem = "book"
const books =["pns",arrayItem,4,true];
books[books.length]="pencil";
books[13]=3.8;
console.log(books[8]);
console.log(books);
console.log(books[1]);
console.log(books.length);
// Array Methods
let pencilBoxContent =["pen","pencil","eraser"];

pencilBoxContent.push("sharpner")
pencilBoxContent.unshift("sharpner")
pencilBoxContent.pop()
pencilBoxContent.shift()
pencilBoxContent.forEach(function (item){
    item ="<li>${item}</li>";
    console.log(item);
});
let shortItems=pencilBoxContent.find(function(item){
    if(item.length<=5){
        return item;
    }
});
console.log(shortItems);


console.log(pencilBoxContent.join(",  "));