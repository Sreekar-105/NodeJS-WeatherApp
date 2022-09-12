
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const express = require('express')
var hbs = require('hbs')
const app = express()

console.log(__dirname)
console.log(path.join(__dirname,'../public'))
// console.log(__dirname+"/public")

// paths
const partialsPath = path.join(__dirname,"../views/partials")

// Setup Handlebars engine
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname,"../public")))


// app.use(express.static(__dirname+"/static"))

app.get('' , (req,res)=>{
    res.render('index',{
        title : "Weather application",
        name:"Sreekar Reddy"
    })
})

app.get('/about' , (req,res)=>{
    res.render('about',{
        title:"About",
        name:"Sreekar Reddy"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        message : "Hello Im here to help you.Please let me know what you want",
        name:"Sreekar Reddy"
    })
})

app.get('/weather', (req,res)=>{

    if(!req.query.address){
        return res.send({
            error : "you must provide an address"
        })
    }

    const address = req.query.address

    geocode(address,(error,data)=>{
        if(error){
            return res.send({
                error : error
            })
        }
        else{
            forecast(data.latitude,data.longitude,(error,forecast)=>{
                if(error){
                    return res.send({
                        error : error
                    })
                }else{
                    res.send(forecast)
                }
            })
        }
    })
    // res.send({
    //     Address : req.query.address,
    //     forecast:"Its 30* c and it might rain",
    //     location: "Amberpet"
    // })
})

// Query string usage exmaple
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            Error : "You must provide a query string"
        })
    }

    console.log(req.query.search)
    res.send({
        products : []
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:"Error 404",
        errormessage:"Help article not found",
        name : "Sreekar Reddy"
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        title:"Error 404",
        errormessage : "Page not found",
        name : "Sreekar Reddy"
    })
})

app.listen(3000)
// console.lo