const express = require('express');
const app = express();
// const hbs = require('handlebars');

app.use(express.static( __dirname + '/public'))

app.get('/', (request, response)=> {
    // response.sendFile(__dirname + '/html/index.html')
    response.render('home.hbs')
});

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/html/about.html')
    res.render('about.hbs')
});

app.get('/contact', (req, res) => {
    const users = [
        {
            name : 'Bob',
            age: 31
        },
        {
            name : 'Alice',
            age: 21
        },
        {
            name : 'Peps',
            age: 28
        },
    ];

    const someOtherUsers = ["Armelle", "Anne", "Joss", "Chaun"];

    res.render('contact.hbs', {
        totos : users,
        someOtherUsers: someOtherUsers,
        isAdmin: true,
        hasShoes: false,
    });
});


// app.get('/css/style.css', (req, res) =>{
//     res.sendFile('/css/style/css');
// });

app.listen(4000);
