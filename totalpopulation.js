let URL = "https://restcountries.com/v3.1/all";
function getresponsevalue(){
    let obj = JSON.parse(this.response);
    let arrOfPopulation = obj.map(function(popu) {
        return popu.population;
    })
    let sum = arrOfPopulation.reduce((a,b) => a+b);
    console.table("Total Population is = " + sum); 
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();