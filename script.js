let container = document.getElementById('cardContainer');




let url = 'https://dummyjson.com/products';
let dataProm = fetchData(url);

async function fetchData(url){
    let prom = fetch(url);
    return await prom;
}

dataProm.then((data)=>{
    return data.json();
}).then((dataJ)=>{
    console.log(dataJ.products); 
})

