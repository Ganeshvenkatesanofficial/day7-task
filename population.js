
let URL = "https://restcountries.com/v3.1/all";

const checkName = (val) => val.population < 200000;

function getresponsevalue(){
    let obj = JSON.parse(this.response);
    let countries = obj.filter(checkName);
    
    console.table(countries);
    
    for(let arr of countries)
        {
            console.table(arr.region);
        }
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();