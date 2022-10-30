// Ex1
// let number = prompt("endter a number");

const checkNumber = (number) => {
    if(number <= 0) {
        return true;
    }else{
        return false;
    }
}

// Ex2
// let number2 = prompt("endter a number2");

// document.write(++number2);


// Ex3


// Ex4


// Ex5


// Ex6

const arrayNames = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// for (let i = 0; i < arrayNames.length; i++) {
    // console.log(arrayNames[i]);
    // return(arrayNames[i]);
// }



// Ex7

// arrayNames.forEach(nameValue => console.log(nameValue));


// Ex8

const series = () => {
	let newSeries = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		         ];

             //  Ex8
             newSeries.forEach((value) => {
                // console.log(`Id = ${value.id} & title = ${value.title}`);
             });
             
            //  Ex9
            
            const mapedSeries = newSeries.map((value) => {
                return {
                    "id": value.id,
                    "title": value.title,
                }
            });

            // console.log(mapedSeries);


            // Ex10

            const filteredSeries = newSeries.filter((value) => {
                return value.rating < 5;
            });
            // console.log(filteredSeries);
            
        }


        series();




// Ex11

let courses = ["Java", "JavaScript", "Python", "C++", "PHP"];

courses.reduce((acc, value) => {
    if(acc > value.length)
    {
        console.log(acc);
    }else{
        acc = value.length;
    }
},0);

// Ex12

let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    }
    ];

    const displayName = () => {
        const names = pokemonData.reduce((acc,value) => {
            console.log(value.version.name);
        },0);
    
        console.log(names);

    }

    displayName();





// Ex13

const data = [ {
    "name": "ude.Top",
    "email": "Taya.Kerluke53@gmail.com",
    "add": {
    "street": " Felds", "suie": "Ste 231",
    "city": "Tinamuth", "zcode": "07584-6653",
    "geo": { "lat": "75.023", "lng": "-17.1824" }
    },
    "phone": "795-827-5446 x18366",
    "website": "nico.com",
    "company": {
    "name": "Champlin, Barrows and me",
    "catchPhrase": "Object user-facing orchestration",
    "bs": " integrated content" 
   },
    "firstN": "Mida", "lastN": "Feey"
    } 
]
   



// Ex14


// a)
 var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}

employee.sayHi() // ?

// output : Hi Coach ! Rawan
// because I 'm just calling a function sayHi which is located in employee object literal


// b) 
var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}

employee.printInfo() // ?

// output : Car owner? undefined
// basiclly I'm just calling a function printInfo which is located in employee object literal
// and this method used conactination for string Car owner and this.hasCar property


// c)
 var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

employee.info.printAddress() // ?
// output : is nothing
// becasuse I don't use a console.log() or document.write() but I returned this value
// Zarqa  


