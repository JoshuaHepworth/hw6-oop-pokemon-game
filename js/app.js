console.log('pokemon');

// ----------------PLAYER OBJECT
class Player {
	constructor(name,cards,stats){
		this.name = name;
		this.cards = cards;
		this.stats = stats;
	}
	pickCard(){
		console.log(`${this.name} has chosen`)
	}
	recieveCard(){
		console.log(`${this.name} has recieved ${this.cards}`)
	}
}
player = new Player('Josh')
console.log(player)
// The player should be able to:


// see their stats: their points and how many rounds they've won.


// see what cards they have been dealt/see what cards are left in their hand


// pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.


// receive new cards given to them by the game each round.


// see the cards that they have played in the past.

//------------------GAME OBJECT
// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)

// know what cards have been played

// know how many cards are left to be played/dealt overall

// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.

// track rounds

// track number of rounds won for both player and computer

// automatically deal 3 cards from the library to the player and 3 cards to the computer each round

// determine the winner of each play

// stop once there are no cards left or not enough to deal 3 to each the player and computer

const game = {


}










































const cards =
[
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]

// console.log(game);

































