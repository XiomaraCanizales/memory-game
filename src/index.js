// card options
const cardArray = [
    {
        name: 'greenCard',
        image: 'src/images/green.jpeg'
    },
    {
        name: 'blueCard',
        image: 'src/images/blue.jpeg'
    },
    {
        name: 'orangeCard',
        image: 'src/images/orange.jpeg'
    },
    {
        name: 'pinkCard',
        image: 'src/images/pink.jpeg'
    },
    {
        name: 'purpleCard',
        image: 'src/images/purple.jpeg'
    },
    {
        name: 'salmonCard',
        image: 'src/images/salmon.jpeg'
    },
    // duplicate the cards
    {
        name: 'greenCard',
        image: 'src/images/green.jpeg'
    },
    {
        name: 'blueCard',
        image: 'src/images/blue.jpeg'
    },
    {
        name: 'orangeCard',
        image: 'src/images/orange.jpeg'
    },
    {
        name: 'pinkCard',
        image: 'src/images/pink.jpeg'
    },
    {
        name: 'purpleCard',
        image: 'src/images/purple.jpeg'
    },
    {
        name: 'salmonCard',
        image: 'src/images/salmon.jpeg'
    }
]
// sorting the cards randomly
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

// display results 
const resultDisplay = document.querySelector('#result');

// display cards on site
const grid = document.querySelector('.grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'src/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}
createBoard();

// empty array to store de chosen card
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

// function to flip card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

// function to check for a match
function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    // prevent from clicking the same card
    if (optionOneId === optionTwoId){
        alert('You have clicked the same image!');
        cards[optionOneId].setAttribute('src', 'src/images/blank.png');
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
    } 
    // check for match
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src', 'src/images/white.png');
        cards[optionTwoId].setAttribute('src', 'src/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        alert('Try again!');
        cards[optionOneId].setAttribute('src', 'src/images/blank.png');
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
    }
    cardsChosen =[];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'You have won!';
    }

    console.log(cardsChosen);
    console.log(cardsWon);
}