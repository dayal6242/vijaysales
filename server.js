var express=require('express');
var app=express();


app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay sales</h1>"
        +"<hr/>"
        +"<h3>smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile</li>"
        +"<li>Hololens</li>"
        +"<li>Gaming console</li>"
        +"<li>LaSmart watchptops</li>"
        +"</ol>"

    );
});
app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Vijay sales</h1>"
        +"<hr/>"
        +"<h3>Doing things</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>chief mentor:Ravi</li>"
        +"<li>Mobile</li>"
        +"<li>Hololens</li>"
        +"<li>Gaming console</li>"
        +"<li>LaSmart watchptops</li>"
        +"</ol>"

    );
});


var server=app.listen(9000);
console.log("vijay sales online shopping running on port 9000");