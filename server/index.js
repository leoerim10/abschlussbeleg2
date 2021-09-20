const express = require('express')
const mongoose = require('mongoose')

const contact = require("./models/Contact")

const serverapp = express()
serverapp.use(express.json())
serverapp.listen(3001, function(){
    console.log("Server listening at port 3001.......\n")
})


mongoose.connect('mongodb+srv://Sameer:Rordofthelings@crud.mgcsw.mongodb.net/contacts45?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


contact.create({ firstname: 'Maxim', lastname: 'Mueller', street:"Berliner Straße", country: "Germany"  }, function (err) {
    if (err && err.name === 'ValidationError') {
        console.error(Object.values(err.errors).map(val => val.message))
      }
  })


serverapp.get('/', function(req, res){
    res.send("Resoponse from server.....")
})

/* serverapp.get('/contacts' ,function(req, res){
    res.send("hello from contacts")
 // res.send("user id from uri: "+ req.query.userid)


}) */
serverapp.get('/contacts' ,function(req, res){

// if endpoint contacts is called without any query parameter, send all user info 
// as in example 


// if query params are there, parse these, fetch info from db and send them.


    /* 
    parse query to see the userid
    find the user with given userid in database
    use CRUD methods to fetch the relevant information
    */


    /* dummy_contact = {
        "userid" : req.query.userid,
        "firstname" : "sameer",
        "lastname" : "dhimal",
        "age": "38"
    }
    res.send(dummy_contact)
    console.log(req.query.userid + "name = " + req.query.username) */
    //res.send("user id from uri: "+ req.query.userid)


})



// frontend: onClick("localhost:3001/contacts")
serverapp.put('/contacts', function(req, res){
    // sepcify how put

})

serverapp.post('/contacts', function(req, res){
   // console.log("in post")
   // console.log(req.body)

   // req.body contains the body (json formatted string) of the POST request.
   // these can be easily parsed using object.attribute format

    // after successful parse, add the object to the DB
    /*  Contact.create({ firstname: firstname, lastname: lastname, streetNumber:streetno  }, function (err) {
        if (err && err.name === 'ValidationError') {
            console.error(Object.values(err.errors).map(val => val.message))
          }
      })  */
  // specify what post does

})

serverapp.get('/users', function(req, res){


})
serverapp.delete('/contacts:userid', function(req, res){
    console.log("delete this")
    console.log(req.query.userid)
})
