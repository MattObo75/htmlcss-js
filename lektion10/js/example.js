
let list = document.getElementsByTagName("ul")[0];
// Lägga till element i start av listan
let newItemFirst = document.createElement("li");
let newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// Lägga till element i slut av listan
let newItemLast = document.createElement("li");
let newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);