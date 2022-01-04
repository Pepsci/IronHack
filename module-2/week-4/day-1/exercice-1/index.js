const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home.hbs', {
        css: ["style.css"],
        admin: {
            name: "Pauline",
            picture: "https://randomuser.me/api/portraits/women/21.jpg"
        }
    });
});

app.get('/users', (req, res)=>{
    const users = [
        {
            name: "Joss",
            lastName: "Filippi",
            picture: "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            name: 'Lambert',
            lastName: "Wilson",
            picture:"https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            name: "Mélanie",
            lastName: "Laurent",
            picture:"https://randomuser.me/api/portraits/women/43.jpg"
        },
    ];

    res.render('users.hbs', {
        user : users,
        css : ['users.css']
    });
});

app.listen('4000');