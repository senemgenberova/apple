var main = document.getElementById("main");
var sebet = document.createElement("div");
sebet.setAttribute("id","sebet");

var n = Number(prompt("enter any number"));
var apple = 0;

for(var i=0;i<n;i++){
	apple = document.createElement("img");
	apple.setAttribute("id","apple");
	apple.setAttribute("src","img/apple.png");
	main.appendChild(apple);
	apple.style.width = "30px";
	apple.style.display = "inline-block"
	apple.style.marginRight = "15px";
	apple.addEventListener("dragstart",function(event) {
		event.dataTransfer.setData("text",event.target.id);
	});
}

main.appendChild(sebet);

sebet.addEventListener("dragover",function(event){
	event.preventDefault();
});

sebet.addEventListener("drop",function(event){
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
});
