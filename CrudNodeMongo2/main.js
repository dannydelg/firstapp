const express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/dato_usuario");

let userSchemaJson = {
    email:String,
    password:String
}

let user_schema = new Schema(userSchemaJson);

let User = mongoose.model("User",user_schema);

const app = express();

//Midlewears 
app.use(bodyParser.json()); /// para aplication json
app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "jade");

app.get("/", (req, res)=> {
    res.render("index");
});
// para enviar parametros a una vista se hace en formato json {}

app.get("/login", (req,res) => {
    User.find((err,doc)=>{
        console.log(doc);

    });   
    res.render("login");


});

app.post("/users", (req, res)=>{

    let user = new User({email:req.body.email, password:req.body.password });
    user.save((err)=>{

        res.send("datos recividos ok");


    });
    console.log(req.body.password);
    console.log(req.body.email);
    

});

app.post("/", (req,res) => {
    res.render("form");

});

// para enviar parametros a una vista se hace en formato json {}

//    app.get("/login", (req,res) => {
//          res.render("login", {nombre: req.params.nombre});

//});

app.listen(5000);