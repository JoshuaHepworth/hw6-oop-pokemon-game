console.log('pokemon');

// ----------------PLAYER OBJECT
const cardsInPlay = [];
const player = {
		name: "Josh",
		cards: 'cards',
		recieveCard: function(){
		// cardsInPlay = Math.floor(Math.random()*100)
		console.log(`${player.name} has recieved ${cardsInPlay}`)
		}
		playCard: function(){
		console.log(`${player.name} has chosen`)
		}
		checkStats: function(){
			console.log(`${player.name} has a score of`)
		}
}
	console.log(player.recieveCard())
	console.log(player);
	
// console.log(player)
// player.recieveCard();
// The player should be able to:


// see their stats: their points and how many rounds they've won.


// see what cards they have been dealt/see what cards are left in their hand


// pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.


// receive new cards given to them by the game each round.


// see the cards that they have played in the past.
//-------------------THE COMPUTER
const computer = {
	name: 'computer',
	cards: 'cards',
	stats: 'stats',
	recieveCard: function(){
	
	// cardsInPlay = Math.floor(Math.random()*100)
		console.log(`${computer.name} has recieved ${cardsInPlay}!`)
		}
		playCard: function(){
			console.log(`${computer.name} has played ${cardsInPlay}!`)
		}


}
//-------------------THE UI

// The "UI"
// The user should see the following in the console:

// the scoreboard after each round

// the cards in the player's hand

// the cards in the computer's hand

// the cards that are in play

// the winner of each round (or if there was a tie)

// the winner of the game when the game is over

// the final score when the game is over


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


let cards =
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
for(let key in cards) {
	console.log(cards[key])
}

console.log(cards);


//----------------SHUFFLE DECK

const shuffle = (array) => {
	for (let i = array.length -1; )
}





























