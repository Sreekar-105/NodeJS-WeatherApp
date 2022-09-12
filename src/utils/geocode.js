
// const { builtinModules } = require('module')
const request = require('request')

// const geocode = (address,callback) =>{

//     // here it is important to use the encodeURIComponent for the url string insertion 
//     // because when the string coontains special characters that mean something in the url
//     // then the url might crash
//     // Example if the address has '?' but that ? means something in the url so we need to encode it

//     const url = 'https://us1.locationiq.com/v1/search?key=pk.45da0a2938c0cc6f4910b037fa2dbb86&q='+address+'&format=json'
//     request({url:url , json:true},(error,response)=>{
//         if(error){
//             callback("Unable to connect to location services",undefined)
//         }else if(response.body.error){
//             callback(`The error is ${response.body.error}`)
//         }else{
//             callback(undefined,{
//                 latitude : response.body[0].lat,
//                 longitude : response.body[0].lon
//             })
//             console.log(response.body[0].lat)
//             console.log(response.body[0].lon)
//         }
//     })

// }


// Using the object destructuring and object shorthand
const geocode = (address,callback)=> {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.45da0a2938c0cc6f4910b037fa2dbb86&q='+address+'&format=json'
    
    request({url:url , json:true} , (error,{body}) =>{
        if(error){
            callback("Unable to connect to location services",undefined)
        }else if(body.error){
            callback(`The error is ${body.error}`)
        }else{
            callback(undefined,{
                latitude : body[0].lat,
                longitude : body[0].lon
            })
            console.log(body[0].lat)
            console.log(body[0].lon)
        }
    })
}

module.exports = geocode