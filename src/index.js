const express = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT||8000;

const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials")

app.set("view engine", "hbs")
app.set("views",templatepath)
hbs.registerPartials(partialpath)


// adding public file so it can use css thing
app.use(express.static('public'));


// static web launch..

// const publicpath = path.join(__dirname,"../public")
// app.use(express.static(publicpath))

// routing....
app.get('/',(req,res)=>{
      res.render('index.hbs');
})
app.get('/about',(req,res)=>{
      res.render("about");
})
app.get('/weather',(req,res)=>{
      res.render("weather.hbs");
})
app.get('*',(req,res)=>{
      res.render("404error.hbs");
})


app.listen(port,"localhost",(err)=>{
       if(err)console.log("Cant start the server=>",err);
       else
       {
           console.log(`server is running on port number ${port}`) 
       }
})