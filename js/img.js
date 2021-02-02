async function start() {
let api = 'http://somnoynadno.ru:3000';

let response = await fetch(api + "/all").then(res => res.json());

console.log(response);

let div = document.getElementById("main");

for (let elem of response.reverse()) {
let container = document.createElement("a");
let img = document.createElement("img");
let description = document.createElement("p");
let author;
let date;
let info = document.createElement("div");
let line2 = document.createElement("p");
let line3 = document.createElement("p");
/*let clearfix = document.createElement("div");*/

img.src = api + "/images/" + elem.path;

line2.innerText = "Author: " + elem.author;
line3.innerText = moment(elem.date).format("LLL");

container.className = "gallery";
container.rel = "group";
container.href = api + "/images/" + elem.path;
container.title = elem.description;
/*clearfix.className = "clearfix";*/
info.className = "info";
line2.className = "inf";
line3.className = "inf";

container.appendChild(img);
info.appendChild(line2);
info.appendChild(line3);
container.appendChild(info);
/*container.appendChild(clearfix);*/
div.appendChild(container);

}
}
start();
