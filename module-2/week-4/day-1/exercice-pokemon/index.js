const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        css: ["style.css"]
    });
});

app.get('/pokemons', (req, res) => {
    const pokemons = [
        {
        id: 1,
        
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        },
        {
        id: 2,
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png",
        },
        {
        id: 3,
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png",
        },
        {
        id: 4,
        name: "Charmander",
        img: "http://www.serebii.net/pokemongo/pokemon/004.png",
        },
        {
        id: 5,
        name: "Charmeleon",
        img: "http://www.serebii.net/pokemongo/pokemon/005.png"
        },
        {
        id: 6,
        name: "Charizard",
        img: "http://www.serebii.net/pokemongo/pokemon/006.png",
        },
        {
        id: 7,
        name: "Squirtle",
        img: "http://www.serebii.net/pokemongo/pokemon/007.png",
        },
        {
        id: 8,
        name: "Wartortle",
        img: "http://www.serebii.net/pokemongo/pokemon/008.png",
        },
        {
        id: 9,
        name: "Blastoise",
        img: "http://www.serebii.net/pokemongo/pokemon/009.png",
        },
        {
        id: 10,
        name: "Caterpie",
        img: "http://www.serebii.net/pokemongo/pokemon/010.png",
    
        },
        {
        id: 11,
        name: "Metapod",
        img: "http://www.serebii.net/pokemongo/pokemon/011.png",
        
        },
        {
        id: 12,
        name: "Butterfree",
        img: "http://www.serebii.net/pokemongo/pokemon/012.png",
        
        },
        {
        id: 13,
        name: "Weedle",
        img: "http://www.serebii.net/pokemongo/pokemon/013.png",
        }
    ];

    res.render('pokemons.hbs', {
        pokemonStyle : pokemons,
        css: ['pokemon.css']
    });
});

app.listen('4000');