let URL = "https://restcountries.com/v3.1/all";

const checkName = (val) => val.region == "Asia" || val.continents == "Asia";

function getresponsevalue(){
    let obj = JSON.parse(this.response);
    console.table(obj.filter(checkName));
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();