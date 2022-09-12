const { url } = require('inspector')
const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=3203c8bddcc8a3e6f3d8798b5cb1a1ba&query='+latitude+','+longitude+'' 

    request({url:url , json:true} , (error,response)=>{
        if(error){
            callback("Unable to connect to location services",undefined)
        }else if(response.body.error){
            callback(`The error is ${response.body.error.info}`,undefined)
        }else{
            callback(undefined,{
                location : response.body.location.region,
                temperature: response.body.current.temperature,
                feelslike : response.body.current.feelslike
            })
        }
    })
}


module.exports = forecast