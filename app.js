const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
      {val: 'Easy'}, 
      {val: 'Med'}, 
      {val: 'Hard'},
    ],
  }
 console.log('___________ex 1__________');
 //console.dir(pokemon, { maxArrayLength: null })
 console.log(pokemon[58].name);
 console.log('___________ex 2__________');
 //console.log(game);
 console.log('___________ex 3__________');
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
console.log(game.difficulty);
console.log('___________ex 4__________');
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[0])
console.log(game.party);
console.log('___________ex 5__________');
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[3])
game.party.push(pokemon[6])
game.party.push(pokemon[24])
console.log(game.party);
console.log('___________ex 6__________');
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
for (let completed = 0; completed < 3; completed++) {
    game.gyms[completed] = true;
}
console.log(game.gyms);
console.log('___________ex 7__________');
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0,1,pokemon[1]);
game.party.splice(3,1,pokemon[4]);
game.party.splice(6,1,pokemon[7]);
game.party.splice(24,1,pokemon[25]);
console.log(game.party);
console.log('___________ex 8__________');
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let name = 0; name < name.length; name++) { 
  console.log(name); 
}

console.log(game.party[0]);
console.log(game.party[1]);
console.log(game.party[2]);
console.log(game.party[3]);
console.log('___________ex 9__________');








