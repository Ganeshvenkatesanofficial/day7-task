
let URL = "https://restcountries.com/v3.1/all";
function getresponsevalue(){
    let obj = JSON.parse(this.response);
    obj.forEach(function(element) {
        console.log("Name = " + element.name.common +",", "Capital = " + element.capital +",", "Flag = " + element.flags.png);
    })
   
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();