let http = require("http"),
    fs = require("fs"),
    express = require("express"),
    mongoose = require("mongoose");

let app = express();

app.get("/", (req, res)=>{
    res.render("index.html");

}).listen(5000);



/*

let server = http.createServer((req,res)=>{

    fs.readFile("./index.html", (err,data)=>{
        console.log(req);


        var dataString = data.toString();
        var variable = dataString.match( /[^\{\}]+(?=\})/g );

        var nombre = "Danny Delgado";
        var edad = 34;
        for (let i = variable.length-1; i>0; i--) {
            var value = eval(variable[i]);
            dataString = dataString.replace("{"+variable[i] +"}", value);
        }
        console.log("las varibles: "+variable);
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(dataString);
        res.end("fin");

    });
   
}).listen(5000); */




