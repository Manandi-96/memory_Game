
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
        img:'./img/img5.jpg'
    } ,
    {
        name: 'img5',
        img:'./img/img5.jpg'
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
        img:'./img/img5.jpg'
    } ,
    {
        name: 'img5',
        img:'./img/img5.jpg'
    }     
];


// scuffling the array
cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)

const gridDisplay= document.querySelector('#grid');
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
const cardChosen=[];

function flipCard(){
    console.log(cardArray);
    const cardId= this.getAttribute('data_id');
    console.log('clicked',cardId);
    //name of the card id
    const name=cardArray[cardId].name
    console.log( cardArray[cardId].name)
    cardChosen.push(name)

    console.log(cardChosen)
    const img= cardArray[cardId].img
    this.setAttribute('src',img)
}