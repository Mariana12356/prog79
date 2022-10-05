menuListArray = ["Pizza Vegetariana",
                "Pizza de Frango",
                "Pizza Portuguesa",
                "Pizza Quatro Queijos",
                "Pizza de Calabresa",
                "Pizza Extravagenza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}
document.getElementById("displeyMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}
document.getElementById("displeyMenu").innerHTML = htmldata;
}


function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item)
    addItem();
}