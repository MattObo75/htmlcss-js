
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

// alert("Hej på er");

// Byta färg för alla li element att använda i .cool klass
let listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length;  i++) { 
    listItems[i].className = "cool"; 

}

// Lägga till räknare i header h2
let heading = document.querySelector("h2");
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading;