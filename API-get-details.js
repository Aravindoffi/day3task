const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    for(let val of obj){
        console.log(val.name.official)
        console.log(val.region)
        console.log(val.subregion)
        console.log(val.population)
    }
}
);
req.open("GET", url);
req.send();