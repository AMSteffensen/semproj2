;(function(window){
	// Game
	var Game = function(el, option){
		this.el = document.getElementById(el);
		this.option = option;
		// 	Info section
	
		this.info_div = document.createElement('div');
		this.info_div.id = "info_div";
		// 	Deck
	
		this.deck_div = document.createElement("div");
		this.deck_div.id = "deck_div";
		this.gameDeck = new Deck(this.deck_div, option);
		this.gameDeck.buildDeck();

		var shuffleBtn =document.createElement("button");
		shuffleBtn.innerHTML = "Shuffle";
		shuffleBtn.onclick = this.gameDeck.shuffle.bind(this);
		
		this.info_div.appendChild(shuffleBtn);
		// 	Discard Pile
		// 	Rules

		this.el.appendChild(this.info_div);
		this.el.appendChild(this.deck_div);

	}
	

	// Deck
	var Deck = function(deck_div, option){
		this.deckData = option.data;
		this.buildDeck = function(){
			var parentFrag = document.createDocumentFragment();
			deck_div.innerHTML = "";
			for (var i = this.deckData.length - 1; i >= 0; i--) {
				var card = new Card();
				card.id = "card-" + i;
				card.data = this.deckData[i];
				card.buildCard(parentFrag);
			}
			deck_div.appendChild(parentFrag);
			
		}
	
		
	}
	// 	Cards
	// 	----
	// 	shuffle
	Deck.prototype.shuffle = function(){
		var cardsToShuffle = this.gameDeck.deckData;
		var m = cardsToShuffle.length, t, i;
		while(m){
			i = Math.floor(Math.random() * m--);
			t = cardsToShuffle[m];
			cardsToShuffle[m] = cardsToShuffle[i];
			cardsToShuffle[i] = t;
		}
		this.gameDeck.deckData = cardsToShuffle;
		this.gameDeck.buildDeck(this.deck_div);
	}
	// 	stack

	// Card
	var Card = function(){
		this.id = "";
		this.data = "";
		this.cardCont = document.createElement("div");
		this.cardCont.className = "card_container";
		this.cardFront = document.createElement("div");
		this.cardFront.className = "card_front";
		this.cardBack = document.createElement("div");
		this.cardBack.className = "card_back";
		this.buildCard = function(parentFrag){
			var flipDiv = document.createElement("div"),
				frontValDiv = document.createElement("div"),
				backValDiv = document.createElement("div"),
				catDiv = document.createElement("div");
			flipDiv.className = "flip";
			frontValDiv.className = "front_val";
			backValDiv.className = "back_val";
			catDiv.className = "cat_val";

			frontValDiv.innerHTML = this.data.q;
			backValDiv.innerHTML = this.data.a;
			catDiv.innerHTML = this.data.category;

			this.cardFront.appendChild(frontValDiv);
			this.cardFront.appendChild(catDiv);
			this.cardBack.appendChild(backValDiv);

			flipDiv.appendChild(this.cardFront);
			flipDiv.appendChild(this.cardBack);

			this.cardCont.id = this.id;
			this.cardCont.appendChild(flipDiv);
			this.cardCont.onclick = function(e){
				e.currentTarget.classList.toggle("flip_card");
				e.currentTarget.classList.toggle("slide_over");

			}
			parentFrag.appendChild(this.cardCont);
		}
	}
	// 	val
	// 	suit
	// 	----
	// 	flip

	// Discard Pile
	var DiscardPile = function(){

	}
	// 	Holders
	// 	----
	// 	accept or reject
	window.Game = Game;
})(window);
