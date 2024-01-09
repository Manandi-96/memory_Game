const gridDisplay= document.querySelector('#grid');
const resultDisplay=document.querySelector('#results');
let cardChosen=[];
let cardChosenId=[];
let cardWon=[];

const cardArray = [
    {
        name: 'img1',
        img: './img/img1.jpg'
    },
    {
        name: 'img2',
        img:'./img/img2.jpg'
    },
    {
        name: 'img3',
        img:'./img/img3.jpg'
    },
    {
        name: 'img4',
        img:'./img/img4.jpg'
    },
    {
        name: 'img5',
        img:'./img/img7.jpg'
    } ,
    {
        name: 'img6',
        img:'./img/img6.jpg'
    },
    {
        name: 'img1',
        img: './img/img1.jpg'
    },
    {
        name: 'img2',
        img:'./img/img2.jpg'
    },
    {
        name: 'img3',
        img:'./img/img3.jpg'
    },
    {
        name: 'img4',
        img:'./img/img4.jpg'
    },
    {
        name: 'img5',
        img:'./img/img7.jpg'
    } ,
    {
        name: 'img6',
        img:'./img/img6.jpg'
    }     
];
// scuffling the array
cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)


// preparing the plank display ( grid display) were img are not visible;

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute('src','./img/blank.png');
        card.setAttribute('data_id',i)
        console.log(card, i)
        gridDisplay.appendChild(card);
        card.addEventListener('click',flipCard)// here im not calling the function,just taking to the function
    }
}

createBoard();



// flipping the cards

function flipCard(){

    const cardId= this.getAttribute('data_id');
    console.log('clicked',cardId);
    cardChosenId.push(cardId); 
    console.log('cardChosenId array',cardChosen)

    const name=cardArray[cardId].name
    cardChosen.push(name)
    console.log('cardChosen array',cardChosen)

    // taking the img src name from the card array and changing src of img from blank to img
    const img= cardArray[cardId].img
    this.setAttribute('src',img) 
    
    // check for a match
     if(cardChosen.length===2){
        setTimeout(checkMatch,50)
     }
}



 function checkMatch(){

const cards= document.querySelectorAll('#grid img')
 // this gives and array of all the cards inside the grid class
console.log(cards)

const card1Id=cardChosenId[0];
const card2Id=cardChosenId[1];
    
// if click on the same card
if(card1Id===card2Id){
alert('you clicked the same card Homie')
}

const cardName1=cardChosen[0];
const cardName2=cardChosen[1];

 if(cardName1===cardName2){
 alert('you found a match')

//replacing with a white background if both the images match
console.log(cards[card1Id])
cards[card1Id].setAttribute('src', './img/Solid_white.png');
cards[card2Id].setAttribute('src', './img/Solid_white.png');
        
// // remove the ability to click on the cards
cards[card1Id].removeEventListener('click', flipCard);
cards[card2Id].removeEventListener('click', flipCard);
console.log(cards)

 //check for wins
   cardWon.push(cardChosen);
   console.log('cardsWon: ',cardWon)


}
//if no march
else {
cards[card1Id].setAttribute('src','./img/blank.png');
cards[card2Id].setAttribute('src','./img/blank.png');
alert('Sorry try again')
 }

resultDisplay.innerHTML= cardWon.length

if (cardWon.length === cardArray.length) {
  resultDisplay.innerHTML = 'Congratulations, you found them all';
}

    // start the process again
    cardChosen=[];
    cardChosenId=[];
}




