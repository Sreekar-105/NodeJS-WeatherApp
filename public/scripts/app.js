// const { response } = require("express")

console.log("client side JavaScript loaded")


// Fetch cannot be run in the nodejs here we are running it on the client side on browser
fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})






const weatherForm = document.querySelector('form')

const locationData = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// here the submit eventlistener automatically refreshes the page by default 
// So stop it from refreshing by default we need to tell it 

weatherForm.addEventListener('submit' , (e)=>{
    // preventing it from refreshing by default
    e.preventDefault()
    messageTwo.textContent = ''
    messageOne.textContent = ''
    fetch('http://localhost:3000/weather?address='+locationData.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            console.log('Error : ',data.error)
        }else{
            messageOne.textContent = data.temperature
            messageTwo.textContent = data.location
            console.log(data)
        }
    })
})

    console.log(locationData.value)
})




// fetch('https://us1.locationiq.com/v1/search?key=pk.45da0a2938c0cc6f4910b037fa2dbb86&q=Dublin&format=json').then((response)=>{
//     response.json().then((data)=>{    
//     if(data.error){
//         console.log("Error: ",data.error)
//     } else{
        
//         console.log(data[0])
//         const latitude = data[0].lat
//         const longitude = data[0].lon
//         fetch('http://api.weatherstack.com/current?access_key=3203c8bddcc8a3e6f3d8798b5cb1a1ba&query='+latitude+','+longitude+'').then((response)=>{
//             response.json().then((forecastdata)=>{    
//             if(forecastdata.error){
//                 console.log("error : ",forecastdata.error.info)
//             }
//             else{
//                     console.log({
//                         location : forecastdata.location.region,
//                         temperature: forecastdata.current.temperature,
//                         feelslike : forecastdata.current.feelslike
//                     })
                
                
//             }
//         })
//         })
        
        
//     } 
// })   
// })