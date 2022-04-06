/* Create a new list item.
− Insert in the end of <ul>.
− Give to it font-size 36px;
− Give TextNode “Musu produktai”.
− Give padding: 24px */

const el = document.querySelector("ul");
let newListItem = document.createElement("li");
el.appendChild(newListItem);
let myText = document.createTextNode("Musu produktai");
newListItem.appendChild(myText);
newListItem.style.fontSize = "36px";
newListItem.style.padding = "24px";

/* In .js create 3 elements (DIV).
− For each div create textNodes with the following texts:
− Exampe with innerHTML;
− Example with textContent;
− Example with appendChild.
− Print out all free nodes in HTML using 3 different methods */

let div1 = document.createElement("div");
document.querySelector("body").appendChild(div1);
let div2 = document.createElement("div");
document.querySelector("body").appendChild(div2);
let div3 = document.createElement("div");
document.querySelector("body").appendChild(div3);

// Inner HTML

document.querySelectorAll("div")[1].innerHTML = "<h2><p>My Inner HTML</h2></p>";

// Text Content

div2.textContent = "My Text Content";

// Append Child

let newText = document.createTextNode("Appended Child Text");
div3.appendChild(newText);
