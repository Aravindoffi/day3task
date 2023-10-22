const url = "https://restcountries.com/v3.1/all"

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    for(let val of obj){
        console.log(val.flags.png)
    }
}
);
req.open("GET", url);
req.send();