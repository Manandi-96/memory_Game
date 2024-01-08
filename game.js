
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

const gridDisplay= document.querySelector('#grid');
const resultDisplay=document.querySelector('#results');
console.log(gridDisplay)

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data_id',i)
        console.log(card, i)
        gridDisplay.appendChild(card);
        card.addEventListener('click',flipCard)// here im not calling the function,just taking to the function
    }
}

createBoard()

//flipping the card
let cardChosen=[];
let cardChosenId=[];
let cardWon=[];

function checkMatch(){
    // selecting all the cards
    const cards= document.querySelectorAll('#grid img')
    // this gives and array of all the cards inside the grid class
    
    // if click on the same card
    if(cardChosenId[0]===cardChosenId[1]){
        alert('you clicked the same card Homie')
    }

    console.log('check for a match')

    // if click on a match

    if(cardChosen[0]===cardChosen[1]){
        alert('you found a match')

        //replacing with a white background if both the images match
        cards[cardChosenId[0]].setAttribute('src', './img/Solid_white.png');
        cards[cardChosenId[1]].setAttribute('src', './img/Solid_white.png');
        
        // remove the ability to click on the cards
        cards[cardChosenId[0]].removeEventListener('click', flipCard);
        cards[cardChosenId[1]].removeEventListener('click', flipCard);

        //check for wins
        cardWon.push(cardChosen);
    }
    //if no march
    else{
        cards[cardChosenId[0].setAttribute('src','./img/blank.png')];
        cards[cardChosenId[1].setAttribute('src','./img/blank.png')];
        alert('Sorry try again')
    }

    resultDisplay.innerHTML= cardWon.length

    if(cardWon=cardArray.length/2){
        resultDisplay.innerHTML='congratulations you found them all'

    }
    // start the process again
    cardChosen=[];
    cardChosenId=[];

}

function flipCard(){
    const cardId= this.getAttribute('data_id');
    // get the id of the element we clicked
    console.log('clicked',cardId);

    // adding the selected ids to an array
    cardChosenId.push(cardId); 

    //name of the card id
    const name=cardArray[cardId].name
    cardChosen.push(name)
    // img of the card id
    const img= cardArray[cardId].img

    this.setAttribute('src',img)
    // setting src name of the img inside 
  
    // check for a match
    if(cardChosen.length===2){
        setTimeout(checkMatch,500)
    }


}