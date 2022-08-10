// setTimeout(callback, 5000);

// function callback() {
//     console.log('Third');
// }

// console.log('First');
// console.log('Second');
let a=5;
let body = document.getElementById('body')

// const APIKey = "";
// const API = "api.openweathermap.org/data/2.5/weather?id=2172797&appid=5f3e18a3b2dc7b5835307588bfca82cf";

// let loginPromise = new Promise(function(rs, rj) {
//     //async operation;
//     setTimeout(function() {
//         if(a===7){
//                 rs({
//                 name: "ade"
//             });
//         } else{
            
//             rj(Error("i no well"));

//         }
//     }, 5000);



// });

// loginPromise.then(
//     (rs)=>{
//          console.log(rs.name)
//     }
// ).catch(
//     (err)=>{
//         console.log(err.message)
//     }
// )

// loginPromise.then();
// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population" {
//     "method": "GET",
//    
// });

// let weatherData = fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

// weatherData.then(
//     (res)=>res.json()
// ).then(
//     (re)=>{
//         console.log(re);

//         let par = document.createElement('p');
//         par.innerHTML = re.data[0].Nation;
//         par.style.color = "white"
//         console.log(re.data[0].Nation);
//         body.append(par);
//     }
// ).catch((err)=>{
//    console.log(err);
// });

// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
// myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

let whaleFunction = async function(){

    try{
        let weatherData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

        if(!weatherData.ok){
            throw new Error(weatherData.status);

        }

        let data = await weatherData.json();
        console.log(data);
        let datah1 = document.createElement('div')
        datah1.append(JSON.stringify(data) )
        datah1.style.backgroundColor = 'white'
        body.append(datah1)

    }

    catch(error){
    console.log(error.message);
 let errorDisplay = document.createElement('p');
 errorDisplay.append(error.message)
 body.append(errorDisplay)
 errorDisplay.style.color = "#ffffff"

    }
}

whaleFunction();
// const options = {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "https://api-formula-1.p.rapidapi.com",
//         "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
//     }
// };

// fetch('https://api-formula-1.p.rapidapi.com/{endpoint}', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));