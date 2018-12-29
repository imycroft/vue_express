const fetch = require("node-fetch");
const url = "https://api.myjson.com/bins/urk3w";

// function getJson() {
//     fetch(url)
//     .then(r => r.json()
//     .then(json => console.log(json))
//     )
// }

async function getJson(){
    const response = await fetch(url);
    response.json()
    .then(firstname => {
      
       console.log(firstname);
    });
    
    
}
getJson();