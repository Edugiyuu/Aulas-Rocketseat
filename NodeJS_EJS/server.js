const express = require('express')
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req,res) {
    const items = [
        {
            title: 'D',
            message: 'Desenvolver aplicações/serviços de forma facil'
        },
        {
            title: 'E',
            message: 'Ejs usa Javascript para rederizar HTML'
        },
        {
            title: 'M',
            message: 'Muito facil de usar'
        },
        {
            title: 'A',
            message: 'Amorzinho'
        }
    ]
    res.render("pages/index")
})

app.get("/sobre", function (req,res) {
    res.render("pages/about")
})

app.listen(8080);
console.log('Rodando');