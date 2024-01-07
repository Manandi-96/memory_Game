
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
    for(let i=0;i<10;i++){
        const card=document.createElement('img');
        
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data_id',i)
        console.log(card, i)
        gridDisplay.appendChild(card);
    }
}

createBoard()